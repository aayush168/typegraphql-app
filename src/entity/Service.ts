import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { ExpertServices } from './ExpertServices';

@ObjectType()
@Entity()
export class Service extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @OneToMany(() => ExpertServices, expertServices => expertServices.expertOwner)
    experts: ExpertServices[]
    
}