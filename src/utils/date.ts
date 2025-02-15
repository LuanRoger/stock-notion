export function parseDate(value: string | undefined): Date | undefined {
  if (!value) {
    return undefined;
  }

  const [day, month, year] = value.split("/").map((v) => parseInt(v));
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return undefined;
  }

  return new Date(year, month, day);
}
