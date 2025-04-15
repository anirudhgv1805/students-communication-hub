// src/dtos/RegisterUserDto.ts
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  Matches,
  IsEnum,
} from "class-validator";

enum Role {
  USER = "user",
  ADMIN = "admin",
}

enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

export class RegisterUserDto {
  @IsNotEmpty({ message: "UserID is required" })
  userId: string;

  @IsNotEmpty({ message: "Username is required" })
  username: string;

  @IsEmail({}, { message: "Invalid email format" })
  email: string;

  @MinLength(8, { message: "Password must be at least 8 characters long" })
  @Matches(/^(?=.*[A-Z])(?=.*\d).+$/, {
    message: "Password must contain at least 1 uppercase letter and 1 number",
  })
  password: string;

  @IsEnum(Role, { message: 'Role must be either "user" or "admin"' })
  role: Role;

  @IsEnum(Gender, { message: 'Gender must be "male", "female", or "other"' })
  gender: Gender;

  @IsNotEmpty({ message: "About section cannot be empty" })
  about: string;

  constructor(partial : Partial<RegisterUserDto>){
    Object.assign(this,partial);
  }
}
