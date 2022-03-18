import { createStyles } from '@vident-ui/styles';

interface InputWrapperStyles {
  hideLabel?: boolean;
  hint: boolean;
}

export default createStyles((helpers, { hideLabel = false, hint }: InputWrapperStyles) => ({
  root: {
    lineHeight: '$normal',
  },

  label: {
    display: 'block',
    text: '$sm',
    fontWeight: '$medium',
    sr: hideLabel ? 'only' : undefined,
  },

  labelWrapper: {
    display: hint ? 'flex' : undefined,
    justifyContent: hint ? 'space-between' : undefined,
    mb: hideLabel ? '0' : '$1',
  },

  hint: {
    text: '$sm',
    color: '$gray-500',
  },

  error: {
    mt: '$1',
    text: '$sm',
    wordBreak: 'break-word',
  },

  description: {
    mt: '$1',
    text: '$sm',
  },
}));
