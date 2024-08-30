import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  token_auth: string;

  @IsNumber()
  @IsNotEmpty()
  id_employee: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  proof_of_attendace: string;
}
