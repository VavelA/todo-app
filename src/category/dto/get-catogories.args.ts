import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetAuthorArgs {
  @Field()
  id: number;

  @Field()
  title: string;
}
