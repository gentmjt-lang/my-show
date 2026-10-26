import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseSchema = z.object({
	slug: z.string(),
	title: z.string(),
	subtitle: z.string().optional(),
	summary: z.string(),
	cover: z.string(),
	role: z.string(),
	client: z.string().optional(),
	industry: z.string().optional(),
	year: z.number(),
	duration: z.string(),
	team: z.string().optional(),
	contributions: z.array(z.string()),
	tags: z.array(z.string()),
	featured: z.boolean().default(false),
	order: z.number(),
	outcomeHighlights: z.array(z.string()),
	links: z
		.object({
			live: z.string().optional(),
			press: z.string().optional(),
		})
		.optional(),
	status: z.enum(['shipped', 'prototype', 'concept']),
});

const cases = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/cases',
		// Include locale folder so zh/en pairs can share the same case slug in frontmatter
		generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
	}),
	schema: caseSchema,
});

export const collections = { cases };
