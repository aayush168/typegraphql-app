import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, Column, JoinColumn, OneToMany } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { User } from './User';
import { ServiceOrders } from "./ServiceOrders"
@ObjectType()
@Entity()
export class Order extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    created_at: string

    @Field(() => String)
    @Column()
    deliver_time: string
   
    @Column()
    ownerId: number
    @ManyToOne(() => User, user => user.orders)
    @JoinColumn({ name: "ownerId" })
    user: User

    @OneToMany(() => ServiceOrders, serviceOrders => serviceOrders.orderOwner)
    orders: ServiceOrders[]
}