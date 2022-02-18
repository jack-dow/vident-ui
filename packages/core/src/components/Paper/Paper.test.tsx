import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@vident-ui/tests';
import { Paper } from './Paper';

const defaultProps: React.ComponentProps<typeof Paper> = {};

describe('@vident-ui/core/Paper', () => {
  itRendersChildren(Paper, defaultProps);
  itIsPolymorphic(Paper, defaultProps);
  itSupportsSystemProps({
    component: Paper,
    props: defaultProps,
    displayName: '@vident-ui/core/Paper',
    refType: HTMLDivElement,
  });

  it('has correct displayName', () => {
    expect(Paper.displayName).toEqual('@vident-ui/core/Paper');
  });
});
