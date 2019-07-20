import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { ExpertServices } from "./ExpertServices"

@ObjectType()
@Entity()
export class Expert extends BaseEntity {
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
    @Column({ unique: true })
    phoneNumber: string;

    @Field()
    @Column({ unique: true })
    email: string;

    @Column("bool", { default: false })
    verified: boolean;

    @OneToMany(() => ExpertServices, expertServices => expertServices.serviceOwner)
    services: ExpertServices[]
    
}