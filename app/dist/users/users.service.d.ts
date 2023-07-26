import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { QueryResult } from 'pg';
export declare class UsersService {
    private readonly dbService;
    constructor(dbService: DatabaseService);
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    findAllUsers(): Promise<QueryResult>;
    createUser(createUserDto: CreateUserDto): Promise<QueryResult>;
}
