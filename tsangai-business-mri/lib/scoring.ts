import type {
	Assessment,
	AssessmentResult,
	CategoryScore,
	MetricResult,
	ScoreBand,
} from './types';

/** Answers keyed by question id. Choice → option index, number → typed value. */
export type Answers = Record<string, number>;

// ---------------------------------------------------------------
// Tiny safe formula evaluator: numbers, variables, + - * / ( ).
// Powers calculator assessments (Time Leak, ROI) from plain JSON.
// ---------------------------------------------------------------
export function evaluateFormula(formula: string, variables: Record<string, number>): number {
	const tokens = formula.match(/\d+(?:\.\d+)?|[A-Za-z_][A-Za-z0-9_]*|[+\-*/()]/g) ?? [];
	let pos = 0;

	const peek = () => tokens[pos];
	const next = () => tokens[pos++];

	function parseExpression(): number {
		let value = parseTerm();
		while (peek() === '+' || peek() === '-') {
			const op = next();
			const rhs = parseTerm();
			value = op === '+' ? value + rhs : value - rhs;
		}
		return value;
	}

	function parseTerm(): number {
		let value = parseFactor();
		while (peek() === '*' || peek() === '/') {
			const op = next();
			const rhs = parseFactor();
			value = op === '*' ? value * rhs : rhs === 0 ? 0 : value / rhs;
		}
		return value;
	}

	function parseFactor(): number {
		const token = next();
		if (token === undefined) return 0;
		if (token === '(') {
			const value = parseExpression();
			next(); // consume ')'
			return value;
		}
		if (token === '-') return -parseFactor();
		if (/^\d/.test(token)) return parseFloat(token);
		return variables[token] ?? 0;
	}

	const result = parseExpression();
	return Number.isFinite(result) ? result : 0;
}

export function formatMetric(value: number, format: 'number' | 'hours' | 'currency'): string {
	const rounded = Math.round(value);
	const withCommas = rounded.toLocaleString('en-US');
	if (format === 'currency') return `$${withCommas}`;
	if (format === 'hours') return `${withCommas} hrs`;
	return withCommas;
}

function findBand(bands: ScoreBand[], score: number): ScoreBand {
	return bands.find((b) => score >= b.min && score <= b.max) ?? bands[bands.length - 1];
}

// ---------------------------------------------------------------
// Main scoring entry point.
// ---------------------------------------------------------------
export function scoreAssessment(assessment: Assessment, answers: Answers): AssessmentResult {
	const earnedByCategory: Record<string, number> = {};
	const maxByCategory: Record<string, number> = {};
	const variables: Record<string, number> = {};

	for (const question of assessment.questions) {
		if (question.type === 'number') {
			if (question.variable) {
				variables[question.variable] = answers[question.id] ?? question.defaultValue ?? 0;
			}
			continue;
		}
		const options = question.options ?? [];
		if (options.length === 0) continue;
		const category = question.category ?? 'general';
		const maxPoints = Math.max(...options.map((o) => o.points));
		const chosenIndex = answers[question.id];
		const earned = chosenIndex !== undefined ? (options[chosenIndex]?.points ?? 0) : 0;
		earnedByCategory[category] = (earnedByCategory[category] ?? 0) + earned;
		maxByCategory[category] = (maxByCategory[category] ?? 0) + maxPoints;
	}

	const categoryScores: CategoryScore[] = assessment.categories
		.filter((c) => (maxByCategory[c.id] ?? 0) > 0)
		.map((c) => ({
			id: c.id,
			label: c.label,
			score: Math.round(((earnedByCategory[c.id] ?? 0) / maxByCategory[c.id]) * 100),
			recommendation: c.recommendation,
		}))
		.sort((a, b) => b.score - a.score);

	const totalEarned = Object.values(earnedByCategory).reduce((a, b) => a + b, 0);
	const totalMax = Object.values(maxByCategory).reduce((a, b) => a + b, 0);
	const overallScore = totalMax > 0 ? Math.round((totalEarned / totalMax) * 100) : 0;

	const band = findBand(assessment.bands, overallScore);

	const strengths = categoryScores.filter((c) => c.score >= 60).slice(0, 3);
	const weaknesses = [...categoryScores].reverse().filter((c) => c.score < 80).slice(0, 3);
	const recommendations = [...categoryScores]
		.reverse()
		.slice(0, 5)
		.map((c) => c.recommendation);

	// Derived variables available to formulas
	variables.score = overallScore;

	const metrics: MetricResult[] = (assessment.metrics ?? []).map((metric) => {
		const value = Math.max(0, evaluateFormula(metric.formula, variables));
		variables[metric.id] = value; // metrics can reference earlier metrics
		return {
			id: metric.id,
			label: metric.label,
			value,
			formatted: formatMetric(value, metric.format),
			description: metric.description,
		};
	});

	return {
		assessmentId: assessment.id,
		assessmentTitle: assessment.title,
		overallScore,
		band,
		categoryScores,
		strengths,
		weaknesses,
		recommendations,
		metrics,
		tools: assessment.tools,
	};
}
