import type { CSSProperties } from 'react';
import type * as Stitches from '@stitches/core';

import { createThemeBase, config } from './stitches.config';
import { DEFAULT_COLORS } from './default-theme';
import { get, linearGradient, radialGradient } from './utils';
import type {
  AllowAnyObjectKeys,
  LiteralUnion,
  NestedArray,
  PartialDeep,
  Prefixed,
  Primitive,
} from '../types';

/** Configuration Interface */
declare namespace ConfigType {
  /** Theme interface. */
  export type Theme<T = {}> = {
    borderStyles?: { [token in number | string]: boolean | number | string };
    borderWidths?: { [token in number | string]: boolean | number | string };
    colors?: { [token in number | string]: boolean | number | string };
    fonts?: { [token in number | string]: boolean | number | string };
    fontSizes?: { [token in number | string]: boolean | number | string };
    fontWeights?: { [token in number | string]: boolean | number | string };
    letterSpacings?: { [token in number | string]: boolean | number | string };
    lineHeights?: { [token in number | string]: boolean | number | string };
    radii?: { [token in number | string]: boolean | number | string };
    shadows?: { [token in number | string]: boolean | number | string };
    sizes?: { [token in number | string]: boolean | number | string };
    space?: { [token in number | string]: boolean | number | string };
    transitions?: { [token in number | string]: boolean | number | string };
    zIndices?: { [token in number | string]: boolean | number | string };
    ''?: { [token in number | string]: boolean | number | string };
  } & {
    [Scale in keyof T]: {
      [Token in keyof T[Scale]]: T[Scale][Token] extends boolean | number | string
        ? T[Scale][Token]
        : boolean | number | string;
    };
  };
}

export type CSSObject = Stitches.CSS<typeof config>;
export type CSS = CSSObject | ((helpers: { theme: Theme; utils: Utils }) => CSSObject);
export type ObjectOfClasses = Record<string, CSSObject>;

export type ClassNames<
  T extends (...args: any) => { classes: Record<string, any>; cx: (...cx: any) => string }
> = keyof ReturnType<T>['classes'];

export type Color = LiteralUnion<typeof DEFAULT_COLORS[number], string>;

export type CreateTheme = ReturnType<typeof createThemeBase>;
export type ThemeType = 'base' | 'dark' | 'light';
export type BaseTheme = ConfigType.Theme;
export interface Theme extends AllowAnyObjectKeys<BaseTheme>, Defaults {
  isDarkMode: boolean | undefined;
}
export type ThemeExtension = {
  type: ThemeType | string;
  className?: string;
  theme?: BaseTheme;
};

export type Utils = {
  mode: <T>(light: T, dark: T) => T;
  rgba: (color: string, alpha: number) => string;
  get: typeof get;
  linearGradient: typeof linearGradient;
  radialGradient: typeof radialGradient;
};

export type LoaderType = 'bars' | 'oval' | 'dots';
export interface Defaults {
  loader: LoaderType;
  dateFormat: string;
  primaryColor: string;
  other: Record<string, any>;
  datesLocale: string;
}
export type DefaultsOverride = PartialDeep<Defaults>;

export interface DefaultProps<T extends string = never> {
  className?: string;
  css?: CSS | NestedArray<CSS>;
  classNames?: Partial<Record<T, string>>;
  style?: CSSProperties;
  styles?:
    | Partial<Record<T, CSSObject>>
    | ((helpers: { theme: Theme; utils: Utils }) => Partial<Record<T, CSSObject>>);
}

export interface Gradient {
  from: ThemeToken<'colors', string>;
  to: ThemeToken<'colors', string>;
  deg?: number;
}

export type ThemeToken<
  T extends keyof typeof config.theme,
  E extends Primitive = string | number
> = LiteralUnion<Prefixed<'$', keyof typeof config.theme[T]>, E>;
export type CSSProperty<Property extends keyof Stitches.CSSProperties> = Stitches.PropertyValue<
  Property,
  typeof config
>;
