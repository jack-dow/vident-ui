import type { Theme } from '../../types';

export function mode<T>(light: T, dark: T) {
  return (theme: Theme) => (theme.isDarkMode ? dark : light);
}
