import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { Expert } from './Expert';
import { Service } from './Service';
import { ServiceOrders } from "./ServiceOrders"
 
@ObjectType()
@Entity()
export class ExpertServices extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rate: number

    @Column()
    expertId: number
    @ManyToOne(() => Expert, expert => expert.services)
    @JoinColumn({ name: "expertId" })
    serviceOwner: Expert
    
    @Column()
    serviceId: number
    @ManyToOne(() => Service, service => service.experts)
    @JoinColumn({ name: "serviceId" })
    expertOwner: Service

    @OneToMany(() => ServiceOrders, serviceOrders => serviceOrders.expertServiceOwner)
    serviceOrders: ServiceOrders[]
}