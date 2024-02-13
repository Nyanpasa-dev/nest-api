import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example: "Газиз", description: "Почтовый адрес"})
  readonly email: string;

  @ApiProperty({example: "Gaziz123123", description: "Пароль"})
  readonly password: string;
}
