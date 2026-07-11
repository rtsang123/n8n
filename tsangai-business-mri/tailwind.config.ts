import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				// These map to CSS variables set from data/config.json
				brand: 'var(--brand)',
				'brand-dark': 'var(--brand-dark)',
				'brand-light': 'var(--brand-light)',
				accent: 'var(--accent)',
				ink: 'var(--ink)',
				'ink-soft': 'var(--ink-soft)',
				paper: 'var(--paper)',
				'paper-soft': 'var(--paper-soft)',
			},
			fontFamily: {
				sans: [
					'-apple-system',
					'BlinkMacSystemFont',
					'"SF Pro Display"',
					'"Segoe UI"',
					'Roboto',
					'Helvetica',
					'Arial',
					'sans-serif',
				],
			},
			boxShadow: {
				card: '0 1px 2px rgba(16, 24, 40, 0.04), 0 8px 24px rgba(16, 24, 40, 0.06)',
				'card-hover': '0 2px 4px rgba(16, 24, 40, 0.06), 0 16px 40px rgba(16, 24, 40, 0.12)',
			},
			borderRadius: {
				'2xl': '1rem',
				'3xl': '1.5rem',
			},
		},
	},
	plugins: [],
};

export default config;
