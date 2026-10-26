import { DEFAULT_LOCALE, type Locale, isLocale } from '../consts';
import { en } from './en';
import { zh, type Dictionary } from './zh';

const dictionaries: Record<Locale, Dictionary> = { zh, en };

export function getDictionary(locale: Locale): Dictionary {
	return dictionaries[locale];
}

export function localeFromParam(value: string | undefined): Locale {
	if (value && isLocale(value)) return value;
	return DEFAULT_LOCALE;
}

export function localizePath(locale: Locale, path = ''): string {
	const clean = path.replace(/^\/+|\/+$/g, '');
	return clean ? `/${locale}/${clean}` : `/${locale}/`;
}

export function switchLocalePath(
	currentLocale: Locale,
	targetLocale: Locale,
	pathname: string,
): string {
	const withoutLocale = pathname.replace(new RegExp(`^/${currentLocale}(?=/|$)`), '') || '/';
	const clean = withoutLocale === '/' ? '' : withoutLocale.replace(/^\//, '');
	return localizePath(targetLocale, clean);
}

export type { Dictionary };
