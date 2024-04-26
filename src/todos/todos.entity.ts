import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'todos',
})
export class Todo {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  completed: boolean;
}
