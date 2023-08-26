import { Injectable } from '@nestjs/common';
import { User } from '../model/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, ObjectId } from 'typeorm';

@Injectable()
export class ProcessFileService {
  constructor(@InjectRepository(User) private repo: MongoRepository<any>) {}
  async processData(data: User[]): Promise<any> {
    try {
      for (let i = 1; i < data.length; i++) {
        const row = data[i];
        const obj: User = {
          id: row[0],
          name: row[1], //name
          department: row[2], //department
          gender: row[3], //gender
          studentId: row[4], //studentId
          course: row[5], //classof
          email: row[6], //email
          dob: row[7], //dob
          phone: row[8], //phone
          citizenId: row[9], //citizenId
          address: row[10], //address
          facebookLink: row[11], //facebooklink
        };
        await this.repo.insert(obj);
      }
    } catch (error) {
      console.error('Error processing data:', error);
      throw error;
    }
  }

  async create(data: User): Promise<User | any> {
    return this.repo.save(data);
  }

  async findAll() {
    return this.repo.find();
  }

  async findByStudentId(studentId: string): Promise<User | undefined> {
    // @ts-ignore
    return this.repo.findOne({ studentId });
  }
}
