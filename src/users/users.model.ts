import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: '1', description: "Уникальный идентификатор", required: false})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 'Gaziz@mail.ru', description: "Почтовый адрес"})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({example: 'Gaziz123', description: "Пароль"})
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({example: 'true', description: "Забанен или нет", required: false})
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: string;

  @ApiProperty({example: 'Газует', description: "Причина бана", required: false})
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;
}
