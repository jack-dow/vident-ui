import clsx from './clsx';
import { css } from '../theme/stitches.config';
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

export const cx = (...args: any) => {
  const objects = [];
  const classNames = [];
  const refs = [];

  function sortArgs(arg) {
    if (Array.isArray(arg)) {
      arg.forEach((el) => sortArgs(el));
    }
    if (isObject(arg)) {
      objects.push(arg);
      if (arg.ref) refs.push(arg.ref);
    }
    if (typeof arg === 'string') classNames.push(arg);
  }
  sortArgs(args);

  return clsx(objects?.length > 0 && css(merge(...objects)).toString(), ...classNames, ...refs);
};
