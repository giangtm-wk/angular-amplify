import { a } from '@aws-amplify/backend';
import { getTodoListApiFunction } from '../../functions/list-todo/resource';
import { updateTodoApiFunction } from '../../functions/update-todo/resource';

export const todoSchema = {
  TodoResponse: a.customType({
    id: a.string(),
    title: a.string(),
  }),
  GetTodoList: a
    .query()
    .returns(a.json())
    .authorization((allow) => [allow.authenticated()])
    .handler(a.handler.function(getTodoListApiFunction)),
  UpdateTodo: a
    .mutation()
    .arguments({
      id: a.string(),
      title: a.string(),
    })
    .returns(a.json())
    .authorization((allow) => [allow.authenticated()])
    .handler(a.handler.function(updateTodoApiFunction))
};
