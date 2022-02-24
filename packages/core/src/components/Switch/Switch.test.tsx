import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itConnectsLabelAndInput,
  itSupportsWrapperProps,
  itSupportsFocusEvents,
} from '@vident-ui/testing';
import { Switch, SwitchProps } from './Switch';

const defaultProps: SwitchProps = {
  label: 'test-label',
};

describe('@vident-ui/core/Switch', () => {
  checkAccessibility([<Switch aria-label="Switch without label" />, <Switch label="With label" />]);
  itConnectsLabelAndInput(Switch, defaultProps);
  itSupportsWrapperProps(Switch, defaultProps);
  itSupportsFocusEvents(Switch, defaultProps, 'input');
  itSupportsSystemProps({
    component: Switch,
    props: defaultProps,
    displayName: '@vident-ui/core/Switch',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('renders label based on label prop', () => {
    const { container: withLabel, getByText } = render(<Switch label="test-label" />);
    const { container: withoutLabel } = render(<Switch />);
    expect(withLabel.querySelectorAll('label')).toHaveLength(1);
    expect(withoutLabel.querySelectorAll('label')).toHaveLength(0);
    expect(getByText('test-label')).toBeInTheDocument();
  });

  it('sets disabled attribute on input based on disabled prop', () => {
    render(<Switch disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});
