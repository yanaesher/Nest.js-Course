import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateActorDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(56)
  name: string;
}
