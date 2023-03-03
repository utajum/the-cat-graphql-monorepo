import {
  IsBoolean,
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import {
  FilterableField,
  IDField,
  Relation,
} from '@ptc-org/nestjs-query-graphql';
import { Field, InputType } from '@nestjs/graphql';
import { ProductDTO } from 'src/products/product.dto';

@InputType('CreateImage')
export class ImageCreateDTO {
  @IsUrl()
  @IsNotEmpty()
  @Field()
  url!: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  name!: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  alt!: string;

  @IsNumber()
  @IsNotEmpty()
  @Field()
  priority!: number;
}
