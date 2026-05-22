export class EnvVariableNotSetError extends Error {
  constructor(variable: string) {
    super(`Environment variable ${variable} is not set`);
  }
}
