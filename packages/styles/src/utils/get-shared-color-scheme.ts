import { linearGradient } from '../theme';
import type { ObjectOfClasses, Utils, Gradient } from '../theme/types';

interface GetSharedColorScheme {
  color?: string;
  variant: 'outline' | 'filled' | 'light' | 'gradient' | 'white' | 'default' | 'subtle';
  gradient?: Gradient;
  utils: Utils;
}

const DEFAULT_GRADIENT = {
  from: '$indigo600',
  to: '$cyan600',
  deg: 45,
};

/**
 * Provides shared theme styles for components that use theme colors:
 * Button, ActionIcon, Badge, ThemeIcon, etc.
 */
export function getSharedColorScheme({ color, utils, variant, gradient }: GetSharedColorScheme) {
  const { mode, rgba } = utils;

  const merged = {
    from: gradient?.from || DEFAULT_GRADIENT.from,
    to: gradient?.to || DEFAULT_GRADIENT.to,
    deg: gradient?.deg || DEFAULT_GRADIENT.deg,
  };

  const variants: ObjectOfClasses = {
    filled: {
      border: 'transparent',
      color: '$white',
      background: mode(`$${color}600`, `$${color}700`),
      hover: mode(`$${color}700`, `$${color}600`),
    },

    light: {
      border: 'transparent',
      color: mode(`$${color}700`, `$${color}200`),
      background: rgba(mode(`$${color}100`, `$${color}800`), mode(1, 0.35)),
      hover: rgba(mode(`$${color}200`, `$${color}700`), mode(1, 0.45)),
    },

    outline: {
      border: `${rgba(mode(`$${color}700`, `$${color}400`), 0.75)}`,
      color: mode(`$${color}700`, `$${color}200`),
      background: 'transparent',
      hover: rgba(mode(`${color}50`, `${color}400`), mode(1, 0.05)),
    },

    default: {
      border: `${mode('$gray300', '$gray800')}`,
      color: mode('$gray700', '$gray100'),
      background: mode('$white', '$gray800'),
      hover: mode('$gray50', '$gray700'),
    },

    white: {
      border: 'transparent',
      background: '$white',
      color: `$${color}700`,
      hover: '$gray50',
    },

    gradient: {
      background: linearGradient(merged.deg, `${`${merged.from}`}`, `${`${merged.to}`}`),
      color: '$white',
      border: 'transparent',
    },
  };
  // Filled variant as default
  return variant in variants ? variants[variant] : variants.filled;
}
