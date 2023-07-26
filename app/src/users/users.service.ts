import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { QueryResult } from 'pg';

@Injectable()
export class UsersService {
  constructor(private readonly dbService: DatabaseService) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  async findAllUsers(): Promise<QueryResult> {
    const sql = 'SELECT * FROM users;';
    return this.dbService.query(sql);
  }

  async createUser(createUserDto: CreateUserDto): Promise<QueryResult> {
    const sql = 'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *;';
    const values = [createUserDto.id, createUserDto.name];
    return this.dbService.query(sql, values);
  }
}
