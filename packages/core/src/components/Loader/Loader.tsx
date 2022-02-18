import { useVidentHelpers } from '@vident-ui/theme';
import type * as Vident from '@vident-ui/theme';
import React from 'react';
import { Box } from '../Box';
import { Bars } from './loaders/Bars';
import { Oval } from './loaders/Oval';
import { Dots } from './loaders/Dots';

const LOADERS = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
} as const;

export interface LoaderProps
  extends Vident.DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'svg'>, 'color'> {
  /** Defines width of loader */
  size?: Vident.ThemeToken<'space'>;

  /** Loader color from theme */
  color?: Vident.ThemeToken<'colors', string>;

  /** Loader appearance */
  variant?: Vident.LoaderType;
}

export function Loader({ size = '$6', color, variant, css, ...loaderProps }: LoaderProps) {
  const {
    theme,
    utils: { mode },
  } = useVidentHelpers();
  const defaultLoader = variant in LOADERS ? variant : theme.loader;

  return (
    <Box
      role="presentation"
      {...loaderProps}
      as={LOADERS[defaultLoader]}
      css={[
        {
          width: size,
          color: color || mode(`$${theme.primaryColor}600`, `$${theme.primaryColor}700`),
        },
        css,
      ]}
    />
  );
}

Loader.displayName = '@vident-ui/core/Loader';
