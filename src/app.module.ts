import { Module } from '@nestjs/common';
import { importConfigModule } from './config/importConfigModule';
import { AppController } from './app.controller';
import { CatsModule } from './cats/cats.module';
import { importTypeOrmModule } from './typeorm/importTypeOrmModule';
import { ResponseModule } from './response/response.module';

@Module({
  imports: [
    importConfigModule(),
    importTypeOrmModule(),
    ResponseModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
