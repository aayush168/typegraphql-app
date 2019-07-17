import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Field, ID, ObjectType, Root } from "type-graphql";
import { Orders } from "./Orders";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    name(@Root() parent: User) :string {
      return `${parent.firstName} ${parent.lastName}`
    } 

    @Field()
    @Column({type: "varchar", unique: true})
    username: string;

    @Column()
    password: string;

    @OneToMany(() => Orders, orders => orders.user)
    orders: Orders[];

}