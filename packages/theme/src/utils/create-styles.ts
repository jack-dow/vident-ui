import { useVidentContext } from '../theme/VidentProvider';
import type { CSSObject, Theme, Utils } from '../theme/types';
import { fromEntries } from './from-entries';
import { cx } from './cx';
import { mergeClassNames } from './merge-class-names';
import { merge } from './merge';
import { useExtractedCss } from './use-extracted-css';

export interface UseStylesOptions<Key extends string> {
  classNames?: Partial<Record<Key, string>>;
  styles?:
    | Partial<Record<Key, CSSObject>>
    | ((helpers: { theme: Theme; utils: Utils }) => Partial<Record<Key, CSSObject>>);
  name: string;
}

export function createStyles<Key extends string = string, Params = null>(
  getCssObjectOrCssObject:
    | ((
        helpers: { theme: Theme; utils: Utils },
        params: Params,
        createRef: (refName: string) => string
      ) => Record<Key, CSSObject>)
    | Record<Key, CSSObject>
) {
  const getCssObject =
    typeof getCssObjectOrCssObject === 'function'
      ? getCssObjectOrCssObject
      : () => getCssObjectOrCssObject;

  function useStyles(params: Params, options?: UseStylesOptions<Key>) {
    const { theme, utils, styles, withoutClassNames } = useVidentContext();
    const themeStyles = styles[options?.name || ''];

    let count = 0;

    function createRef(refName: string) {
      count += 1;
      return `vident-ref_${refName || ''}_${count}`;
    }

    const _styles = useExtractedCss(options?.styles);

    const _themeStyles = useExtractedCss(themeStyles);

    const cssObject = getCssObject({ theme, utils }, params, createRef);

    const stylesObject = fromEntries(
      Object.keys(cssObject).map((key) => {
        const mergedStyles = merge(cssObject[key as Key], _themeStyles[key], _styles[key]);
        return [key, mergedStyles];
      })
    ) as Record<Key, any>;

    return {
      classes: mergeClassNames(
        stylesObject,
        options?.classNames || {},
        withoutClassNames ? undefined : options?.name
      ),
      cx,
      theme,
      utils,
    };
  }

  return useStyles;
}
