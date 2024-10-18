export class ResponseData<T extends any> {
  constructor(
    public readonly data: T = null,
    public readonly message: string | null = null,
    public readonly code: number = 200,
  ) {}
}
