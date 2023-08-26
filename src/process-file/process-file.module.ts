import { Module } from '@nestjs/common';
import { ProcessFileController } from './process-file.controller';
import { ProcessFileService } from './process-file.service';
import { InputFileModule } from '../input-file/input-file.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../model/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [ProcessFileController],
  providers: [ProcessFileService],
  exports: [ProcessFileService],
})
export class ProcessFileModule {}
