export class FiNotFound extends Error {
  constructor(id: string) {
    super(`FII ${id} not found`);
  }
}

export class FiHasInvalidData extends Error {
  constructor(id: string) {
    super(`FII ${id} has invalid data`);
  }
}
