import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDTO) {
    return await this.prisma.user.create({
      // o return faz nao precisar do await
      data,
    });
  }

  async list() {
    return await this.prisma.user.findMany();
  }

  async show(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, data: UpdatePutUserDTO) {
    return await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }
  async updatePartional(id: number, data: UpdatePatchUserDTO) {
    return await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }
}
