import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userid: string;

  @Column({ nullable: false })
  username: string;

  @Column()
  batch: number;

  @Column()
  department: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  section: string;

  constructor(
    userid: string,
    username: string,
    batch: number,
    department: string,
    section: string,
    password: string,
    role: string
  ) {
    this.userid = userid;
    this.username = username;
    this.password = password;
    this.batch = batch;
    this.department = department;
    this.role = role;
    this.section = section;
  }
}
