import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../consts';

export type CaseEntry = CollectionEntry<'cases'>;

/** Entry id from glob is like `zh/harbor-checkout` (path under base). */
export function caseLocale(entry: CaseEntry): Locale | null {
	const id = entry.id;
	if (id.startsWith('zh/') || id.startsWith('zh\\')) return 'zh';
	if (id.startsWith('en/') || id.startsWith('en\\')) return 'en';
	return null;
}

export async function getCasesForLocale(locale: Locale): Promise<CaseEntry[]> {
	const all = await getCollection('cases');
	return all
		.filter((entry) => caseLocale(entry) === locale)
		.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedCases(locale: Locale): Promise<CaseEntry[]> {
	const cases = await getCasesForLocale(locale);
	const featured = cases.filter((c) => c.data.featured);
	return featured.length ? featured : cases.slice(0, 4);
}

export async function getCaseBySlug(
	locale: Locale,
	slug: string,
): Promise<CaseEntry | undefined> {
	const cases = await getCasesForLocale(locale);
	return cases.find((c) => c.data.slug === slug);
}
