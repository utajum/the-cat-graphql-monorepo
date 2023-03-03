import {
  Column,
  ManyToOne,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import {
  Relation,
  UnPagedRelation,
  FilterableUnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql';

import { ProductEntity } from '../../products/product.entity/product.entity';

@ObjectType()
@Entity()
export class ImageEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  url: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  alt: string;

  @Field()
  @Column({ default: 1000 })
  priority: number;

  @OneToMany(() => ProductEntity, (product) => product.images)
  product!: ProductEntity[];
}
