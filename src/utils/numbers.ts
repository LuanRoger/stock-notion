export function parseNumber(value: string): number {
  const sanitizedValue = value.replace(",", ".");
  const parsedValue = parseFloat(sanitizedValue);

  if (isNaN(parsedValue)) {
    throw new Error(`Invalid number: ${value}`);
  }

  return parsedValue;
}
