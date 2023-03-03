import {
  FilterableField,
  IDField,
  Relation,
} from '@ptc-org/nestjs-query-graphql';

import {
  ObjectType,
  GraphQLISODateTime,
  Field,
  ID,
  InputType,
} from '@nestjs/graphql';
import { ProductDTO } from 'src/products/product.dto';

@InputType()
@ObjectType('Image')
export class ImageDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  url!: string;

  @FilterableField()
  name!: string;

  @FilterableField()
  alt!: string;

  @FilterableField()
  priority!: string;
}
