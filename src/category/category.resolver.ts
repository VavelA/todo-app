import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { GetAuthorArgs } from './dto/get-catogories.args';
import { Category } from './models/category.model';

@Resolver((of) => Category)
export class CategoryResolver {
  constructor() {}

  @Query((returns) => [Category], { name: 'categories' })
  async author(@Args() args: GetAuthorArgs) {
    return [];
  }
}
