import { createStyles } from '@vident-ui/styles';

export default createStyles(({ theme, utils: { mode } }) => ({
  root: {
    cursor: 'pointer',
    border: 0,
    padding: 0,
    appearance: 'none',
    fontSize: theme.fontSizes?.md,
    backgroundColor: 'transparent',
    textAlign: 'left',
    color: mode('$black', '$gray-50'),

    '&:focus': {
      outlineWidth: '0px',
      ring: '$2',
      ringOffset: '$2',
      ringOffsetColor: mode('$gray-50', '$gray-900'),
    },
  },
}));
