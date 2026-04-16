/** Prefix a root-absolute path with Astro `base` (required for GitHub project Pages). */
export function withBase(path: string): string {
	if (!path.startsWith('/')) return path;
	const base = import.meta.env.BASE_URL.endsWith('/')
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;
	return `${base}${path.slice(1)}`;
}
