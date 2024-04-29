import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  // 将 flavors 字段设置为 JSON 类型，并允许为空。
  @Column("json", { nullable: true })
  flavors: string[];
}
