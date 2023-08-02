import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as dotenv from 'dotenv'

async function bootstrap() {
  // Load the environment variables from .env file
  dotenv.config()
  const app = await NestFactory.create(AppModule, { abortOnError: false })
  app.useGlobalPipes(new ValidationPipe())
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Todo APP')
    .setDescription('Todo API documentation')
    .setVersion('1.0')
    .addTag('Todo')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)
  await app.listen(3000)
}
bootstrap()
