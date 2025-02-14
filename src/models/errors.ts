export class FiiNotFound extends Error {
  constructor(id: string) {
    super(`FII ${id} not found`);
  }
}

export class FiiHasInvalidData extends Error {
  constructor(id: string) {
    super(`FII ${id} has invalid data`);
  }
}
