import React from 'react';
import { render } from '@testing-library/react';
import { itRendersChildren, itSupportsSystemProps } from '@vident-ui/utils';
import { Group } from './Group';

const defaultProps: React.ComponentProps<typeof Group> = {};

describe('@vident-ui/core/Group', () => {
  itRendersChildren(Group, defaultProps);
  itSupportsSystemProps({
    component: Group,
    props: defaultProps,
    displayName: '@vident-ui/core/Group',
    refType: HTMLDivElement,
  });

  it('has no falsy children', () => {
    const children = [undefined, null, <div data-testid="group-child" key="1" />];
    const { container } = render(<Group>{children}</Group>);
    expect(container.children).toHaveLength(1);
  });
});
