import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<string | undefined> {
    try {
      const exist = await this.usersRepository.findOne({ email });

      if (exist) {
        return 'There is a user with that email already';
      }

      await this.usersRepository.save(
        this.usersRepository.create({ email, password, role }),
      );
    } catch (e) {
      return "Couldn't create account";
    }
  }
}
