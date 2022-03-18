import {
  createStyles,
  CSSObject,
  Color,
  Utils,
  ThemeToken,
  getSharedColorScheme,
} from '@vident-ui/styles';

export type ButtonVariant = 'filled' | 'outline' | 'light' | 'gradient' | 'white' | 'default';

export const sizes = {
  xs: {
    px: '$2_5',
    py: '$1_5',
    text: '$xs',
    fontWeight: '$medium',
    rounded: '$base',
  },
  sm: {
    px: '$3',
    py: '$2',
    fontSize: '$sm',
    lineHeight: '$4',
    fontWeight: '$medium',
    rounded: '$md',
  },
  md: {
    px: '$4',
    py: '$2',
    text: '$sm',
    fontWeight: '$medium',
    rounded: '$md',
  },
  lg: {
    px: '$4',
    py: '$2',
    text: '$base',
    fontWeight: '$medium',
    rounded: '$md',
  },
  xl: {
    px: '$6',
    py: '$3',
    text: '$base',
    fontWeight: '$medium',
    rounded: '$md',
  },
};

interface GetVariantStyles {
  utils: Utils;
  color: Color;
  variant: ButtonVariant;
}

const getVariantStyles = ({ utils, color, variant }: GetVariantStyles): CSSObject => {
  const colors = getSharedColorScheme({
    utils,
    color,
    variant,
  });

  return {
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.background,
    backgroundImage: colors.background,
    color: colors.color,
    shadow: variant !== 'light' ? '$sm' : '$none',

    '&:hover': {
      backgroundColor: colors.hover,
    },
  };
};

export interface StyleProps {
  color: Color;
  size: keyof typeof sizes;
  gradientFrom: ThemeToken<'colors', string>;
  gradientTo: ThemeToken<'colors', string>;
  gradientDeg?: number;
}

export default createStyles(
  (
    { theme, utils },
    { color: userColor, size, gradientFrom, gradientTo, gradientDeg = 45 }: StyleProps,
    getRef
  ) => {
    const loading = getRef('loading');
    const { mode } = utils;
    const color = userColor || theme.primaryColor;

    const gradient = getSharedColorScheme({
      utils,
      color,
      variant: 'gradient',
      gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg },
    });

    return {
      loading: {
        ref: loading,
        pointerEvents: 'none',
        opacity: '0.5',
      },

      outline: getVariantStyles({ utils, variant: 'outline', color }),
      filled: getVariantStyles({ utils, variant: 'filled', color }),
      light: getVariantStyles({ utils, variant: 'light', color }),
      default: getVariantStyles({ utils, variant: 'default', color }),
      white: getVariantStyles({ utils, variant: 'white', color }),

      gradient: {
        border: 0,
        backgroundImage: gradient.background,
        color: gradient.color,

        '&:hover': {
          backgroundSize: '200%',
        },
      },

      root: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
        appearance: 'none',
        ...(sizes[size] || sizes.md),

        '&:focus': {
          outline: 'none',
          ring: '2px',
          ringColor: `$${color}600`,
          ringOffset: '2px',
          ringOffsetColor: mode('$gray50', '$gray900'),
        },

        [`&:not(.${loading}):disabled`]: {
          border: 'transparent',
          backgroundColor: mode('$gray200', '$gray700'),
          color: mode('$gray400', '$gray900'),
          cursor: 'notallowed',
          '&:hover': {
            backgroundColor: mode('$gray200', '$gray700'),
          },
        },
      },

      icon: {
        display: 'flex',
        alignItems: 'center',
      },

      leftIcon: {
        marginRight: '$2',
      },

      rightIcon: {
        marginLeft: '$2',
      },

      inner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        overflow: 'visible',
      },

      label: {
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      },
    };
  }
);
