import { createStyles, Color, Utils, ThemeToken, getSharedColorScheme } from '@vident-ui/styles';

export type ActionIconVariant =
  | 'hover'
  | 'filled'
  | 'outline'
  | 'light'
  | 'default'
  | 'transparent';

interface ActionIconStyles {
  color: Color;
  size: ThemeToken<'space'>;
  radius: ThemeToken<'radii'>;
}

interface GetVariantStyles {
  variant: ActionIconVariant;
  utils: Utils;
  color: Color;
}

function getVariantStyles({ variant, utils, color }: GetVariantStyles) {
  const { mode } = utils;
  if (variant === 'hover' || variant === 'transparent') {
    return {
      border: '1px solid transparent',
      color: mode(`$${color}700`, `$${color}400`),
      backgroundColor: 'transparent',

      '&:hover':
        variant === 'transparent'
          ? {}
          : {
              backgroundColor: mode(`$${color}100`, '$gray800'),
            },
    };
  }

  const colors = getSharedColorScheme({ utils, color, variant });

  return {
    border: `1px solid ${colors.border}`,
    color: colors.color,
    backgroundColor: colors.background,

    '&:hover': {
      backgroundColor: colors.hover,
    },
  };
}

export default createStyles(({ utils }, { color, size, radius }: ActionIconStyles) => {
  const { mode, rgba } = utils;

  return {
    root: {
      position: 'relative',
      appearance: 'none',
      WebkitAppearance: 'none',
      WebkitTapHighlightColor: 'transparent',
      height: size,
      minHeight: size,
      width: size,
      minWidth: size,
      rounded: radius,
      padding: 0,
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',

      '&:focus': {
        outline: 'none',
        ring: '$2',
        ringOffset: '$2',
        ringOffsetColor: mode('$gray50', '$gray900'),
      },

      '&:disabled': {
        color: mode('$gray400', '$gray600'),
        cursor: 'notallowed',
        backgroundColor: mode('$gray100', '$gray800'),
        borderColor: mode('$gray100', '$gray800'),
      },

      '&:not(:disabled):active': {
        transform: 'translateY(1px)',
      },
    },

    outline: getVariantStyles({ utils, color, variant: 'outline' }),
    filled: getVariantStyles({ utils, color, variant: 'filled' }),
    default: getVariantStyles({ utils, color, variant: 'default' }),
    light: getVariantStyles({ utils, color, variant: 'light' }),
    hover: getVariantStyles({ utils, color, variant: 'hover' }),
    transparent: getVariantStyles({ utils, color, variant: 'transparent' }),

    loading: {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 1,
        left: 1,
        right: 1,
        bottom: 1,
        backgroundColor: mode('rgba(255, 255, 255, .5)', rgba('$gray800', 0.5)),
        rounded: radius,
        cursor: 'notallowed',
      },
    },
  };
});
