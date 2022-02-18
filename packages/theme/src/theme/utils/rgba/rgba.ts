/* eslint-disable no-bitwise */
import { toRgba } from '../../../utils/to-rgba';
import type { Theme } from '../../types';

export const rgba = (color: string, alpha: number) => (theme: Theme) => {
  if (typeof color !== 'string' || alpha > 1 || alpha < 0 || (color.includes('$') && !theme)) {
    return 'rgba(0, 0, 0, 1)';
  }

  let _color = color;

  if (_color.includes('$')) {
    _color = color.replace('$', '');
  }

  _color = _color in theme.colors ? theme.colors[_color].value : _color;

  const { r, g, b } = toRgba(_color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
