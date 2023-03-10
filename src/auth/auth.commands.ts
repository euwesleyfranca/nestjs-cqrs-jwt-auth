export class ValidateAuthCommand {
  constructor(
    public readonly email: string,
    public readonly password: string,
  ) {}
}

export class AuthCommand {
  constructor(public readonly user: any) {}
}
