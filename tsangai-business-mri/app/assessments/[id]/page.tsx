import { notFound } from 'next/navigation';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AssessmentRunner from '@/components/AssessmentRunner';
import { assessments, getAssessment } from '@/lib/assessments';

export function generateStaticParams() {
	return assessments.map((a) => ({ id: a.id }));
}

export default async function AssessmentPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const assessment = getAssessment(id);
	if (!assessment) notFound();

	return (
		<>
			<Header />
			<main className="min-h-[70vh] bg-paper-soft">
				<AssessmentRunner assessment={assessment} />
			</main>
			<Footer />
		</>
	);
}
