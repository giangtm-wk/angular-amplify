import { Schema } from '../../data/resource';
import axios from 'axios';

export const handler: Schema["UpdateTodo"]["functionHandler"] = async (event) => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${event.arguments.id}`, {
    id: event.arguments.id,
    title: event.arguments.title
  });
  return response.data;
};
