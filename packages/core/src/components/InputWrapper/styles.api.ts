import type { InputWrapperStylesNames } from './InputWrapper';

export const InputWrapper: Record<InputWrapperStylesNames, string> = {
  root: 'Root element',
  label: 'Label element styles, defined by label prop',
  error: 'Error element styles, defined by error prop',
  description: 'Description element styles, defined by description prop',
  labelWrapper: 'Div surrounding label and hint, adds flex and justify-content when hint is added',
  hint: 'Hint element styles, defined by hint prop',
};
