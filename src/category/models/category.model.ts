import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Todo } from './todo.model';

@ObjectType()
export class Category {
  @Field((type) => Int)
  id: number;

  @Field((type) => [Todo])
  todos: Todo[];
}
