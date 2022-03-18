/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import { useVidentUtils } from '@vident-ui/styles';
import type * as Vident from '@vident-ui/styles';
import { Text } from '../Text';
import { Box } from '../Box';
import useStyles from './InputWrapper.styles';

export type InputWrapperStylesNames = Vident.ClassNames<typeof useStyles>;

export interface InputWrapperOwnProps {
  /** Input label, displayed before input */
  label?: React.ReactNode;

  /** Input description, displayed after label */
  description?: React.ReactNode;

  /** Displays error message after input */
  error?: React.ReactNode;

  /** Adds hint to right side inline with label  */
  hint?: React.ReactNode;

  /** Hides label so it is only visible to screen readers */
  hideLabel?: boolean;

  /** Props spread to label element */
  labelProps?: React.ComponentPropsWithoutRef<'label'> & { [key: string]: any };

  /** Props spread to description element */
  descriptionProps?: React.ComponentPropsWithoutRef<'p'> & { [key: string]: any };

  /** Props spread to error element */
  errorProps?: React.ComponentPropsWithoutRef<'p'> & { [key: string]: any };

  /** Props spread to hint element */
  hintProps?: React.ComponentPropsWithoutRef<'span'> & { [key: string]: any };
}

export interface InputWrapperProps
  extends Vident.DefaultProps<InputWrapperStylesNames>,
    InputWrapperOwnProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Input that should be wrapped */
  children: React.ReactNode;

  /** htmlFor label prop */
  id?: string;

  /** Render label as label with htmlFor or as div */
  labelElement?: 'label' | 'div';

  /** Controls all elements font-size */
  size?: Vident.ThemeToken<'fontSizes'>;

  /** Static css selector base */
  staticSelector?: string;
}

export const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>(
  (
    {
      css,
      label,
      hideLabel,
      children,
      id,
      error,
      hint,
      hintProps,
      description,
      labelElement = 'label',
      labelProps,
      descriptionProps,
      errorProps,
      classNames,
      styles,
      size = 'md',
      staticSelector = 'InputWrapper',
      ...others
    }: InputWrapperProps,
    ref
  ) => {
    const { mode } = useVidentUtils();
    const { classes, cx } = useStyles(
      { hideLabel, hint: !!hint },
      { classNames, styles, name: staticSelector }
    );
    const _labelProps = labelElement === 'label' ? { htmlFor: id } : {};

    return (
      <Box css={[classes.root, css]} ref={ref} {...others}>
        <div className={cx(classes.labelWrapper)}>
          {label && (
            <Text<any>
              color={mode('$gray700', '$gray200')}
              {..._labelProps}
              {...labelProps}
              as={labelElement}
              id={id ? `${id}-label` : undefined}
              className={cx(classes.label)}
            >
              {label}
            </Text>
          )}

          {typeof hint !== 'string' ? (
            hint
          ) : (
            <Text as="span" {...hintProps} className={cx(classes.hint)}>
              {hint}
            </Text>
          )}
        </div>

        {children}

        {description && !error && (
          <Text color="$gray500" {...descriptionProps} className={cx(classes.description)}>
            {description}
          </Text>
        )}

        {typeof error !== 'boolean' && error && (
          <Text color="$red600" {...errorProps} size={size} className={cx(classes.error)}>
            {error}
          </Text>
        )}
      </Box>
    );
  }
);

InputWrapper.displayName = '@vident-ui/core/InputWrapper';
