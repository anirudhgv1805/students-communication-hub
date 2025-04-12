import { IsEmail } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId: string;

  @Column({ nullable: false })
  username: string;

  @IsEmail()
  @Column({ type: "citext" })
  email: string;

  @Column()
  role : string;

  @Column({default:false})
  emailVerified : boolean = false;

  @Column()
  gender: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date = new Date();

  @Column({default:null})
  about: string;

  constructor(
    userId: string,
    username: string,
    password: string,
    role: string,
    email: string,
    gender: string,
    about: string
  ) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.role = role;
    this.email = email;
    this.gender = gender;
    this.about = about;
  }
}
