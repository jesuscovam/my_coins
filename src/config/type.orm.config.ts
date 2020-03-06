import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "agosto2018",
    database: "monday",
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    synchronize: true
}