export class Result<T> {
  public data?: T
  public code?: number
  public message?: string

  public constructor(data?: T, code?: number, message?: string) {
    this.data = data
    this.code = code
    this.message = message
  }
}