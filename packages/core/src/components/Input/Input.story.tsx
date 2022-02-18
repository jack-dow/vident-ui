import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, VidentProvider } from '@vident-ui/theme';
import { generateBorderStyles, InputStylesApiWrapper } from '@vident-ui/utils';
import { SearchIcon, MailIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid';
import Textarea from 'react-textarea-autosize';
import { Input } from './Input';
import { Group } from '../Group';
import { sizes, InputSize } from './Input.styles';
import { Input as InputStylesApi } from './styles.api';
import { Box } from '../Box';

function ValidInvalid() {
  const [valid, toggle] = useState(false);
  return (
    <div>
      <Input invalid={valid} placeholder="Hello there" />
      <Input style={{ marginTop: 10 }} invalid={valid} placeholder="Hello there" />

      <button type="button" onClick={() => toggle(!valid)} style={{ marginTop: 20 }}>
        toggle
      </button>
    </div>
  );
}

const sizeStory = Object.keys(sizes).map((size: InputSize) => (
  <Input as="input" size={size || 'sm'} placeholder={`${size} input`} key={size} />
));

const getStates = (props?: any) => (
  <div style={{ maxWidth: 400 }}>
    <Input placeholder="Text" {...props} />
    <Input placeholder="Tel" type="tel" style={{ marginTop: 15 }} {...props} />
    <Input placeholder="Number" type="number" {...props} style={{ marginTop: 15 }} />
    <Input placeholder="Search" type="search" {...props} style={{ marginTop: 15 }} />
    <Input placeholder="Email" type="email" {...props} style={{ marginTop: 15 }} />
    <Input placeholder="Url" type="url" {...props} style={{ marginTop: 15 }} />
    <Input
      placeholder="Invalid"
      leftIcon={<SearchIcon style={{ width: 20, height: 20 }} />}
      invalid
      style={{ marginTop: 15 }}
      {...props}
    />
    <Input placeholder="Disabled" disabled style={{ marginTop: 15 }} {...props} />
    <Input
      placeholder="With left icon"
      leftIcon={<MailIcon style={{ width: 20, height: 20 }} />}
      style={{ marginTop: 15 }}
      {...props}
    />
    <Input
      style={{ marginTop: 15 }}
      placeholder="With right icon"
      rightIcon={<QuestionMarkCircleIcon style={{ width: 20, height: 20 }} />}
      {...props}
    />
    <Input
      style={{ marginTop: 15 }}
      placeholder="With left section"
      left={
        <Box
          as="span"
          css={{
            // display: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            px: '$3',
            roundedLeft: '$md',
            borderWidth: '1px',
            borderColor: '$gray300',
            borderRightWidth: '0px',
            backgroundColor: '$gray50',
            color: '$gray500',
            '@sm': {
              text: '$sm',
            },
          }}
        >
          http://
        </Box>
      }
      {...props}
    />
    <Input
      style={{ marginTop: 15 }}
      placeholder="With right section"
      right={
        <Box
          as="span"
          css={{
            // display: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            px: '$3',
            roundedRight: '$md',
            borderWidth: '1px',
            borderColor: '$gray300',
            borderLeftWidth: '0px',
            backgroundColor: '$gray50',
            color: '$gray500',
            '@sm': {
              text: '$sm',
            },
          }}
        >
          http://
        </Box>
      }
      {...props}
    />
  </div>
);

storiesOf('@vident-ui/core/Input/stories', module)
  .add('Sizes', () => (
    <Group grow direction="column" spacing="$4" css={{ padding: '$8' }}>
      {sizeStory}
    </Group>
  ))
  .add('Default variant', () => <>{getStates({ variant: 'default' })}</>)
  .add('Unstyled variant', () => <>{getStates({ variant: 'unstyled' })}</>)
  .add('Headless variant', () => <>{getStates({ variant: 'headless' })}</>)
  .add('Custom component: button', () => (
    <>
      {getStates({ as: 'button', children: 'Input button' })}
      {getStates({
        variant: 'filled',
        as: 'button',
        children: 'Input button',
      })}
      {getStates({
        variant: 'unstyled',
        as: 'button',
        children: 'Input button',
      })}
    </>
  ))
  .add('Custom as: Textarea', () => (
    <>
      {getStates({ as: Textarea, inputStyle: { paddingTop: 9, paddingBottom: 9 } })}
      {getStates({
        variant: 'filled',
        as: Textarea,
        inputStyle: { paddingTop: 9, paddingBottom: 9 },
      })}
      {getStates({
        variant: 'unstyled',
        as: Textarea,
        inputStyle: { paddingTop: 9, paddingBottom: 9 },
      })}
    </>
  ))
  .add('Invalid toggle', () => <ValidInvalid />);

const styles = generateBorderStyles(InputStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<React.ComponentProps<typeof Input>>) {
  return <InputStylesApiWrapper component={Input} data={['React', 'Angular', 'Vue']} {...props} />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@vident-ui/core/Input/styles-api', module)
  .add('With css', () => (
    <Wrapper css={{ border: '1px solid red', maxWidth: 400, mx: 'auto', mt: '$4' }} />
  ))
  .add('Root styles object', () => <Wrapper styles={{ wrapper: { border: '1px solid blue' } }} />)
  .add('Root styles function', () => (
    <Wrapper styles={() => ({ wrapper: { border: '1px solid blue' } })} />
  ))
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on VidentProvider', () => (
    <VidentProvider styles={{ Input: () => styles }}>
      <Wrapper />
    </VidentProvider>
  ))
  .add('Custom invalid styles', () => (
    <Input
      placeholder="Invalid input"
      invalid
      css={{ maxWidth: 400, mx: 'auto', mt: '$4' }}
      styles={{ invalid: { borderColor: 'blue', '&::placeholder': { color: 'blue' } } }}
    />
  ));
