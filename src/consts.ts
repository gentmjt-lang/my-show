export const BRAND = {
	zh: '程序员小马哥',
	en: '程序员小马哥',
} as const;

export const LOCALES = ['zh', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'zh';

/** Contact placeholders — replace before launch */
export const CONTACT = {
	email: 'hello@example.com',
	wechat: 'wechat-placeholder',
} as const;

export function isLocale(value: string): value is Locale {
	return (LOCALES as readonly string[]).includes(value);
}
