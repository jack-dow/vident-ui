import { createStyles, ThemeToken } from '@vident-ui/theme';

interface PaperStyles {
  padding?: ThemeToken<'space'>;
  shadow?: ThemeToken<'shadows', string>;
  radius?: ThemeToken<'radii'>;
  withBorder?: boolean;
}

export default createStyles(
  (
    { utils: { mode } },
    { radius = '$base', shadow = '$base', padding = 0, withBorder = false }: PaperStyles
  ) => ({
    root: {
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      textDecoration: 'none',
      color: mode('$black', '$white'),
      backgroundColor: mode('$white', '$black'),
      boxSizing: 'border-box',
      borderRadius: radius,
      boxShadow: shadow || 'none',
      padding,
      border: withBorder ? `1px solid ${mode('$gray-200', '$gray-700')}` : undefined,

      '&:focus': {
        ring: '$3',
      },
    },
  })
);
