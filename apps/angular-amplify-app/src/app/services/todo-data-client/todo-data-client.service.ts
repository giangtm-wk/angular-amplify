import { Injectable } from '@angular/core';
import { Schema } from '@wk-amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export type Todo = {
  id: string;
  title: string;
};

@Injectable({
  providedIn: 'root'
})
export class TodoDataClientService {
  async getTodoList() {
    return await client.queries.GetTodoList();
  }

  async updateTodo(id: string, title: string) {
    return await client.mutations.UpdateTodo({ id, title });
  }
}
