import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 10)
  title: string;

  @IsString({ message: 'description must be a string' })
  @IsOptional()
  description: string;

  @IsInt({ message: 'priority must be a number' })
  @IsPositive()
  priority: number;

  @IsArray({ message: 'tags must be an array' })
  @IsEnum(TaskTag, { each: true, message: 'Invalid tag value' })
  @IsOptional()
  tags: string[];
}
