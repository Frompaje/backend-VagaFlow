export class UserAlreadyExistsError extends Error {
  constructor() {
    super("[ERROR-001] User já existe");
  }
}
