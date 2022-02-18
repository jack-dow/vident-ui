import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_COLORS } from '@vident-ui/theme';
import { SearchIcon } from '@heroicons/react/solid';
import { Divider } from './Divider';

const getColors = (props?: any) =>
  DEFAULT_COLORS.map((color) => (
    <Divider key={color} color={color} style={{ marginTop: 15 }} {...props} />
  ));

storiesOf('@vident-ui/core/Divider/stories', module)
  .add('Colors', () => <div style={{ padding: 20 }}>{getColors()}</div>)
  .add('Vertical', () => (
    <div style={{ padding: 20, height: 200 }}>
      <Divider orientation="vertical" />
    </div>
  ))
  .add('Labels', () => (
    <div>
      <Divider css={{ my: '$2_5' }} label="Label on the left" />
      <Divider css={{ my: '$2_5' }} label="Label in the center" labelPosition="center" />
      <Divider css={{ my: '$2_5' }} label="Label on the right" labelPosition="right" />
      <Divider
        css={{ my: '$2_5' }}
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <SearchIcon style={{ width: 12, height: 12 }} />
            <span style={{ marginLeft: 5, marginRight: 5 }}>Search results</span>
          </>
        }
      />
      <Divider
        css={{ my: '$2_5' }}
        label="Link label"
        labelProps={{ component: 'a', href: 'https://mantine.dev', variant: 'link', color: 'blue' }}
      />
    </div>
  ));

storiesOf('@vident-ui/core/Divider/styles-api', module).add('With css', () => (
  <div style={{ padding: 40 }}>
    <Divider css={{ border: '1px solid red' }} label="Test" />
  </div>
));
