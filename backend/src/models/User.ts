import { IsEmail } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userid: string;

  @Column({ nullable: false })
  username: string;

  @IsEmail()
  @Column({ type: "citext" })
  email: string;

  @Column()
  batch: number;

  @Column()
  department: string;

  @Column()
  role : string;

  @Column()
  emailVerified : boolean = false;

  @Column()
  gender: string;

  @Column()
  password: string;

  @Column()
  section: string;

  @CreateDateColumn()
  createdAt: Date = new Date();

  @Column()
  about: string;

  constructor(
    userid: string,
    username: string,
    batch: number,
    department: string,
    section: string,
    password: string,
    role: string,
    email: string,
    gender: string,
    about: string
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
    this.about = about;
  }
}
