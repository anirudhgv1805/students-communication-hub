import { IsEmail } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userid: string;

  @Column({ nullable: false })
  username: string;

  @Column({ type: "citext" })
  email: string;

  @Column()
  batch: number;

  @Column()
  department: string;

  @Column()
  gender: string;

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
    role: string,
    email: string,
    gender: string
  ) {
    this.userid = userid;
    this.username = username;
    this.password = password;
    this.batch = batch;
    this.department = department;
    this.role = role;
    this.section = section;
    this.email = email;
    this.gender = gender;
  }
}
