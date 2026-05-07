import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BasicReportsService {
  constructor(private prisma: PrismaService) {}

  async hello() {
    // return 'Hello from BasicReportsService';
    return this.prisma.employees.findFirst();
  }
}
