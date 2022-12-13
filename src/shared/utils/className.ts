export const cn = (classes: (string | undefined | boolean)[]): string => {
  return classes.filter((value): value is string => !!value).join(" ");
};
