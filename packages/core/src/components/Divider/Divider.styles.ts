import { createStyles, ThemeToken } from '@vident-ui/theme';

interface DividerStyles {
  size: ThemeToken<'space'>;
  variant: 'solid' | 'dashed' | 'dotted';
  color: ThemeToken<'colors', string>;
}

export default createStyles(
  (
    { utils: { mode } },
    { size, variant, color = mode('$gray300', '$gray700') }: DividerStyles
  ) => ({
    withLabel: {
      borderTop: '0 !important',
    },

    left: {
      '&::before': {
        display: 'none',
      },
    },

    right: {
      '&::after': {
        display: 'none',
      },
    },

    label: {
      display: 'flex',
      alignItems: 'center',

      '&::before': {
        content: '""',
        flex: 1,
        height: 1,
        borderTop: `$space${size} ${variant} ${color}`,
        marginRight: '$2_5',
      },

      '&::after': {
        content: '""',
        flex: 1,
        borderTop: `$space${size} ${variant} ${color}`,
        marginLeft: '$2_5',
      },
    },

    horizontal: {
      border: 0,
      borderTopWidth: `$space${size}`,
      borderTopColor: color,
      borderTopStyle: variant,
      margin: 0,
    },

    vertical: {
      border: 0,
      alignSelf: 'stretch',
      height: '100%',
      borderLeftWidth: `$space${size}`,
      borderLeftColor: color,
      borderLeftStyle: variant,
    },
  })
);
