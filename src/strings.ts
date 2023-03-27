export function camelCase(value: string) {
  let string = studlyCaps(value);
  return string.substring(0, 1).toLowerCase() + string.substring(1);
}
export function kebabCase(value: string): string {
  return decamelize(value, '-');
}

export function studlyCaps(value: string): string {
  let string = value.replace(/[-_\s]+(.)?/g, (_, chr) => {
    if (chr == null) return '';
    return chr.toUpperCase();
  });

  return string.substring(0, 1).toUpperCase() + string.substring(1);
}

function decamelize(value: string, chr = '_') {
  let camel = camelCase(value);
  let string = camel.replace(/([A-Z])+/g, `${chr}$1`);
  return string.toLowerCase();
}
