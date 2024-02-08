import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  breed: string;
}

export class ListAllEntities {
  limit: number;
}

export class UpdateCatDto {
  name: string;
  age: number;
  breed: string;
}
