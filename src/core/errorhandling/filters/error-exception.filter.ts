import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express'

@Catch(Error)
export class ErrorHttpExceptionFilter implements ExceptionFilter {
  public catch(error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = error.getStatus();

    console.log('%s %s error: %s', request.method, request.url, error.message)

    response.status(status).json({
      statusCode: status,
      message: error.message,
      path: request.url
    })
  }
}