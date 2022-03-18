import React, { createContext, useContext, useEffect, useMemo } from 'react';

import PreflightCSS from './preflight-css';
import { merge } from '../utils/merge';
import { baseTheme, createTheme } from './stitches.config';
import { mode, rgba, get, linearGradient, radialGradient } from './utils';

import type { Defaults, DefaultsOverride, Theme, Utils, CSSObject } from './types';
import { setTheme } from './set-theme';

type ProviderStyles = Record<
  string,
  | Record<string, CSSObject>
  | ((helpers: { theme: Theme; utils: Utils }) => Record<string, CSSObject>)
>;

interface ThemeContextType {
  theme: Theme;
  styles: ProviderStyles;
  utils: Utils;
  withoutClassNames: boolean;
}

const defaults: Defaults = {
  loader: 'oval',
  dateFormat: 'MMMM D, YYYY',
  primaryColor: 'sky',
  other: {},
  datesLocale: 'en',
};

export const DEFAULT_THEME = merge(baseTheme, defaults, { isDarkMode: undefined });

const DEFAULT_UTILS = {
  mode: (light: any, dark: any) => mode(light, dark)(DEFAULT_THEME),
  rgba: (color: string, alpha: number) => rgba(color, alpha)(DEFAULT_THEME),
  get,
  linearGradient,
  radialGradient,
};

const VidentThemeContext = createContext<ThemeContextType>({
  theme: DEFAULT_THEME,
  utils: DEFAULT_UTILS,
  styles: {},
  withoutClassNames: false,
});

export function useVidentContext() {
  return useContext(VidentThemeContext);
}

export function useVidentTheme() {
  return useContext(VidentThemeContext)?.theme || DEFAULT_THEME;
}

export function useVidentThemeStyles() {
  return useContext(VidentThemeContext)?.styles || {};
}

export function useVidentIsDarkMode() {
  return useContext(VidentThemeContext)?.theme.isDarkMode || undefined;
}

export function useVidentUtils() {
  return useContext(VidentThemeContext)?.utils || DEFAULT_UTILS;
}

export function useVidentHelpers() {
  const context = useContext(VidentThemeContext);
  return { theme: context.theme || DEFAULT_THEME, utils: context.utils || DEFAULT_UTILS };
}

interface ProviderProps {
  theme?: string;
  themes?: {
    [key: string]: ReturnType<typeof createTheme>;
  };
  styles?: ProviderStyles;
  defaults?: DefaultsOverride;
  withoutClassNames?: boolean;
  withoutPreflight?: boolean;
  children: React.ReactNode;
}

export function VidentProvider({
  theme: currentTheme = 'system',
  themes: userThemes = {},
  styles = {},
  withoutPreflight = false,
  withoutClassNames = false,
  defaults: userDefaults = {},
  children,
}: ProviderProps) {
  const isBrowser =
    typeof window !== 'undefined' && window.document && window.document.documentElement;

  useEffect(() => {
    if (!isBrowser || !userThemes) return;
    setTheme(userThemes[currentTheme]?.className || 'system', userThemes.base);
  }, [isBrowser, currentTheme, userThemes]);

  const providerValue = useMemo(() => {
    const mergedTheme = merge(
      baseTheme,
      userThemes[currentTheme] ?? {},
      merge(defaults, userDefaults),
      {
        isDarkMode: currentTheme === 'dark',
      }
    );
    const utils = {
      mode: (light: any, dark: any) => mode(light, dark)(mergedTheme),
      rgba: (color: string, alpha: number) => rgba(color, alpha)(mergedTheme),
      get,
      linearGradient,
      radialGradient,
    };
    return {
      theme: mergedTheme,
      utils,
      styles,
      withoutClassNames,
    };
  }, [currentTheme, userThemes, userDefaults, styles, withoutClassNames]);

  return (
    <VidentThemeContext.Provider value={providerValue}>
      {!withoutPreflight && <PreflightCSS />}
      {children}
    </VidentThemeContext.Provider>
  );
}

VidentProvider.displayName = '@vident-ui/core/VidentProvider';
