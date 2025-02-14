export function parseDate(value: string): Date {
  const [day, month, year] = value.split("/").map((v) => parseInt(v));

  return new Date(year, month, day);
}
