import {
  Body,
  ConflictException,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { User } from '../model/user.entity';
import { ProcessFileService } from './process-file.service';

@Controller('user')
export class ProcessFileController {
  constructor(private processFileService: ProcessFileService) {}

  @Get('lists')
  async findAll() {
    return this.processFileService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('studentId') studentId: string){
  //   return this.processFileService.findByStudentId( studentId );
  // }

  @Get(':studentId')
  async getUserByStudentId(
    @Param('studentId') studentId: string,
  ): Promise<User | undefined> {
    return this.processFileService.findByStudentId(studentId);
  }

  @Post('create')
  async create(@Body() data: User): Promise<any> {
    const existingUser = await this.processFileService.findByStudentId(
      data.studentId,
    );

    if (existingUser) {
      throw new ConflictException('User with this Student Id already exists');
    }else if(existingUser === null){
      throw new ConflictException('Input of Student ID must be not null');
    }
    return this.processFileService.create(data);
  }
}
