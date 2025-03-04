export function getLocalStorage<T>(key: string): T | null {
  const value = localStorage.getItem(key);
  if (!value) return null;

  return JSON.parse(value) as T;
}

export function setLocalStorage(key: string, value: unknown) {
  const notionFieldsMapping = JSON.stringify(value);
  localStorage.setItem(key, notionFieldsMapping);
}
