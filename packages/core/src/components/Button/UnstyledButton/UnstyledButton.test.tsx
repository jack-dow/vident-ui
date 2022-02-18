import { itRendersChildren, itSupportsFocusEvents, itSupportsSystemProps } from '@vident-ui/tests';
import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton';

const defaultProps: UnstyledButtonProps = {};

describe('@vident-ui/theme/UnstyledButton', () => {
  itRendersChildren(UnstyledButton, defaultProps);
  itSupportsFocusEvents(UnstyledButton, defaultProps, 'button');
  itSupportsSystemProps({
    component: UnstyledButton,
    props: defaultProps,
    displayName: '@vident-ui/core/UnstyledButton',
    refType: HTMLButtonElement,
  });
});