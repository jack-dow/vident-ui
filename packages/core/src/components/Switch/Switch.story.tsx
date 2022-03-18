import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_COLORS } from '@vident-ui/styles';
import { useId } from '@vident-ui/hooks';
import { Switch, SwitchProps } from './Switch';
import type { SwitchSize } from './Switch.styles';
import { Group } from '../Group';
import { Text } from '../Text';

const SWITCH_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

function SwitchWrapper(props: Omit<SwitchProps, 'value' | 'onChange'>) {
  const [value, onChange] = useState(true);
  return <Switch checked={value} onChange={(checked) => onChange(checked)} {...props} />;
}

const sizes = SWITCH_SIZES.map((size: SwitchSize) => (
  <Switch color="blue" key={size} size={size} label={`Switch ${size}`} style={{ marginTop: 15 }} />
));

const getThemes = (props?: Partial<SwitchProps>) =>
  DEFAULT_COLORS.map((color) => {
    const id = useId();
    return (
      <div>
        <Text
          as="label"
          htmlFor={id}
          css={{
            color: '$gray700',
            fontWeight: '$medium',
            display: 'block',
            pl: '$2',
            mb: '$1',
          }}
        >
          {color}
        </Text>
        <Switch id={id} key={color} size="md" color={color} {...props} />
      </div>
    );
  });

storiesOf('@vident-ui/core/Switch/stories', module)
  .add('Themes', () => (
    <Group direction="column" spacing="$2">
      {getThemes()}
    </Group>
  ))
  .add('Sizes', () => (
    <Group direction="column" spacing="$2">
      {sizes}
    </Group>
  ))
  .add('Controlled', () => <SwitchWrapper />);
