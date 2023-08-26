import { Module } from '@nestjs/common';
import { InputFileController } from './input-file.controller';
import { InputFileService } from './input-file.service';
import { ProcessFileModule } from '../process-file/process-file.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../model/user.entity';

@Module({
  controllers: [InputFileController],
  providers: [InputFileService],
  imports: [ProcessFileModule],
})
export class InputFileModule {}
