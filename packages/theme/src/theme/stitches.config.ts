import { createStitches } from '@stitches/core';
import { merge } from '../utils/merge';
import defaultTheme from './default-theme';
import darkTheme from './dark-theme';
import type { ThemeExtension } from './types';

export const {
  css,
  globalCss,
  keyframes,
  getCssText,
  theme: baseTheme,
  createTheme: createThemeBase,
  config,
} = createStitches({
  ...defaultTheme,
  theme: {
    ...defaultTheme.theme,
  },
});

export const createTheme = ({ type, theme, className }: ThemeExtension) => {
  if (!type) {
    throw new Error('Theme type is required');
  }

  return createThemeBase(className || `${type}-theme`, theme);
};
