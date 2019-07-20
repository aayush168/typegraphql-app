import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { Order } from './Order';
import { ExpertServices } from './ExpertServices'

@ObjectType()
@Entity()
export class ServiceOrders extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orderId: number
    @ManyToOne(() => Order, order => order.orders)
    @JoinColumn({ name: "orderId" })
    orderOwner: Order
    
    @Column()
    expertServiceId: number
    @ManyToOne(() => ExpertServices, expertServices => expertServices.serviceOrders)
    @JoinColumn({ name: "expertServiceId" })
    expertServiceOwner: ExpertServices
}