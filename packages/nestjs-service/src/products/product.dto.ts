import {
  ObjectType,
  GraphQLISODateTime,
  Field,
  ID,
  InputType,
} from '@nestjs/graphql';
import { ImageDTO } from 'src/images/image.dto';

import {
  FilterableField,
  IDField,
  Relation,
  UnPagedRelation,
  FilterableUnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';

@InputType()
@UnPagedRelation('images', () => ImageDTO, {
  disableRemove: false,
  nullable: true,
})
@ObjectType('Product')
export class ProductDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  name!: string;

  @FilterableField()
  description!: string;

  @FilterableField()
  sku!: string;

  @FilterableField()
  status!: string;

  @FilterableField()
  price!: number;
}
