import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, VidentProvider } from '@vident-ui/theme';
import { generateBorderStyles } from '@vident-ui/utils';
import { InputWrapper as InputWrapperStylesApi } from './styles.api';
// import { paragraph } from '@vident-ui/mockdata';
import { InputWrapper, InputWrapperProps } from './InputWrapper';
import { Input } from '../Input';

const paragraph =
  "Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth.";

const SIZES = ['xs', 'sm', 'md', 'lg'];

const input = <Input placeholder="you@example.com" />;

const sizes = SIZES.map((size) => (
  <InputWrapper
    size={size}
    key={size}
    label={`${size} Input label`}
    labelElement="label"
    id="input-wrapper-1"
    description="Provide additional information about input here, can be multiline. Dimmed and smaller compared to label."
    style={{ marginTop: 30 }}
  >
    {input}
  </InputWrapper>
));

storiesOf('@vident-ui/core/InputWrapper/stories', module)
  .add('Sizes', () => <div style={{ padding: 15, maxWidth: 400 }}>{sizes}</div>)
  .add('With error and hint', () => (
    <InputWrapper
      label="Password"
      hint="Optional"
      error=" Your password must be less than 4 characters."
      id="input-wrapper-1"
      description="Provide additional information about input here, can be multiline. Dimmed and smaller compared to label."
    >
      {input}
    </InputWrapper>
  ))
  .add('Hidden label', () => (
    <InputWrapper
      label="Email"
      hideLabel
      id="input-wrapper-1"
      description="Provide additional information about input here, can be multiline. Dimmed and smaller compared to label."
    >
      {input}
    </InputWrapper>
  ))
  .add('Error overflow', () => (
    <div style={{ padding: 15, maxWidth: 300, backgroundColor: 'rgba(0, 0, 0, .1)' }}>
      <InputWrapper label="Input label" id="input-wrapper-1" error={paragraph}>
        {input}
      </InputWrapper>
      <InputWrapper label="Input label" id="input-wrapper-1" error={paragraph.replace(/\s/g, '')}>
        {input}
      </InputWrapper>
    </div>
  ))

  .add('Label overflow', () => (
    <div style={{ padding: 15, maxWidth: 300, backgroundColor: 'rgba(0, 0, 0, .1)' }}>
      <InputWrapper
        label="This input has so large label that it should get to the next line"
        id="input-wrapper-1"
      >
        {input}
      </InputWrapper>

      <InputWrapper
        label="ThisInputHasLabelThatIsSoLargeThatItWillOverflowAndBreakLayout"
        id="input-wrapper-1"
      >
        {input}
      </InputWrapper>
    </div>
  ));

const styles = generateBorderStyles(InputWrapperStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<InputWrapperProps>) {
  return (
    <InputWrapper
      {...props}
      style={{ maxWidth: 400 }}
      css={{ mt: '$4', mx: 'auto', ...props.css }}
      label="Label"
      error="Error"
      description="Description"
    >
      content
    </InputWrapper>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@vident-ui/core/InputWrapper/styles-api', module)
  .add('With css', () => <Wrapper css={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on VidentProvider', () => (
    <VidentProvider styles={{ InputWrapper: () => styles }}>
      <Wrapper />
    </VidentProvider>
  ));
