import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttributes {
  id: number;
  email: string;
  password: string;
}
@Table({
  tableName: 'users',
})
export class User extends Model<User, UserCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
  })
  email: string;
  @Column({
    type: DataType.STRING,
  })
  password: string;
}
