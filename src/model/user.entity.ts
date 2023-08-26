import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('user')
export class User {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  name: string;
  @Column()
  department: string;
  @Column()
  gender: string;
  @Column()
  studentId: string;
  @Column()
  course: string;
  @Column()
  email: string;
  @Column()
  dob: string;
  @Column()
  phone: string;
  @Column()
  citizenId: string;
  @Column()
  address: string;
  @Column()
  facebookLink: string;
}
