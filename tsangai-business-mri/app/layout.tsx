import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { config } from '@/lib/assessments';

import './globals.css';

export const metadata: Metadata = {
	title: `${config.productName} — Free Business Assessment`,
	description: config.tagline,
};

export default function RootLayout({ children }: { children: ReactNode }) {
	const { colors } = config;
	const cssVars = `:root{--brand:${colors.brand};--brand-dark:${colors.brandDark};--brand-light:${colors.brandLight};--accent:${colors.accent};}`;

	return (
		<html lang="en">
			<head>
				<style dangerouslySetInnerHTML={{ __html: cssVars }} />
			</head>
			<body className="font-sans">{children}</body>
		</html>
	);
}
