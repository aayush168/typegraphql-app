import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { Services } from "./Services"

@ObjectType()
@Entity()
export class Experts extends BaseEntity {
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
    @Column()
    phoneNumber: string;

    @Field()
    @Column()
    email: string;

    @Column("bool", { default: false })
    verified: boolean;
    
    @OneToMany(() => Services, services => services.experts)
    services: Services[];
}