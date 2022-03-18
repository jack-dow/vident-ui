import clsx from '../utils/clsx';

/**
 * Returns active theme according to the given document
 */
export const getDocumentTheme = (el: HTMLElement) => {
  const styleAttrValues =
    el
      ?.getAttribute('style')
      ?.split(';')
      .map((i) => i.trim())
      .filter((i) => i.includes('color-scheme')) || [];

  const colorScheme =
    styleAttrValues.length > 0
      ? styleAttrValues[0].replace('color-scheme: ', '').replace(';', '')
      : '';

  const documentTheme = el?.getAttribute('data-theme');

  return documentTheme || colorScheme;
};

export const getThemeName = (theme: string) => {
  if (typeof theme === 'string') {
    return theme?.includes('-theme') ? theme?.replace('-theme', '') : theme;
  }
  return theme;
};

export const setTheme = (theme: string, baseTheme: string) => {
  if (!document) return;
  const el = document.documentElement;

  const prevClasses =
    el
      ?.getAttribute('class')
      ?.split(' ')
      .filter((cls) => !cls.includes('theme') && !cls.includes('light') && !cls.includes('dark')) ||
    [];
  const prevStyles =
    el
      ?.getAttribute('style')
      ?.split(';')
      .filter((style) => style && !style.includes('color-scheme'))
      .map((style) => `${style};`) || [];

  el?.setAttribute('class', clsx(prevClasses, baseTheme, theme));
  el?.setAttribute('style', clsx(prevStyles, `color-scheme: ${getThemeName(theme)};`));
};
