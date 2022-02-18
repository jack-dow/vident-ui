import type { Theme, Utils } from '../theme/types';
import { useVidentTheme, useVidentUtils } from '../theme/VidentProvider';

function extractCss(css: any, helpers: { theme: Theme; utils: Utils }) {
  return typeof css === 'function' ? css(helpers) : css || {};
}

export const useExtractedCss = (css: any) => {
  const theme = useVidentTheme();
  const utils = useVidentUtils();

  if (Array.isArray(css)) {
    return [...css.map((partial) => extractCss(partial, { theme, utils }))];
  }

  return extractCss(css, { theme, utils });
};
