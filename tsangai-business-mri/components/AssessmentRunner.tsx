'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

import { config } from '@/lib/assessments';
import { scoreAssessment, type Answers } from '@/lib/scoring';
import type { Assessment, AssessmentResult } from '@/lib/types';

type Stage = 'intro' | 'questions' | 'lead' | 'results';

export default function AssessmentRunner({ assessment }: { assessment: Assessment }) {
	const [stage, setStage] = useState<Stage>('intro');
	const [questionIndex, setQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState<Answers>({});
	const [numberInput, setNumberInput] = useState('');
	const [lead, setLead] = useState({ name: '', email: '' });
	const [leadError, setLeadError] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const [result, setResult] = useState<AssessmentResult | null>(null);

	const questions = assessment.questions;
	const question = questions[questionIndex];
	const progress = Math.round((questionIndex / questions.length) * 100);

	const advance = (updated: Answers) => {
		if (questionIndex + 1 < questions.length) {
			setQuestionIndex(questionIndex + 1);
			const nextQuestion = questions[questionIndex + 1];
			setNumberInput(
				nextQuestion.type === 'number' && updated[nextQuestion.id] !== undefined
					? String(updated[nextQuestion.id])
					: '',
			);
		} else {
			setResult(scoreAssessment(assessment, updated));
			setStage('lead');
		}
	};

	const answerChoice = (optionIndex: number) => {
		const updated = { ...answers, [question.id]: optionIndex };
		setAnswers(updated);
		advance(updated);
	};

	const answerNumber = () => {
		const value = parseFloat(numberInput);
		const updated = {
			...answers,
			[question.id]: Number.isFinite(value) && value >= 0 ? value : (question.defaultValue ?? 0),
		};
		setAnswers(updated);
		advance(updated);
	};

	const goBack = () => {
		if (questionIndex === 0) {
			setStage('intro');
			return;
		}
		const prevIndex = questionIndex - 1;
		setQuestionIndex(prevIndex);
		const prev = questions[prevIndex];
		setNumberInput(
			prev.type === 'number' && answers[prev.id] !== undefined ? String(answers[prev.id]) : '',
		);
	};

	const submitLead = async (e: React.FormEvent) => {
		e.preventDefault();
		setLeadError('');
		if (!lead.name.trim() || !/^\S+@\S+\.\S+$/.test(lead.email)) {
			setLeadError('Please enter your name and a valid email address.');
			return;
		}
		setSubmitting(true);
		try {
			// Netlify Forms: posts to the static form in public/__forms.html.
			// On your local computer this does nothing bad — it just skips saving.
			await fetch('/__forms.html', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams({
					'form-name': 'leads',
					name: lead.name,
					email: lead.email,
					assessment: assessment.title,
					score: String(result?.overallScore ?? ''),
				}).toString(),
			});
		} catch {
			// Never block the user from their results if saving the lead fails.
		}
		setSubmitting(false);
		setStage('results');
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const downloadPdf = async () => {
		if (!result) return;
		const { generatePdf } = await import('@/lib/pdf');
		generatePdf(result, lead, config);
	};

	// ------------------------------- INTRO -------------------------------
	if (stage === 'intro') {
		return (
			<div className="mx-auto max-w-2xl px-5 py-16 text-center">
				<span className="text-5xl">{assessment.icon}</span>
				<h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
					{assessment.title}
				</h1>
				<p className="mt-4 text-lg text-ink-soft">{assessment.description}</p>
				<div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-ink-soft">
					<span className="rounded-full bg-white px-4 py-2 shadow-card">
						⏱ {assessment.estimatedMinutes} minutes
					</span>
					<span className="rounded-full bg-white px-4 py-2 shadow-card">
						❓ {questions.length} questions
					</span>
					<span className="rounded-full bg-white px-4 py-2 shadow-card">📄 Free PDF report</span>
				</div>
				<button
					onClick={() => setStage('questions')}
					className="mt-10 w-full rounded-full bg-brand px-10 py-4 text-lg font-bold text-white shadow-card transition hover:bg-brand-dark sm:w-auto"
				>
					Start the assessment →
				</button>
				<p className="mt-4 text-sm text-ink-soft">100% free. Your results appear instantly.</p>
				<Link href="/" className="mt-8 block text-sm font-semibold text-brand hover:underline">
					← Back to all assessments
				</Link>
			</div>
		);
	}

	// ----------------------------- QUESTIONS -----------------------------
	if (stage === 'questions') {
		return (
			<div className="mx-auto max-w-2xl px-5 py-12">
				{/* Progress */}
				<div className="mb-8">
					<div className="mb-2 flex items-center justify-between text-sm font-semibold text-ink-soft">
						<span>
							Question {questionIndex + 1} of {questions.length}
						</span>
						<span>{progress}% complete</span>
					</div>
					<div className="h-2.5 overflow-hidden rounded-full bg-black/10">
						<div
							className="h-full rounded-full bg-brand transition-all duration-300"
							style={{ width: `${Math.max(4, progress)}%` }}
						/>
					</div>
				</div>

				<div className="rounded-3xl bg-white p-7 shadow-card sm:p-10">
					<h2 className="text-xl font-bold leading-snug sm:text-2xl">{question.text}</h2>
					{question.help && <p className="mt-2 text-sm text-ink-soft">{question.help}</p>}

					{question.type === 'number' ? (
						<form
							className="mt-7"
							onSubmit={(e) => {
								e.preventDefault();
								answerNumber();
							}}
						>
							<div className="flex items-center gap-3">
								<input
									type="number"
									inputMode="decimal"
									min={0}
									autoFocus
									value={numberInput}
									onChange={(e) => setNumberInput(e.target.value)}
									placeholder={question.placeholder ?? '0'}
									className="w-full rounded-xl border border-black/15 px-4 py-3.5 text-lg outline-none focus:border-brand focus:ring-2 focus:ring-brand/25"
								/>
								{question.suffix && (
									<span className="shrink-0 text-sm font-semibold text-ink-soft">
										{question.suffix}
									</span>
								)}
							</div>
							<button
								type="submit"
								className="mt-6 w-full rounded-full bg-brand px-8 py-3.5 text-lg font-bold text-white transition hover:bg-brand-dark"
							>
								Next →
							</button>
						</form>
					) : (
						<div className="mt-7 flex flex-col gap-3">
							{(question.options ?? []).map((option, i) => (
								<button
									key={option.label}
									onClick={() => answerChoice(i)}
									className={`rounded-xl border px-5 py-4 text-left text-base font-medium transition hover:border-brand hover:bg-brand-light/50 ${
										answers[question.id] === i
											? 'border-brand bg-brand-light/60'
											: 'border-black/10 bg-white'
									}`}
								>
									{option.label}
								</button>
							))}
						</div>
					)}
				</div>

				<button
					onClick={goBack}
					className="mt-6 text-sm font-semibold text-ink-soft hover:text-brand"
				>
					← Back
				</button>
			</div>
		);
	}

	// ------------------------------- LEAD ---------------------------------
	if (stage === 'lead') {
		return (
			<div className="mx-auto max-w-xl px-5 py-16">
				<div className="rounded-3xl bg-white p-8 text-center shadow-card sm:p-10">
					<div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-2xl">
						✅
					</div>
					<h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
						Your results are ready!
					</h1>
					<p className="mt-3 text-ink-soft">
						Enter your name and email to unlock your score, your personalized report, and your
						free PDF action plan.
					</p>
					<form onSubmit={submitLead} className="mt-7 flex flex-col gap-4 text-left">
						<label className="text-sm font-semibold">
							First name
							<input
								type="text"
								autoComplete="given-name"
								value={lead.name}
								onChange={(e) => setLead({ ...lead, name: e.target.value })}
								placeholder="Jane"
								className="mt-1.5 w-full rounded-xl border border-black/15 px-4 py-3.5 text-base font-normal outline-none focus:border-brand focus:ring-2 focus:ring-brand/25"
							/>
						</label>
						<label className="text-sm font-semibold">
							Email address
							<input
								type="email"
								autoComplete="email"
								value={lead.email}
								onChange={(e) => setLead({ ...lead, email: e.target.value })}
								placeholder="jane@company.com"
								className="mt-1.5 w-full rounded-xl border border-black/15 px-4 py-3.5 text-base font-normal outline-none focus:border-brand focus:ring-2 focus:ring-brand/25"
							/>
						</label>
						{leadError && <p className="text-sm font-semibold text-red-600">{leadError}</p>}
						<button
							type="submit"
							disabled={submitting}
							className="mt-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white transition hover:bg-brand-dark disabled:opacity-60"
						>
							{submitting ? 'Unlocking…' : 'Show my results →'}
						</button>
						<p className="text-center text-xs text-ink-soft">
							We respect your inbox. No spam, ever. Unsubscribe anytime.
						</p>
					</form>
				</div>
			</div>
		);
	}

	// ------------------------------ RESULTS -------------------------------
	if (!result) return null;
	const scoreColor =
		result.overallScore >= 70 ? 'text-accent' : result.overallScore >= 40 ? 'text-brand' : 'text-red-500';

	return (
		<div className="mx-auto max-w-3xl px-5 py-12">
			{/* Score card */}
			<div className="rounded-3xl bg-white p-8 text-center shadow-card sm:p-10">
				<p className="text-sm font-bold uppercase tracking-widest text-ink-soft">
					{assessment.title} — Results for {lead.name}
				</p>
				<p className={`mt-6 text-7xl font-extrabold tracking-tight ${scoreColor}`}>
					{result.overallScore}
				</p>
				<p className="mt-1 text-sm font-semibold text-ink-soft">out of 100</p>
				<p className="mt-4 text-2xl font-bold">{result.band.label}</p>
				<p className="mx-auto mt-3 max-w-xl text-ink-soft">{result.band.summary}</p>

				<div className="mt-8 grid gap-4 sm:grid-cols-2">
					<div className="rounded-2xl bg-paper-soft p-5">
						<p className="text-sm font-semibold text-ink-soft">Estimated hours you could save</p>
						<p className="mt-1 text-2xl font-extrabold text-brand">
							{result.band.hoursSavedPerWeek}
						</p>
					</div>
					<div className="rounded-2xl bg-paper-soft p-5">
						<p className="text-sm font-semibold text-ink-soft">Estimated revenue opportunity</p>
						<p className="mt-1 text-2xl font-extrabold text-brand">
							{result.band.revenueOpportunity}
						</p>
					</div>
				</div>

				{result.metrics.length > 0 && (
					<div className="mt-4 grid gap-4 sm:grid-cols-2">
						{result.metrics.map((m) => (
							<div key={m.id} className="rounded-2xl bg-brand-light/60 p-5">
								<p className="text-sm font-semibold text-ink-soft">{m.label}</p>
								<p className="mt-1 text-2xl font-extrabold text-brand">{m.formatted}</p>
								{m.description && <p className="mt-1 text-xs text-ink-soft">{m.description}</p>}
							</div>
						))}
					</div>
				)}

				<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
					<button
						onClick={downloadPdf}
						className="rounded-full bg-brand px-8 py-4 text-lg font-bold text-white transition hover:bg-brand-dark"
					>
						📄 Download PDF report
					</button>
					<a
						href={config.bookingUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full border-2 border-brand px-8 py-4 text-center text-lg font-bold text-brand transition hover:bg-brand-light/60"
					>
						Book my free AI Audit
					</a>
				</div>
			</div>

			{/* Category breakdown */}
			{result.categoryScores.length > 1 && (
				<div className="mt-6 rounded-3xl bg-white p-8 shadow-card">
					<h2 className="text-xl font-bold">Your scores by area</h2>
					<div className="mt-5 flex flex-col gap-4">
						{result.categoryScores.map((cat) => (
							<div key={cat.id}>
								<div className="mb-1.5 flex justify-between text-sm font-semibold">
									<span>{cat.label}</span>
									<span className="text-ink-soft">{cat.score}/100</span>
								</div>
								<div className="h-2.5 overflow-hidden rounded-full bg-black/10">
									<div
										className={`h-full rounded-full ${
											cat.score >= 70 ? 'bg-accent' : cat.score >= 40 ? 'bg-brand' : 'bg-red-400'
										}`}
										style={{ width: `${Math.max(4, cat.score)}%` }}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			)}

			{/* Recommendations */}
			<div className="mt-6 rounded-3xl bg-white p-8 shadow-card">
				<h2 className="text-xl font-bold">Your top recommendations</h2>
				<ol className="mt-5 flex flex-col gap-4">
					{result.recommendations.map((rec, i) => (
						<li key={rec} className="flex gap-4">
							<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light font-bold text-brand">
								{i + 1}
							</span>
							<p className="pt-1">{rec}</p>
						</li>
					))}
				</ol>
			</div>

			{/* Action plan */}
			<div className="mt-6 rounded-3xl bg-white p-8 shadow-card">
				<h2 className="text-xl font-bold">Your 30-day action plan</h2>
				<ol className="mt-5 flex flex-col gap-4">
					{result.band.actionPlan.map((step, i) => (
						<li key={step} className="flex gap-4">
							<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 font-bold text-accent">
								{i + 1}
							</span>
							<p className="pt-1">{step}</p>
						</li>
					))}
				</ol>
			</div>

			{/* Final CTA */}
			<div className="mt-6 rounded-3xl bg-brand p-8 text-center text-white sm:p-10">
				<h2 className="text-2xl font-bold">Want help fixing this — fast?</h2>
				<p className="mx-auto mt-3 max-w-xl text-white/85">
					Book a free 30-minute AI Audit. We&apos;ll walk through your report together and map out
					the two or three changes that will save you the most time and money.
				</p>
				<a
					href={config.bookingUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-6 inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-brand transition hover:bg-brand-light"
				>
					Book my free AI Audit →
				</a>
				<p className="mt-4 text-sm text-white/70">Limited audit spots available each month.</p>
			</div>

			<div className="mt-8 text-center">
				<Link href="/" className="text-sm font-semibold text-brand hover:underline">
					← Try another assessment
				</Link>
			</div>
		</div>
	);
}
