import { createStyles, Color, ThemeToken, get } from '@vident-ui/theme';

export type SwitchSize = keyof typeof switchHeight;

interface SwitchStyles {
  color?: Color;
  size: SwitchSize;
  radius: ThemeToken<'radii'>;
  checked: boolean;
}

const switchHeight = {
  xs: '$4',
  sm: '$5',
  md: '$6',
  lg: '$8',
  xl: '$9',
};

const switchWidth = {
  xs: '$7',
  sm: '$9',
  md: '$11',
  lg: 60,
  xl: 68,
};

const handleSizes = {
  xs: '$3',
  sm: '$4',
  md: '$5',
  lg: '$7',
  xl: '$8',
};

export default createStyles(
  (
    { theme, utils: { mode } },
    { size, color = theme.primaryColor, radius, checked }: SwitchStyles
  ) => ({
    root: {
      position: 'relative',
      display: 'inline-flex',
      appearance: 'none',
      bg: checked ? `$${color}600` : mode('$gray200', '$gray700'),
      flexShrink: 0,
      width: get(size, switchWidth),
      height: get(size, switchHeight),
      border: '2px solid transparent',
      rounded: radius,
      cursor: 'pointer',
      transition: '$colors',
      duration: '200ms',

      '&:focus': {
        outline: 'none',
        ring: '2px',
        ringOffset: '2px',
      },
    },

    handle: {
      transform: checked ? `translateX(100%)` : 'translateX(0px)',
      pointerEvents: 'none',
      display: 'inline-block',
      width: get(size, handleSizes),
      height: get(size, handleSizes),
      rounded: '$full',
      bg: mode('$white', '$black'),
      shadow: '$base',
      transition: '$base',
      duration: '200ms',
    },
  })
);
