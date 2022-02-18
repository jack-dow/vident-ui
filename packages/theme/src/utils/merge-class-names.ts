export function mergeClassNames<T extends Record<string, string>>(
  classes: T,
  classNames: Partial<T>,
  name: string
) {
  return Object.keys(classes).reduce((acc, className) => {
    acc[className] = [
      classes[className],
      classNames != null && classNames[className],
      name ? `vident-${name}-${className}` : null,
    ];

    return acc;
  }, {}) as T;
}
