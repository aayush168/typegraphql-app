import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, Column, Timestamp, ManyToMany, JoinTable } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { User } from './User';
import { Services } from "./Services";

@ObjectType()
@Entity()
export class Orders extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @ManyToMany(() => Services)
    @JoinTable()
    services: Services[]
    
}