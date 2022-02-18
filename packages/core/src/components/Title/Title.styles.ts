import { createStyles } from '@vident-ui/theme';

interface TitleStyles {
  align: 'right' | 'left' | 'center' | 'justify';
}

export default createStyles(({ utils: { mode } }, { align }: TitleStyles) => ({
  root: {
    margin: 0,
    color: mode('$black', '$white'),
    textAlign: align,
  },
}));
