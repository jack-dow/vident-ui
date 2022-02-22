import React from 'react';
import { createStyles } from '@vident-ui/theme';
import type { ThemeToken } from '@vident-ui/theme';

export type InputVariant = 'default' | 'unstyled' | 'headless';
export type InputSize = keyof typeof sizes;

interface InputStyles {
  invalidColor?: ThemeToken<'colors', string>;
  variant: InputVariant;
  size: InputSize;
  leftIconPadding: ThemeToken<'space'>;
  leftIconClickable?: boolean;
  rightIconPadding: ThemeToken<'space'>;
  rightIconClickable?: boolean;
  left: React.ReactNode;
  right: React.ReactNode;
  radius: ThemeToken<'radii'>;
  multiline: boolean;
}

export const sizes = {
  xs: {
    py: '$1',
    px: '$1_5',
    text: '$xs',
  },
  sm: {
    py: '$1_5',
    px: '$2_5',
    text: '$sm',
    '@sm': {
      text: '$xs',
    },
  },
  md: {
    py: '$2',
    px: '$3',
    text: '$base',
    '@sm': {
      text: '$sm',
    },
  },
  lg: {
    py: '$3',
    px: '$4',
    text: '$lg',
    '@sm': {
      text: '$base',
    },
  },
};

export default createStyles(
  (
    { theme, utils },
    {
      invalidColor = utils.mode('$red600', '$red500'),
      size = 'md',
      variant = 'default',
      leftIconPadding,
      leftIconClickable = false,
      rightIconPadding,
      rightIconClickable = false,
      left,
      right,
      radius,
      multiline,
    }: InputStyles
  ) => {
    const { mode, get } = utils;

    const focusStyles = {
      '&:focus, &:focus-within': {
        ring: '2px',
        ringColor: `$${theme.primaryColor}600`,
        ringOffsetColor: mode('$gray50', '$gray900'),
        outline: 'none',
        border: `1px solid $${theme.primaryColor}600`,
      },
    };

    const disabled = {
      backgroundColor: mode('$gray100', '$gray800'),
      color: mode('$gray300', '$gray400'),
      opacity: 0.6,
      cursor: 'not-allowed',

      '&::placeholder': {
        color: mode('$gray400', '$gray500'),
      },
    };

    return {
      wrapper: {
        position: 'relative',
        display: left || right ? 'flex' : 'block',
        rounded: left || right ? radius : 'none',
        shadow: left || right ? '$sm' : '$none',
      },

      input:
        variant !== 'headless'
          ? {
              appearance: 'none',
              roundedLeft: left ? 'none' : radius,
              roundedRight: right ? 'none' : radius,
              display: 'block',
              height: multiline ? (variant === 'unstyled' ? undefined : 'auto') : get(size, sizes),
              width: '100%',
              transition: '$base',
              resize: 'none',
              color: mode('$black', '$white'),
              flex: left ? '1 1 0%' : 'auto',
              minWidth: '0px',
              ...sizes[size],

              '&:focus': {
                zIndex: right ? 10 : 'auto',
              },

              '&:disabled': disabled,

              '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
                {
                  appearance: 'none',
                },

              '&[type=number]': {
                MozAppearance: 'textfield',
              },
            }
          : {},

      default: {
        shadow: left || right ? '$none' : '$sm',
        border: `1px solid ${mode('$gray300', '$gray700')}`,
        backgroundColor: mode('$white', '$black'),
        ...focusStyles,
      },

      headless: {},

      unstyled: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        minHeight: 28,
        outline: 0,

        '&:focus, &:focus-within': {
          outline: 'none',
          borderColor: 'transparent',
        },

        '&:disabled': {
          backgroundColor: 'transparent',

          '&:focus, &:focus-within': {
            outline: 'none',
            borderColor: 'transparent',
          },
        },
      },

      withLeftIcon: {
        pl: leftIconPadding,
      },
      withRightIcon: {
        pr: rightIconPadding,
      },

      invalid: {
        color: invalidColor,
        borderColor: `${invalidColor}`,

        '&::placeholder': {
          opacity: 1,
          color: invalidColor,
        },

        '&:focus': {
          borderColor: `${invalidColor}`,
          ringColor: invalidColor,
        },
      },

      disabled,

      leftIcon: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        pl: '$3',
        display: 'flex',
        alignItems: 'center',
        pointerEvents: leftIconClickable ? 'auto' : 'none',
      },
      rightIcon: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        pr: '$3',
        display: 'flex',
        alignItems: 'center',
        pointerEvents: rightIconClickable ? 'auto' : 'none',
      },
    };
  }
);
