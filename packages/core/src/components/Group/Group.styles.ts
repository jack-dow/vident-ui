import React from 'react';
import { ThemeToken, createStyles } from '@vident-ui/theme';

export type GroupPosition = 'right' | 'center' | 'left' | 'apart';

interface GroupStyles {
  position: GroupPosition;
  noWrap: boolean;
  grow: boolean;
  spacing: ThemeToken<'space'>;
  direction: 'row' | 'column';
  align: React.CSSProperties['alignItems'];
  count: number;
}

const POSITIONS = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  apart: 'space-between',
};

export default createStyles(
  (helpers, { spacing, position, noWrap, direction, grow, align, count }: GroupStyles) => {
    const space = spacing as string;
    return {
      root: {
        display: 'flex',
        flexDirection: direction,
        alignItems:
          align ||
          (direction === 'row'
            ? 'center'
            : grow
            ? 'stretch'
            : position === 'apart'
            ? 'flex-start'
            : POSITIONS[position]),
        flexWrap: noWrap ? 'nowrap' : 'wrap',
        justifyContent: direction === 'row' ? POSITIONS[position] : undefined,
        gap: spacing,
      },

      child: {
        maxWidth:
          grow && direction === 'row'
            ? `calc(${100 / count}% - (${space} - ${space} / ${count}))`
            : undefined,
        flexGrow: grow ? 1 : 0,
      },
    };
  }
);
