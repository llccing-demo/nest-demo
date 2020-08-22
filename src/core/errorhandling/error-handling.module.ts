import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception.filter'

const services = [HttpExceptionFilter]

@Module({
  providers: [...services]
})
export class ErrorHandlingModule { }