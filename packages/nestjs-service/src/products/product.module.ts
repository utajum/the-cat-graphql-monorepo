import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Module } from '@nestjs/common';
import { CreateProductDTO } from './product.create.dto';
import { ProductDTO } from './product.dto';
import { ProductEntity } from './product.entity/product.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductEntity])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          EntityClass: ProductEntity,
          DTOClass: ProductDTO,
          CreateDTOClass: CreateProductDTO,
        },
      ],
    }),
  ],
})
export class ProductModule {}
