export function getLocalStorage<T>(key: string): T | null {
  const value = localStorage.getItem(key);
  if (!value) return null;

  return JSON.parse(value) as T;
}

export function setLocalStorage(key: string, value: unknown) {
  const notionFieldsMapping = JSON.stringify(value);
  localStorage.setItem(key, notionFieldsMapping);
}

export function appendToLocalStorageArray<T>(
  key: string,
  newItem: T,
  allowDuplicates: boolean = false
) {
  const currentArray = getLocalStorage<T[]>(key) || [];
  if (!allowDuplicates && currentArray.includes(newItem)) return;

  const updatedArray = [...currentArray, newItem];
  setLocalStorage(key, updatedArray);
}

export function clearLocalStorage(key: string) {
  localStorage.removeItem(key);
}
