import { defaultThemeMap as defaulthemeMap } from '@stitches/core';
import type { PropertyValue, ScaleValue } from '@stitches/core';

const defaultSpaceTokens = {
  0: '0px',
  px: '1px',
  '0_5': '0.125rem',
  1: '0.25rem',
  '1_5': '0.375rem',
  2: '0.5rem',
  '2_5': '0.625rem',
  3: '0.75rem',
  '3_5': '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

export const defaultTokens = {
  fonts: {
    sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeights: {
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  space: defaultSpaceTokens,
  sizes: {
    ...defaultSpaceTokens,
    full: '100%',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    min: 'min-content',
    max: 'max-content',
    prose: '65ch',
    vh: '100vh',
    vw: '100vw',
    'screen-sm': '640px',
    'screen-md': '768px',
    'screen-lg': '1024px',
    'screen-xl': '1280px',
    'screen-2xl': '1536px',
  },
  radii: {
    none: '0px',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  zIndices: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    100: 100,
    max: 9999,
  },
  borderWeights: {
    light: '1px',
    normal: '2px',
    bold: '3px',
    extrabold: '4px',
    black: '5px',
  },
  transitions: {
    none: 'none',
    all: 'all 150ms $ease$base',
    colors:
      'color, background-color, border-color, text-decoration-color, fill, stroke, 150ms $ease$base',
    opacity: 'opacity 150ms $ease$base',
    shadow: 'box-shadow 150ms $ease$base',
    transform: 'transform 150ms $ease$base',
    base: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, 150ms $ease$base',
  },
  ease: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    base: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  // Used as default values for locally scoped variables
  '': {
    shadow: '0 0 #0000',
    ringOffsetWidth: '0px',
    ringOffsetColor: '$colors$white',
    ringOffsetShadow: '0 0 0 $$ringOffsetWidth $$ringOffsetColor',
    ringWidth: '3px',
    ringColor: '$colors$sky600',
    ringShadow: `0 0 0 calc($$ringWidth + $$ringOffsetWidth) $$ringColor`,
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
    none: '0 0 #0000',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

const defaultColors = {
  black: '#000',
  white: '#fff',

  gray50: '#fafafa',
  gray100: '#f4f4f5',
  gray200: '#e4e4e7',
  gray300: '#d4d4d8',
  gray400: '#a1a1aa',
  gray500: '#71717a',
  gray600: '#52525b',
  gray700: '#3f3f46',
  gray800: '#27272a',
  gray900: '#18181b',

  red50: '#fef2f2',
  red100: '#fee2e2',
  red200: '#fecaca',
  red300: '#fca5a5',
  red400: '#f87171',
  red500: '#ef4444',
  red600: '#dc2626',
  red700: '#b91c1c',
  red800: '#991b1b',
  red900: '#7f1d1d',

  orange50: '#fff7ed',
  orange100: '#ffedd5',
  orange200: '#fed7aa',
  orange300: '#fdba74',
  orange400: '#fb923c',
  orange500: '#f97316',
  orange600: '#ea580c',
  orange700: '#c2410c',
  orange800: '#9a3412',
  orange900: '#7c2d12',

  amber50: '#fffbeb',
  amber100: '#fef3c7',
  amber200: '#fde68a',
  amber300: '#fcd34d',
  amber400: '#fbbf24',
  amber500: '#f59e0b',
  amber600: '#d97706',
  amber700: '#b45309',
  amber800: '#92400e',
  amber900: '#78350f',

  yellow50: '#fefce8',
  yellow100: '#fef9c3',
  yellow200: '#fef08a',
  yellow300: '#fde047',
  yellow400: '#facc15',
  yellow500: '#eab308',
  yellow600: '#ca8a04',
  yellow700: '#a16207',
  yellow800: '#854d0e',
  yellow900: '#713f12',

  lime50: '#f7fee7',
  lime100: '#ecfccb',
  lime200: '#d9f99d',
  lime300: '#bef264',
  lime400: '#a3e635',
  lime500: '#84cc16',
  lime600: '#65a30d',
  lime700: '#4d7c0f',
  lime800: '#3f6212',
  lime900: '#365314',

  green50: '#f0fdf4',
  green100: '#dcfce7',
  green200: '#bbf7d0',
  green300: '#86efac',
  green400: '#4ade80',
  green500: '#22c55e',
  green600: '#16a34a',
  green700: '#15803d',
  green800: '#166534',
  green900: '#14532d',

  emerald50: '#ecfdf5',
  emerald100: '#d1fae5',
  emerald200: '#a7f3d0',
  emerald300: '#6ee7b7',
  emerald400: '#34d399',
  emerald500: '#10b981',
  emerald600: '#059669',
  emerald700: '#047857',
  emerald800: '#065f46',
  emerald900: '#064e3b',

  teal50: '#f0fdfa',
  teal100: '#ccfbf1',
  teal200: '#99f6e4',
  teal300: '#5eead4',
  teal400: '#2dd4bf',
  teal500: '#14b8a6',
  teal600: '#0d9488',
  teal700: '#0f766e',
  teal800: '#115e59',
  teal900: '#134e4a',

  cyan50: '#ecfeff',
  cyan100: '#cffafe',
  cyan200: '#a5f3fc',
  cyan300: '#67e8f9',
  cyan400: '#22d3ee',
  cyan500: '#06b6d4',
  cyan600: '#0891b2',
  cyan700: '#0e7490',
  cyan800: '#155e75',
  cyan900: '#164e63',

  sky50: '#f0f9ff',
  sky100: '#e0f2fe',
  sky200: '#bae6fd',
  sky300: '#7dd3fc',
  sky400: '#38bdf8',
  sky500: '#0ea5e9',
  sky600: '#0284c7',
  sky700: '#0369a1',
  sky800: '#075985',
  sky900: '#0c4a6e',

  blue50: '#eff6ff',
  blue100: '#dbeafe',
  blue200: '#bfdbfe',
  blue300: '#93c5fd',
  blue400: '#60a5fa',
  blue500: '#3b82f6',
  blue600: '#2563eb',
  blue700: '#1d4ed8',
  blue800: '#1e40af',
  blue900: '#1e3a8a',

  indigo50: '#eef2ff',
  indigo100: '#e0e7ff',
  indigo200: '#c7d2fe',
  indigo300: '#a5b4fc',
  indigo400: '#818cf8',
  indigo500: '#6366f1',
  indigo600: '#4f46e5',
  indigo700: '#4338ca',
  indigo800: '#3730a3',
  indigo900: '#312e81',

  violet50: '#f5f3ff',
  violet100: '#ede9fe',
  violet200: '#ddd6fe',
  violet300: '#c4b5fd',
  violet400: '#a78bfa',
  violet500: '#8b5cf6',
  violet600: '#7c3aed',
  violet700: '#6d28d9',
  violet800: '#5b21b6',
  violet900: '#4c1d95',

  purple50: '#faf5ff',
  purple100: '#f3e8ff',
  purple200: '#e9d5ff',
  purple300: '#d8b4fe',
  purple400: '#c084fc',
  purple500: '#a855f7',
  purple600: '#9333ea',
  purple700: '#7e22ce',
  purple800: '#6b21a8',
  purple900: '#581c87',

  fuchsia50: '#fdf4ff',
  fuchsia100: '#fae8ff',
  fuchsia200: '#f5d0fe',
  fuchsia300: '#f0abfc',
  fuchsia400: '#e879f9',
  fuchsia500: '#d946ef',
  fuchsia600: '#c026d3',
  fuchsia700: '#a21caf',
  fuchsia800: '#86198f',
  fuchsia900: '#701a75',

  pink50: '#fdf2f8',
  pink100: '#fce7f3',
  pink200: '#fbcfe8',
  pink300: '#f9a8d4',
  pink400: '#f472b6',
  pink500: '#ec4899',
  pink600: '#db2777',
  pink700: '#be185d',
  pink800: '#9d174d',
  pink900: '#831843',

  rose50: '#fff1f2',
  rose100: '#ffe4e6',
  rose200: '#fecdd3',
  rose300: '#fda4af',
  rose400: '#fb7185',
  rose500: '#f43f5e',
  rose600: '#e11d48',
  rose700: '#be123c',
  rose800: '#9f1239',
  rose900: '#881337',
};

export const DEFAULT_COLORS = [
  'gray',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
] as const;

const defaultMedia = {
  sm: `(min-width: ${defaultTokens.breakpoints.sm})`,
  md: `(min-width: ${defaultTokens.breakpoints.md})`,
  lg: `(min-width: ${defaultTokens.breakpoints.lg})`,
  xl: `(min-width: ${defaultTokens.breakpoints.xl})`,
  '2xl': `(min-width: ${defaultTokens.breakpoints['2xl']})`,
  smMax: `(max-width: ${defaultTokens.breakpoints.sm})`,
  mdMax: `(max-width: ${defaultTokens.breakpoints.md})`,
  lgMax: `(max-width: ${defaultTokens.breakpoints.lg})`,
  xlMax: `(max-width: ${defaultTokens.breakpoints.xl})`,
  '2xlMax': `(max-width: ${defaultTokens.breakpoints['2xl']})`,
  'reduced-motion': '(prefers-reduced-motion)',
  safari: 'not all and (min-resolution:.001dpcm)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
};

export const defaultTextSizes: {
  [key in keyof typeof defaultTokens.fontSizes]: { fontSize: string; lineHeight: string };
} = {
  xs: {
    fontSize: '$xs',
    lineHeight: '$4',
  },
  sm: {
    fontSize: '$sm',
    lineHeight: '$5',
  },
  base: {
    fontSize: '$base',
    lineHeight: '$6',
  },
  lg: {
    fontSize: '$lg',
    lineHeight: '$7',
  },
  xl: {
    fontSize: '$xl',
    lineHeight: '$7',
  },
  '2xl': {
    fontSize: '$2xl',
    lineHeight: '$8',
  },
  '3xl': {
    fontSize: '$3xl',
    lineHeight: '$9',
  },
  '4xl': {
    fontSize: '$4xl',
    lineHeight: '$10',
  },
  '5xl': {
    fontSize: '$5xl',
    lineHeight: '$none',
  },
  '6xl': {
    fontSize: '$6xl',
    lineHeight: '$none',
  },
  '7xl': {
    fontSize: '$7xl',
    lineHeight: '$none',
  },
  '8xl': {
    fontSize: '$8xl',
    lineHeight: '$none',
  },
  '9xl': {
    fontSize: '$9xl',
    lineHeight: '$none',
  },
};

const defaultUtils = {
  // Transition utils
  duration: (value: PropertyValue<'transitionDuration'>) => ({
    transitionDuration: value,
  }),
  ease: (value: PropertyValue<'transitionTimingFunction'>) => ({
    transitionTimingFunction: value,
  }),
  delay: (value: PropertyValue<'transitionDelay'>) => ({
    transitionDelay: value,
  }),

  // Padding utils
  p: (value: PropertyValue<'padding'>) => ({
    padding: value,
  }),
  pt: (value: PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
  }),
  pr: (value: PropertyValue<'paddingRight'>) => ({
    paddingRight: value,
  }),
  pb: (value: PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value,
  }),
  pl: (value: PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
  }),
  px: (value: PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  // Margin utils
  m: (value: PropertyValue<'margin'>) => ({
    margin: value,
  }),
  mt: (value: PropertyValue<'marginTop'>) => ({
    marginTop: value,
  }),
  mr: (value: PropertyValue<'marginRight'>) => ({
    marginRight: value,
  }),
  mb: (value: PropertyValue<'marginBottom'>) => ({
    marginBottom: value,
  }),
  ml: (value: PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
  }),
  mx: (value: PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: PropertyValue<'marginTop'>) => ({
    marginTop: value,
    marginBottom: value,
  }),

  // Display / flex utilities
  d: (value: PropertyValue<'display'>) => ({ display: value }),
  dflex: (value: PropertyValue<'alignItems'>) => ({
    display: 'flex',
    alignItems: value,
    justifyContent: value,
  }),
  fd: (value: PropertyValue<'flexDirection'>) => ({
    flexDirection: value,
  }),
  fw: (value: PropertyValue<'flexWrap'>) => ({ flexWrap: value }),
  ai: (value: PropertyValue<'alignItems'>) => ({
    alignItems: value,
  }),
  ac: (value: PropertyValue<'alignContent'>) => ({
    alignContent: value,
  }),
  jc: (value: PropertyValue<'justifyContent'>) => ({
    justifyContent: value,
  }),
  as: (value: PropertyValue<'alignSelf'>) => ({
    alignSelf: value,
  }),
  fg: (value: PropertyValue<'alignSelf'>) => ({ flexGrow: value }),
  fb: (value: PropertyValue<'alignSelf'>) => ({
    flexBasis: value,
  }),

  // background alias util
  bg: (value: PropertyValue<'background'>) => ({
    background: value,
  }),
  bc: (value: PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),
  bgColor: (value: PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),

  // Border radius to rounded alias and utils
  rounded: (value: PropertyValue<'borderRadius'>) => ({
    borderRadius: value,
  }),
  roundedTop: (value: PropertyValue<'borderRadius'>) => ({
    borderTopLeftRadius: value,
    borderTopRightRadius: value,
  }),
  roundedRight: (value: PropertyValue<'borderRadius'>) => ({
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
  }),
  roundedBottom: (value: PropertyValue<'borderRadius'>) => ({
    borderBottomLeftRadius: value,
    borderBottomRightRadius: value,
  }),
  roundedLeft: (value: PropertyValue<'borderRadius'>) => ({
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value,
  }),
  roundedTopLeft: (value: PropertyValue<'borderTopLeftRadius'>) => ({
    borderTopLeftRadius: value,
  }),
  roundedTopRight: (value: PropertyValue<'borderTopRightRadius'>) => ({
    borderTopRightRadius: value,
  }),
  roundedBottomLeft: (value: PropertyValue<'borderBottomLeftRadius'>) => ({
    borderBottomLeftRadius: value,
  }),
  roundedBottomRight: (value: PropertyValue<'borderBottomRightRadius'>) => ({
    borderBottomRightRadius: value,
  }),

  // Box shadow util/alias
  shadow: (value: PropertyValue<'boxShadow'>) => ({
    $$shadow: value,
    boxShadow: value,
  }),

  // Ring utils
  ring: (value: ScaleValue<'ringWidths'>) => ({
    $$ringWidth: value,
    boxShadow: `0 0 0 $$ringOffsetWidth $$ringOffsetColor, 0 0 0 calc($$ringWidth + $$ringOffsetWidth) $$ringColor, $$shadow`,
  }),
  ringColor: (value: ScaleValue<'colors'>) => ({
    $$ringColor: value,
  }),
  ringOffset: (value: ScaleValue<'ringWidths'>) => ({
    $$ringOffsetWidth: value,
  }),
  ringOffsetColor: (value: ScaleValue<'colors'>) => ({
    $$ringOffsetColor: value,
  }),

  // Util to add both line height and text size at once

  text: (value: PropertyValue<'fontSize'>) => ({
    ...(defaultTextSizes[value?.toString() as keyof typeof defaultTextSizes] ?? {
      fontSize: value,
    }),
  }),

  // Spacing utils
  space: (value: ScaleValue<'space'>) => ({
    '> * + *': {
      marginLeft: value,
      marginTop: value,
    },
  }),
  spaceX: (value: ScaleValue<'space'>) => ({
    '> * + *': {
      marginLeft: value,
    },
  }),
  spaceY: (value: ScaleValue<'space'>) => ({
    '> * + *': {
      marginTop: value,
    },
  }),

  // Utils to make element only visible to screen-readers
  sr: (value: 'only' | 'not-only') =>
    value === 'only'
      ? {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
          borderWidth: 0,
        }
      : {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: 0,
          margin: 0,
          overflow: 'visible',
          clip: 'auto',
          whiteSpace: 'normal',
        },

  scale: (value: PropertyValue<'scale'>) => ({
    transform: `scale(${value})`,
  }),
};

const defaultThemeMap = {
  ...defaulthemeMap,
  transitionTimingFunction: 'ease',
  $$shadow: 'shadows',
  $$ringColor: 'colors',
  $$ringOffsetColor: 'colors',
};

export default {
  prefix: 'vident',
  theme: {
    ...defaultTokens,
    colors: defaultColors,
  },
  media: defaultMedia,
  utils: defaultUtils,
  themeMap: defaultThemeMap,
};
