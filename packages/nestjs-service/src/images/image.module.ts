import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Module } from '@nestjs/common';
import { ImageCreateDTO } from './image.create.dto';
import { ImageDTO } from './image.dto';
import { ImageEntity } from './image.entity/image.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([ImageEntity])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          EntityClass: ImageEntity,
          DTOClass: ImageDTO,
          CreateDTOClass: ImageCreateDTO,
        },
      ],
    }),
  ],
})
export class ImageModule {}
