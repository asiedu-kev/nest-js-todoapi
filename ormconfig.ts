import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.POSTGRES_DB || 'todo_db',
  entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
  migrationsRun: false,
  logging: true,
  migrationsTableName: 'migration',
  migrations: [
    __dirname + '/migration/**/*.ts',
    __dirname + '/migration/**/*.js'
  ],
  synchronize: false
}

export = typeOrmConfig
