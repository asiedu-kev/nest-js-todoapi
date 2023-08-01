import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string
  @IsString()
  @IsNotEmpty()
  description: string
}
