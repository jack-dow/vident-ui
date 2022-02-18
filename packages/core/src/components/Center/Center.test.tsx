import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@vident-ui/tests';
import { Center } from './Center';

const defaultProps: React.ComponentProps<typeof Center> = {
  children: 'test-center',
};

describe('@vident-ui/core/Center', () => {
  itRendersChildren(Center, defaultProps);
  itIsPolymorphic(Center, defaultProps);
  itSupportsSystemProps({
    component: Center,
    props: defaultProps,
    displayName: '@vident-ui/core/Center',
    refType: HTMLDivElement,
  });
});
