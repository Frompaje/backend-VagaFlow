export class UserPasswordNotMatchedError extends Error{
  constructor() {
    super("[ERROR-003] Senha invalida ")
  }
}
