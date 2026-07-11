import { config } from '@/lib/assessments';

export default function Footer() {
	return (
		<footer className="border-t border-black/5 bg-paper-soft py-10">
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center text-sm text-ink-soft">
				<p className="font-semibold text-ink">{config.productName}</p>
				<p>{config.footerNote}</p>
				<p>
					Questions?{' '}
					<a href={`mailto:${config.contactEmail}`} className="text-brand underline">
						{config.contactEmail}
					</a>
				</p>
				<p>
					© {new Date().getFullYear()} {config.businessName}. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
