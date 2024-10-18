import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
  Logger,
  ExceptionFilter,
} from '@nestjs/common';
import { APP_FILTER, HttpAdapterHost } from '@nestjs/core';

@Catch()
class ExceptionResponseFilter implements ExceptionFilter {
  private readonly logger = new Logger(ExceptionResponseFilter.name);
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const code =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      (exception as HttpException).message || 'Internal Server Unknown Error';

    const responseBody = { data: null, message, code, success: false };

    httpAdapter.reply(ctx.getResponse(), responseBody, code);

    this.logger.error(message, (exception as HttpException).stack);
  }
}

export const ExceptionResponseFilterProvider = {
  provide: APP_FILTER,
  useClass: ExceptionResponseFilter,
};
