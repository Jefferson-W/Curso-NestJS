import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService], // aqui declara que o PrismaService faz parte do módulo
  exports: [PrismaService], // quem chamar o modulo PrismaModule poderá usar o PrismaService
  imports: [],
})
export class PrismaModule {}
