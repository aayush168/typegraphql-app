import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { Experts } from './Experts';

@ObjectType()
@Entity()
export class Services extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    price: number

    @ManyToOne(() => Experts, experts => experts.services)
    experts: Experts;
    
}