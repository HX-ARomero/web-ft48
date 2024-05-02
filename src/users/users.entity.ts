import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: 'users',
})
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  createdAt: string;

}