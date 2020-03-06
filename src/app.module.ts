import { Module } from '@nestjs/common';

import { CoinsModule } from './coins/coins.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/type.orm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ TypeOrmModule.forRoot(typeOrmConfig),
    CoinsModule,
    AuthModule],
})
export class AppModule {}
