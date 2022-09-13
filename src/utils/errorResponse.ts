class ErrorResponse extends Error {
  statusCode: null;

  constructor(message: any, statusCode: any) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ErrorResponse;
