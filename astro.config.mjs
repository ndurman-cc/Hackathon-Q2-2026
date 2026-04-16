// @ts-check
import { defineConfig } from 'astro/config';

// `site` = Pages hostname. `base` = repo name path for project sites (`/username.github.io/REPO/`).
// For a user site at https://USERNAME.github.io/ only, use base: '/' and a repo named USERNAME.github.io.
// https://docs.astro.build/en/guides/deploy/github/#path-configuration
export default defineConfig({
	site: 'https://ndurman-cc.github.io',
	base: '/Hackathon-Q2-2026/',
	output: 'static',
});
