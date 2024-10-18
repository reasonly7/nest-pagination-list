import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  StreamableFile,
} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { map, Observable } from 'rxjs';
import { ResponseData } from './ResponseData';
import { Response } from 'express';

@Injectable()
class ResponseInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response>();

    return next.handle().pipe(
      map((data: unknown) => {
        if (
          data instanceof Buffer ||
          data instanceof StreamableFile ||
          response.getHeaders()['content-type'] === 'application/octet-stream'
        ) {
          return data;
        }

        if (data instanceof ResponseData) {
          return {
            ...data,
            success: true,
          };
        }

        return {
          data: data || null,
          message: null,
          code: 200,
          success: true,
        };
      }),
    );
  }
}

export const ResponseInterceptorProvider = {
  provide: APP_INTERCEPTOR,
  useClass: ResponseInterceptor,
};
