import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'Admin', description: 'Название роли' })
  readonly value: string;

  @ApiProperty({ example: 'Может всё', description: 'Описание роли' })
  readonly description: string;
}
