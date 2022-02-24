import React from 'react';
import { itSupportsSystemProps } from '@vident-ui/utils';
import { Divider, DividerProps } from './Divider';

const defaultProps: DividerProps = {};

describe('@vident-ui/core/Divider', () => {
  itSupportsSystemProps({
    component: Divider,
    props: defaultProps,
    displayName: '@vident-ui/core/Divider',
    refType: HTMLDivElement,
  });
});
