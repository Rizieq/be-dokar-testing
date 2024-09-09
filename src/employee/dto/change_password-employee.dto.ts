import { IsEmail, MinLength } from 'class-validator';

export class ChangePasswordEmployeeDto {
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @MinLength(8, { message: 'New password must be at least 8 characters long' })
  new_password: string;
}