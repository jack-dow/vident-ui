export const get = (path: string | number | string[], object: object, defaultValue?: any) => {
  if (!path) return path;
  if (typeof path === 'number') return path;
  const _path = Array.isArray(path) ? path : path.split('.');

  if (object && _path.length) {
    return get(_path, object[_path.shift()], defaultValue);
  }

  if (object === undefined) {
    if (defaultValue) return defaultValue;
    return path;
  }
  return object;
};
