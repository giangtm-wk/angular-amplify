import { getTodoListApiFunction } from './list-todo/resource';
import { updateTodoApiFunction } from './update-todo/resource';

/**
 * Define and configure your function
 * @see https://docs.amplify.aws/angular/build-a-backend/functions/set-up-function/
 */
export const functions = {
  getTodoListApiFunction,
  updateTodoApiFunction
};
