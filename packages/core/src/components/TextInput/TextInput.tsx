import React, { forwardRef } from 'react';
import { useId } from '@vident-ui/hooks';
import type * as Vident from '@vident-ui/styles';
import { Input, InputOwnProps, InputStylesNames, InputSize } from '../Input';
import {
  InputWrapperOwnProps,
  InputWrapper,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';

export type TextInputStylesNames = InputStylesNames | InputWrapperStylesNames;

export interface TextInputProps
  extends Vident.DefaultProps<TextInputStylesNames>,
    Omit<InputOwnProps, keyof Vident.DefaultProps>,
    InputWrapperOwnProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;

  /** Input element type */
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'number';

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: { [key: string]: any };

  /** Input size */
  size?: InputSize;

  /** Static css selector base */
  staticSelector?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      id,
      label,
      error,
      required,
      type = 'text',
      style,
      description,
      wrapperProps,
      size,
      classNames,
      styles,
      staticSelector = 'TextInput',
      css,
      ...others
    }: TextInputProps,
    ref
  ) => {
    const uuid = useId(id);

    return (
      <InputWrapper
        id={uuid}
        label={label}
        error={error}
        description={description}
        size={size}
        className={className}
        style={style}
        classNames={classNames}
        styles={styles}
        staticSelector={staticSelector}
        css={css}
        {...wrapperProps}
      >
        <Input
          {...others}
          required={required}
          ref={ref}
          id={uuid}
          type={type}
          invalid={!!error}
          size={size}
          classNames={classNames}
          styles={styles}
          staticSelector={staticSelector}
        />
      </InputWrapper>
    );
  }
);

TextInput.displayName = '@vident-ui/core/TextInput';
