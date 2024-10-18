import { Module } from '@nestjs/common';
import { importConfigModule } from './config/importConfigModule';
import { AppController } from './app.controller';
import { CatsModule } from './cats/cats.module';
import { importTypeOrmModule } from './typeorm/importTypeOrmModule';

@Module({
  imports: [importConfigModule(), importTypeOrmModule(), CatsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
