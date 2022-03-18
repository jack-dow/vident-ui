import clsx from './clsx';
import { css } from '../theme/stitches.config';
import type { CSSObject } from '../theme';
import { merge } from './merge';

const isObject = (obj: any) => {
  if (typeof obj === 'object' && obj !== null) {
    if (typeof Object.getPrototypeOf === 'function') {
      const prototype = Object.getPrototypeOf(obj);
      return prototype === Object.prototype || prototype === null;
    }

    return Object.prototype.toString.call(obj) === '[object Object]';
  }

  return false;
};

export const cx = (...args: (CSSObject | string | undefined)[]) => {
  const objects: CSSObject[] = [];
  const classNames: string[] = [];
  const refs: string[] = [];

  function sortArgs(arg: (CSSObject | string | undefined)[] | CSSObject | string | undefined) {
    if (Array.isArray(arg)) {
      arg.forEach((el) => sortArgs(el));
    }
    if (isObject(arg)) {
      const _arg = arg as CSSObject;
      objects.push(_arg);
      if (_arg.ref && typeof _arg.ref === 'string') refs.push(_arg.ref);
    }
    if (typeof arg === 'string') classNames.push(arg);
  }
  sortArgs(args);

  return clsx(objects?.length > 0 && css(merge(...objects)).toString(), ...classNames, ...refs);
};
