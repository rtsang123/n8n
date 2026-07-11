/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static export: the whole site becomes plain HTML/CSS/JS files.
	// No server needed — Netlify just serves the "out" folder.
	output: 'export',
	images: { unoptimized: true },
	trailingSlash: true,
};

export default nextConfig;
