import { useVidentHelpers } from '@vident-ui/styles';
import type * as Vident from '@vident-ui/styles';
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

export interface LoaderOwnProps extends Vident.DefaultProps {
  /** Sets both width and height to a predefined size token or any valid css width or height property */
  size?: Vident.ThemeToken<'sizes'>;

  /** Sets width to a predefined size token or any valid css width property */
  width?: Vident.ThemeToken<'sizes'>;

  /** Sets height to a predefined size token or any valid css height property */
  height?: Vident.ThemeToken<'sizes'>;

  /** Sets maxWidth to a predefined size token or any valid css maxWidth property */
  maxWidth?: Vident.ThemeToken<'sizes'>;

  /** Sets maxHeight to a predefined size token or any valid css maxHeight property */
  maxHeight?: Vident.ThemeToken<'sizes'>;

  /** Loader color from theme */
  color?: Vident.ThemeToken<'colors', string>;

  /** Loader appearance */
  variant?: Vident.LoaderType;
}

export type LoaderProps = Vident.Merge<React.ComponentPropsWithoutRef<'svg'>, LoaderOwnProps>;

export function Loader(props: LoaderProps) {
  const {
    size,
    width,
    maxWidth,
    height,
    maxHeight,
    color,
    variant = 'oval',
    css,
    ...loaderProps
  } = props;
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
          width: width || size || '$6',
          maxWidth: maxWidth,
          height: height || size,
          maxHeight: maxHeight,
          color: color || mode(`$${theme.primaryColor}600`, `$${theme.primaryColor}700`),
        },
        css,
      ]}
    />
  );
}

Loader.displayName = '@vident-ui/core/Loader';
