import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { InputFileService } from './input-file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { User } from '../model/user.entity';

@Controller()
export class InputFileController {
  constructor(private readonly inputFileService: InputFileService) {}

  @Get()
  test() {
    return this.inputFileService.test();
  }

  // @Get('db')
  // testDb(){
  //   return this.inputFileService.findAll()
  // }

  @Get('test')
  testUser(): User {
    return {
      address: '',
      citizenId: '',
      course: '',
      department: '',
      dob: '',
      email: '',
      facebookLink: '',
      gender: '',
      id: undefined,
      name: 'Khoi',
      phone: '0702314026',
      studentId: 'SE173272',
    };
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, `${file.originalname}`);
        },
      }),
    }),
  )
  async uploadExcelFile(@UploadedFile() file) {
    console.log(file);
    const filePath = file.path;
    const data = await this.inputFileService.readExcelFile(filePath);
    return {
      message: 'Excel file uploaded and read successfully',
      file,
      data,
    };
  }
}
