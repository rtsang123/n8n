import Link from 'next/link';

import { config } from '@/lib/assessments';

export default function Header() {
	return (
		<header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-md">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
				<Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
					<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-extrabold text-white">
						{config.logoText.charAt(0)}
					</span>
					{config.logoText}
				</Link>
				<a
					href={config.bookingUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
				>
					Book a Free AI Audit
				</a>
			</div>
		</header>
	);
}
