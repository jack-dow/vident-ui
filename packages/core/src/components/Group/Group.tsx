import React from 'react';
import type * as Vident from '@vident-ui/theme';
import { filterFalsyChildren } from '../../utils';
import { Box } from '../Box';
import useStyles, { GroupPosition } from './Group.styles';

export interface GroupOwnProps extends Vident.DefaultProps {
  /** Defines justify-content property */
  position?: GroupPosition;

  /** Defined flex-wrap property */
  noWrap?: boolean;

  /** Defines flex-grow property for each element, true -> 1, false -> 0 */
  grow?: boolean;

  /** Space between elements */
  spacing?: Vident.ThemeToken<'space'>;

  /** Defines flex-direction property, row for horizontal, column for vertical */
  direction?: 'row' | 'column';

  /** Defines align-items css property */
  align?: React.CSSProperties['alignItems'];

  /** Elements rendered inside the Group */
  children?: React.ReactNode;
}

export const Group = React.forwardRef((props, ref) => {
  const {
    css,
    position = 'left',
    align,
    children,
    noWrap = false,
    grow = false,
    spacing = '$4',
    direction = 'row',
    classNames,
    styles,
    ...groupProps
  } = props;

  const filteredChildren = filterFalsyChildren(children);
  const { classes, cx } = useStyles({
    align,
    grow,
    noWrap,
    spacing,
    position,
    direction,
    count: filteredChildren.length,
  });

  const items = filteredChildren.map((child) =>
    React.cloneElement(child, {
      className: cx(classes.child, child.props.className),
    })
  );

  return (
    <Box {...groupProps} ref={ref} css={[classes.root, css]}>
      {items}
    </Box>
  );
}) as Vident.Polymorphic.ForwardRefComponent<'div', GroupOwnProps>;

Group.displayName = '@vident-ui/core/Group';
