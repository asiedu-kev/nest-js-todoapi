import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Todo } from './entities/todo.entity'
import { Repository, Timestamp } from 'typeorm'

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ) {}
  async create(createTodoDto: CreateTodoDto) {
    const todo = new Todo()
    const { title, description } = createTodoDto
    todo.title = title
    todo.description = description
    return this.todoRepository.save(todo)
  }

  async findAll() {
    return await this.todoRepository.find({ withDeleted: false })
  }

  async findOne(id: string) {
    const todo = await this.todoRepository.findOne({
      where: {
        id: id
      }
    })
    if (!todo) {
      throw new NotFoundException('Todo not found')
    }
    return todo
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoRepository.findOne({
      where: {
        id: id
      }
    })
    if (!todo) {
      throw new NotFoundException('Todo not found')
    }
    const { title, description, completed } = updateTodoDto
    todo.completed = completed ?? todo.completed
    todo.title = title ?? todo.title
    todo.description = description ?? todo.description
    return this.todoRepository.save(todo)
  }

  async remove(id: string) {
    const todo = await this.todoRepository.findOne({
      where: {
        id: id
      }
    })

    if (!todo) {
      throw new NotFoundException('Todo not found')
    }

    todo.deletedAt = new Date()
    return await this.todoRepository.save(todo)
  }
}
