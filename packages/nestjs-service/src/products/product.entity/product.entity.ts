import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  JoinTable,
  ManyToOne,
  ObjectType,
  JoinColumn,
} from 'typeorm';
import {
  Relation,
  UnPagedRelation,
  FilterableUnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';

import { Field, ID } from '@nestjs/graphql';
import { ImageEntity } from '../../images/image.entity/image.entity';

@Entity()
export class ProductEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column()
  sku!: string;

  @Field()
  @Column({
    type: 'enum',
    enum: ['active', 'inactive', 'out-of-stock'],
    default: 'active',
  })
  status!: string;

  @Field()
  @Column()
  price: number;

  @ManyToOne(
    (): ObjectType<ImageEntity> => ImageEntity,
    (image) => image.product,
    {
      onDelete: 'CASCADE',
      nullable: true,
    },
  )
  @JoinColumn({ name: 'image_id' })
  public images!: ImageEntity;

  @Column({ nullable: true, name: 'image_id' })
  public imageId?: string;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;
}
