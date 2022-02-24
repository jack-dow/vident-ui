import React, {
  forwardRef,
  useCallback,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from 'react';
import { useId, useBooleanToggle } from '@vident-ui/hooks';
import type * as Vident from '@vident-ui/theme';
import { Keys } from '../../utils';
import { Box } from '../Box';
import useStyles, { SwitchSize } from './Switch.styles';
import { isDisabledReactIssue7711 } from './isDisabledReactIssue7711';

export type SwitchStylesNames = Vident.ClassNames<typeof useStyles>;

export interface SwitchProps
  extends Vident.DefaultProps<SwitchStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'type' | 'size' | 'onChange'> {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Switch checked attribute */
  checked?: boolean;

  /** Switch label */
  label?: React.ReactNode;

  /** Inner label when Switch is in unchecked state */
  offLabel?: string;

  /** Inner label when Switch is in checked state */
  onLabel?: string;

  /** Switch checked state color from theme.colors, defaults to theme.primaryColor */
  color?: Vident.Color;

  /** Predefined size value */
  size?: SwitchSize;

  /** Predefined border-radius value from theme or any valid border-radius value */
  radius?: Vident.ThemeToken<'radii'>;

  /** onChange handler for the Switch state */
  onChange?: (value: boolean) => void;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>((props: SwitchProps, ref) => {
  // const [_checked, toggle] = useBooleanToggle();
  const {
    css,
    color,
    label,
    id,
    size = 'md',
    radius = '$full',
    checked = false,
    onChange,
    classNames,
    styles,
    ...passThroughProps
  } = props;
  const [internalChecked, toggleInternalChecked] = useBooleanToggle();
  const { classes, cx } = useStyles(
    { size, color, radius, checked: checked || internalChecked },
    { classNames, styles, name: 'Switch' }
  );

  const internalId = `vident-switch-${useId()}`;

  const toggle = useCallback(() => {
    if (onChange) {
      return onChange(!checked);
    }
    return toggleInternalChecked();
  }, [onChange, checked, toggleInternalChecked]);

  const handleClick = useCallback(
    (event: ReactMouseEvent) => {
      if (isDisabledReactIssue7711(event.currentTarget)) return event.preventDefault();
      event.preventDefault();
      toggle();
      return undefined;
    },
    [toggle]
  );
  const handleKeyUp = useCallback(
    (event: ReactKeyboardEvent<HTMLElement>) => {
      if (event.key !== Keys.Tab) event.preventDefault();
      if (event.key === Keys.Space) toggle();
    },
    [toggle]
  );

  // This is needed so that we can "cancel" the click event when we use the `Enter` key on a button.
  const handleKeyPress = useCallback(
    (event: ReactKeyboardEvent<HTMLElement>) => event.preventDefault(),
    []
  );

  return (
    <Box
      {...passThroughProps}
      as="button"
      css={[classes.root, css]}
      id={id || internalId}
      ref={ref}
      role="switch"
      tabIndex={0}
      aria-checked={checked || internalChecked}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      onKeyPress={handleKeyPress}
    >
      <Box as="span" css={{ sr: 'only' }}>
        Use setting
      </Box>
      <span aria-hidden="true" className={cx(classes.handle)} />
    </Box>
  );
});

Switch.displayName = '@vident-ui/core/Switch';
