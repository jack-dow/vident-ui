import { createStyles, ThemeToken } from '@vident-ui/styles';

interface DividerStyles {
  size?: ThemeToken<'sizes'>;
  variant?: 'solid' | 'dashed' | 'dotted';
  color?: ThemeToken<'colors', string>;
}

export default createStyles(
  (
    { utils: { mode } },
    { size = '$px', variant = 'solid', color = mode('$gray300', '$gray700') }: DividerStyles
  ) => ({
    left: {
      justifyContent: 'start',
    },

    right: {
      justifyContent: 'end',
    },

    center: {
      justifyContent: 'center',
    },

    label: {},
  })
);
