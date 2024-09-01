import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateEmployeeDto {
  @IsNumber()
  @IsNotEmpty()
  id_employee: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  proof_of_attendance: string;
}
