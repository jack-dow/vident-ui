/* eslint-disable no-restricted-syntax */
/* eslint-disable no-cond-assign */
/* eslint-disable no-shadow-restricted-names */
/* eslint-disable no-plusplus */
function toVal(mix: any) {
  let k;
  let y;
  let str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if ((y = toVal(mix[k]))) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

export default function (...args: any[]) {
  let i = 0;
  let tmp;
  let x;
  let str = '';
  while (i < args.length) {
    if ((tmp = args[i++])) {
      if ((x = toVal(tmp))) {
        str && (str += ' ');
        str += x;
      }
    }
  }
  return str;
}
