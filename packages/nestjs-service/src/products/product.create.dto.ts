import {
  IsBoolean,
  IsString,
  IsNumber,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { ImageDTO } from 'src/images/image.dto';
import { ImageCreateDTO } from 'src/images/image.create.dto';
import {
  FilterableField,
  IDField,
  FilterableRelation,
} from '@ptc-org/nestjs-query-graphql';

import {
  Relation,
  UnPagedRelation,
  FilterableUnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';

@InputType()
@ObjectType('CreateProduct')
@UnPagedRelation('images', () => ImageDTO, {
  disableRemove: true,
  nullable: true,
})
export class CreateProductDTO {
  @IsString()
  @Field()
  name!: string;

  @IsString()
  @Field()
  description!: string;

  @IsString()
  @Field()
  sku!: string;

  @IsString()
  @Field()
  status!: string;

  @IsNumber()
  @Field()
  price!: number;
}
