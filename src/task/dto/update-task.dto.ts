import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @Length(2, 10)
  @IsNotEmpty()
  title: string;

  @IsBoolean({ message: 'isCompleted must be boolean' })
  isCompleted: boolean;
}
