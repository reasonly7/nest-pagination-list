import { Module } from '@nestjs/common';
import { ExceptionResponseFilterProvider } from './exception-response.filter';
import { ResponseInterceptorProvider } from './response.interceptor';

@Module({
  imports: [],
  controllers: [],
  providers: [ExceptionResponseFilterProvider, ResponseInterceptorProvider],
})
export class ResponseModule {}
