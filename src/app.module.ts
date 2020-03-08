import { Module } from '@nestjs/common';

import { CoinsModule } from './coins/coins.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/type.orm.config';
import { AuthModule } from './auth/auth.module';
import { EpicModule } from './epic/epic.module';

@Module({
  imports: [ TypeOrmModule.forRoot(typeOrmConfig),
    CoinsModule,
    AuthModule,
    EpicModule],
})
export class AppModule {}
