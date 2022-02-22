import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from '@vident-ui/utils';
import { Container } from './Container';

const defaultProps: React.ComponentProps<typeof Container> = {};

describe('@vident-ui/core/Container', () => {
  itRendersChildren(Container, defaultProps);
  itSupportsSystemProps({
    component: Container,
    props: defaultProps,
    displayName: '@vident-ui/core/Container',
    refType: HTMLDivElement,
  });
});
