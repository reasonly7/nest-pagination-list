import { Module } from '@nestjs/common';
import { importConfigModule } from './config/importConfigModule';
import { AppController } from './app.controller';

@Module({
  imports: [importConfigModule()],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
