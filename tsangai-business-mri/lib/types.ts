// ---------------------------------------------------------------
// Shared types for the assessment engine.
// The JSON files in /data/assessments must follow this shape.
// ---------------------------------------------------------------

export interface SiteConfig {
	businessName: string;
	productName: string;
	tagline: string;
	logoText: string;
	bookingUrl: string;
	contactEmail: string;
	colors: {
		brand: string;
		brandDark: string;
		brandLight: string;
		accent: string;
	};
	footerNote: string;
}

export interface ChoiceOption {
	label: string;
	points: number; // 0 = worst answer, higher = better
}

export interface Question {
	id: string;
	/** Category id this question belongs to (choice questions only). */
	category?: string;
	/** "choice" (default) or "number" for calculator-style inputs. */
	type?: 'choice' | 'number';
	text: string;
	help?: string;
	options?: ChoiceOption[];
	/** number questions: name used inside metric formulas, e.g. "hourlyRate" */
	variable?: string;
	placeholder?: string;
	suffix?: string; // e.g. "hours / week"
	defaultValue?: number;
}

export interface Category {
	id: string;
	label: string;
	/** Shown in the report when this category scores low. */
	recommendation: string;
}

export interface Metric {
	id: string;
	label: string;
	/** Simple math over number-question variables, e.g. "adminHours * hourlyRate * 52" */
	formula: string;
	format: 'number' | 'hours' | 'currency';
	description?: string;
}

export interface ScoreBand {
	min: number;
	max: number;
	label: string;
	summary: string;
	hoursSavedPerWeek: string;
	revenueOpportunity: string;
	actionPlan: string[]; // 30-day action plan bullets
}

export interface RecommendedTool {
	name: string;
	use: string;
}

export interface Assessment {
	id: string;
	title: string;
	tagline: string;
	description: string;
	icon: string;
	estimatedMinutes: number;
	featured?: boolean;
	categories: Category[];
	questions: Question[];
	metrics?: Metric[];
	bands: ScoreBand[];
	tools: RecommendedTool[];
}

// ------------------------- results -----------------------------

export interface CategoryScore {
	id: string;
	label: string;
	score: number; // 0-100
	recommendation: string;
}

export interface MetricResult {
	id: string;
	label: string;
	value: number;
	formatted: string;
	description?: string;
}

export interface AssessmentResult {
	assessmentId: string;
	assessmentTitle: string;
	overallScore: number; // 0-100
	band: ScoreBand;
	categoryScores: CategoryScore[]; // sorted best → worst
	strengths: CategoryScore[];
	weaknesses: CategoryScore[];
	recommendations: string[]; // top 5, from weakest categories
	metrics: MetricResult[];
	tools: RecommendedTool[];
}
