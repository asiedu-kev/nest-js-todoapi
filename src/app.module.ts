import { Module } from '@nestjs/common'
import { TodosModule } from './todos/todos.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import typeOrmConfig from '../ormconfig'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'postgres-db',
      port: +process.env.POSTGRES_PORT || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.POSTGRES_DB || 'tododb',
      entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
      migrationsRun: false,
      logging: true,
      migrationsTableName: 'migration',
      migrations: [
        __dirname + '/migration/**/*.ts',
        __dirname + '/migration/**/*.js'
      ],
      synchronize: true
    }),
    TodosModule
  ]
})
export class AppModule {}
