import React, { forwardRef } from 'react';
import { useBooleanToggle } from '@vident-ui/hooks';
import { createStyles, get } from '@vident-ui/styles';
import type * as Vident from '@vident-ui/styles';
import { ActionIcon } from '../ActionIcon';
import { TextInput, TextInputProps, TextInputStylesNames } from '../TextInput';
import { PasswordToggleIcon } from './PasswordToggleIcon';

export type PasswordInputStylesNames = Vident.ClassNames<typeof useStyles> | TextInputStylesNames;

export interface PasswordInputProps
  extends Vident.DefaultProps<PasswordInputStylesNames>,
    Omit<TextInputProps, 'classNames' | 'styles'> {
  /** Toggle button tabIndex, set to 0 to make button focusable with tab key */
  toggleTabIndex?: -1 | 0;

  /** Provide your own visibility toggle icon */
  visibilityToggleIcon?: React.FC<{ reveal: boolean; size?: number }>;
}

const useStyles = createStyles(() => ({
  visibilityToggle: {
    mr: '-$1_5',
  },
}));

const iconSizes = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      size = 'md',
      disabled,
      toggleTabIndex = -1,
      label = 'Password',
      autoComplete = 'current-password',
      placeholder = 'Enter your password',
      visibilityToggleIcon: VisibilityToggleIcon = PasswordToggleIcon,
      staticSelector = 'PasswordInput',
      ...others
    }: PasswordInputProps,
    ref
  ) => {
    const { classes, cx } = useStyles(null, { name: staticSelector });

    const [passwordShowing, toggle] = useBooleanToggle(false);

    return (
      <TextInput
        label={label}
        type={passwordShowing ? 'text' : 'password'}
        autoComplete={autoComplete}
        placeholder={placeholder}
        ref={ref}
        disabled={disabled}
        size={size}
        rightIconClickable
        {...others}
        rightIcon={
          !disabled && (
            <ActionIcon
              className={cx(classes.visibilityToggle)}
              tabIndex={toggleTabIndex}
              size={get(size, iconSizes)}
              aria-hidden
              onMouseDown={(event) => {
                event.preventDefault();
                toggle();
              }}
              onKeyDown={(event) => {
                if (event.nativeEvent.code === 'Space') {
                  event.preventDefault();
                  toggle();
                }
              }}
            >
              <VisibilityToggleIcon reveal={passwordShowing} />
            </ActionIcon>
          )
        }
      />
    );
  }
);

PasswordInput.displayName = '@vident-ui/core/PasswordInput';
