import { createStyles } from '@vident-ui/styles';

interface TitleStyles {
  align?: 'right' | 'left' | 'center' | 'justify';
}

export default createStyles(({ utils: { mode } }, { align }: TitleStyles) => ({
  root: {
    margin: 0,
    color: mode('$black', '$white'),
    textAlign: align,
  },
}));
