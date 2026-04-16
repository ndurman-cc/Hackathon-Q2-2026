import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/caseStudies' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		role: z.string(),
		timeline: z.string(),
		featured: z.boolean().optional(),
		order: z.number().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
		links: z
			.array(
				z.object({
					label: z.string(),
					href: z.string().url(),
				}),
			)
			.optional(),
	}),
});

export const collections = {
	caseStudies,
};
