import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { assessments, config } from '@/lib/assessments';

const steps = [
	{
		title: 'Answer a few questions',
		text: 'Pick an assessment and answer simple multiple-choice questions. It takes about 5 minutes — no prep needed.',
	},
	{
		title: 'Get your score instantly',
		text: 'See exactly where your business is strong, where it leaks time and money, and what to fix first.',
	},
	{
		title: 'Download your action plan',
		text: 'Get a professional PDF report with your 30-day plan — then book a free AI Audit to put it into action.',
	},
];

const testimonials = [
	{
		quote:
			'The report showed me exactly where we were losing hours every week. We automated two processes in the first month.',
		name: 'Placeholder — Realtor, Toronto',
	},
	{
		quote:
			'Five minutes, and I finally had a clear picture of why leads were slipping through the cracks.',
		name: 'Placeholder — Agency Owner, Vancouver',
	},
	{
		quote: 'Simple, fast, and surprisingly accurate. The 30-day plan alone was worth it.',
		name: 'Placeholder — Mortgage Broker, Calgary',
	},
];

export default function HomePage() {
	const featured = assessments.find((a) => a.featured) ?? assessments[0];
	const others = assessments.filter((a) => a.id !== featured.id);

	return (
		<>
			<Header />
			<main>
				{/* Hero */}
				<section className="bg-gradient-to-b from-brand-light/60 to-white">
					<div className="mx-auto max-w-4xl px-5 pb-16 pt-20 text-center sm:pt-28">
						<p className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand shadow-card">
							Free • 5 minutes • Instant results
						</p>
						<h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
							Find out what&apos;s silently costing your business{' '}
							<span className="text-brand">time and money</span>
						</h1>
						<p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft sm:text-xl">
							Take the {featured.title} — a free 5-minute checkup that scores your business,
							pinpoints your biggest bottlenecks, and hands you a 30-day action plan.
						</p>
						<div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Link
								href={`/assessments/${featured.id}/`}
								className="w-full rounded-full bg-brand px-8 py-4 text-lg font-bold text-white shadow-card transition hover:bg-brand-dark hover:shadow-card-hover sm:w-auto"
							>
								Start the {featured.title}
							</Link>
							<a
								href="#assessments"
								className="w-full rounded-full border border-black/10 bg-white px-8 py-4 text-lg font-semibold text-ink transition hover:border-brand hover:text-brand sm:w-auto"
							>
								See all assessments
							</a>
						</div>
						<p className="mt-6 text-sm text-ink-soft">
							No credit card. No sales pressure. Built for service businesses with 2–25 employees.
						</p>
					</div>
				</section>

				{/* How it works */}
				<section className="mx-auto max-w-6xl px-5 py-16">
					<h2 className="text-center text-3xl font-bold tracking-tight">How it works</h2>
					<div className="mt-10 grid gap-6 sm:grid-cols-3">
						{steps.map((step, i) => (
							<div key={step.title} className="rounded-2xl bg-paper-soft p-7">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
									{i + 1}
								</div>
								<h3 className="text-lg font-bold">{step.title}</h3>
								<p className="mt-2 text-ink-soft">{step.text}</p>
							</div>
						))}
					</div>
				</section>

				{/* Assessments */}
				<section id="assessments" className="bg-paper-soft py-16">
					<div className="mx-auto max-w-6xl px-5">
						<h2 className="text-center text-3xl font-bold tracking-tight">
							Choose your free assessment
						</h2>
						<p className="mx-auto mt-3 max-w-2xl text-center text-ink-soft">
							Every assessment gives you a score, your top bottlenecks, and a personalized PDF
							action plan.
						</p>

						{/* Featured card */}
						<Link
							href={`/assessments/${featured.id}/`}
							className="mt-10 block rounded-3xl border-2 border-brand bg-white p-8 shadow-card transition hover:shadow-card-hover"
						>
							<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
								<div>
									<p className="mb-2 inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand">
										Most popular
									</p>
									<h3 className="text-2xl font-bold">
										{featured.icon} {featured.title}
									</h3>
									<p className="mt-2 max-w-2xl text-ink-soft">{featured.description}</p>
								</div>
								<span className="shrink-0 rounded-full bg-brand px-6 py-3 text-center font-bold text-white">
									Start now →
								</span>
							</div>
						</Link>

						<div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
							{others.map((a) => (
								<Link
									key={a.id}
									href={`/assessments/${a.id}/`}
									className="group flex flex-col rounded-2xl bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
								>
									<span className="text-3xl">{a.icon}</span>
									<h3 className="mt-3 text-lg font-bold group-hover:text-brand">{a.title}</h3>
									<p className="mt-1.5 flex-1 text-sm text-ink-soft">{a.tagline}</p>
									<p className="mt-4 text-sm font-semibold text-brand">
										{a.estimatedMinutes} min • Start →
									</p>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Testimonials */}
				<section className="mx-auto max-w-6xl px-5 py-16">
					<h2 className="text-center text-3xl font-bold tracking-tight">
						What business owners say
					</h2>
					<div className="mt-10 grid gap-6 sm:grid-cols-3">
						{testimonials.map((t) => (
							<figure key={t.name} className="rounded-2xl border border-black/5 bg-white p-7 shadow-card">
								<p className="text-brand" aria-hidden>
									★★★★★
								</p>
								<blockquote className="mt-3 text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
								<figcaption className="mt-4 text-sm font-semibold text-ink-soft">
									{t.name}
								</figcaption>
							</figure>
						))}
					</div>
				</section>

				{/* Final CTA */}
				<section className="bg-brand">
					<div className="mx-auto max-w-4xl px-5 py-16 text-center text-white">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Your business has leaks. Find them in 5 minutes.
						</h2>
						<p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
							Take the free assessment now, or skip straight to a call with a real human.
						</p>
						<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Link
								href={`/assessments/${featured.id}/`}
								className="w-full rounded-full bg-white px-8 py-4 text-lg font-bold text-brand transition hover:bg-brand-light sm:w-auto"
							>
								Start the free assessment
							</Link>
							<a
								href={config.bookingUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="w-full rounded-full border-2 border-white/70 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10 sm:w-auto"
							>
								Book a Free AI Audit
							</a>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
