import React from 'react';
import { storiesOf } from '@storybook/react';
import { VidentProvider, createStyles, DEFAULT_COLORS } from '@vident-ui/theme';
import { generateBorderStyles } from '@vident-ui/utils';
import { useBooleanToggle } from '@vident-ui/hooks';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { ActionIcon } from './ActionIcon';
import { ActionIcon as ActionIconStylesApi } from './styles.api';
import { Group } from '../Group';
import { Box } from '../Box';
import { Text } from '../Text';

const variants = ['hover', 'filled', 'outline', 'light', 'default', 'transparent'] as const;

function TestWrapper({ variant, color }: { variant: any; color: any }) {
  const [passwordShowing, toggle] = useBooleanToggle();
  return (
    <Box key={`${variant}-${color}`} css={{ dflex: 'center', fd: 'column' }}>
      <ActionIcon variant={variant} color={color} onClick={() => toggle()}>
        {passwordShowing ? (
          <EyeIcon style={{ width: 20, height: 20 }} />
        ) : (
          <EyeOffIcon style={{ width: 20, height: 20 }} />
        )}
      </ActionIcon>
      <Text color="$gray900" transform="capitalize" css={{ userSelect: 'none', pl: '$2' }}>
        {variant}
      </Text>
    </Box>
  );
}

storiesOf('@vident-ui/core/ActionIcon/stories', module).add('Test', () => (
  <div>
    {DEFAULT_COLORS.map((color) => (
      <Box css={{ mt: '$4', spaceY: '$2' }}>
        <Text transform="capitalize" color="$gray900">
          {color}
        </Text>
        <Group>
          {variants.map((variant) => (
            <TestWrapper variant={variant} color={color} />
          ))}
        </Group>
      </Box>
    ))}
  </div>
));

const ActionIconStylesApiWithoutRoot = { ...ActionIconStylesApi };
// delete ActionIconStylesApiWithoutRoot.root;

const rootStyles = generateBorderStyles(ActionIconStylesApi);
const variantStyles = generateBorderStyles(ActionIconStylesApiWithoutRoot);
const useRootStyles = createStyles(() => rootStyles);
const useVariantStyles = createStyles(() => variantStyles);

function Wrapper(props: Partial<React.ComponentProps<typeof ActionIcon>>) {
  const items = variants.map((variant) => (
    <ActionIcon variant={variant} key={variant} color="blue" {...props}>
      A
    </ActionIcon>
  ));

  return (
    <Group position="center" css={{ mt: '$4' }}>
      {items}
    </Group>
  );
}

function WithClassNamesRoot() {
  return <Wrapper classNames={useRootStyles().classes} />;
}

function WithClassNamesVariant() {
  return <Wrapper classNames={useVariantStyles().classes} />;
}

storiesOf('@vident-ui/core/ActionIcon/styles-api', module)
  .add('With css', () => (
    <Wrapper
      css={{
        border: '1px solid red',
        backgroundColor: 'blue',
        '&:hover': { backgroundColor: 'green' },
      }}
    />
  ))
  .add('With styles: root', () => <Wrapper styles={rootStyles} />)
  .add('With styles: variant', () => <Wrapper styles={variantStyles} />)
  .add('With classNames: root', () => <WithClassNamesRoot />)
  .add('With classNames: variant', () => <WithClassNamesVariant />)
  .add('Styles API on VidentProvider: root', () => (
    <VidentProvider styles={{ ActionIcon: rootStyles }}>
      <Wrapper />
    </VidentProvider>
  ))
  .add('Styles API on VidentProvider: variant', () => (
    <VidentProvider styles={{ ActionIcon: variantStyles }}>
      <Wrapper />
    </VidentProvider>
  ));
