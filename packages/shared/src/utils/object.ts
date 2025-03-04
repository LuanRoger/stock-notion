export function mergeWithDefaults<T extends Record<string, any>>(
  providedObject: Partial<T> | undefined | null,
  defaultObject: T,
  allowUndefinedOverrides = false
): T {
  if (!providedObject) return { ...defaultObject };

  const result = { ...defaultObject };

  for (const key in providedObject) {
    if (Object.prototype.hasOwnProperty.call(providedObject, key)) {
      if (providedObject[key] !== undefined || allowUndefinedOverrides) {
        result[key] = providedObject[key] as T[Extract<keyof T, string>];
      }
    }
  }

  return result;
}

export function setUndefinedForEmptyStrings<T extends Record<string, any>>(
  object: T
): T {
  const result = { ...object };

  for (const key in result) {
    if (Object.prototype.hasOwnProperty.call(result, key)) {
      if (result[key] === "") {
        result[key] = undefined as T[Extract<keyof T, string>];
      }
    }
  }

  return result;
}
