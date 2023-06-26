import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Client } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  private readonly model = this.prismaService.client;

  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    createUserDto.password = await bcrypt.hash(createUserDto.password, salt);

    const user = await this.model.findFirst({
      where: {
        email: createUserDto.email,
      },
    });

    if (user) throw new ConflictException('User already exists');

    return this.model.create({
      data: createUserDto,
    });
  }

  findAll(): Promise<Client[]> {
    return this.model.findMany();
  }

  findOne(id: number): Promise<Client> {
    return this.model.findFirst({
      where: {
        id,
      },
    });
  }

  findOneByEmail(email: string): Promise<Client> {
    return this.model.findFirst({
      where: {
        email,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.model.delete({
      where: {
        id,
      },
    });
  }
}
