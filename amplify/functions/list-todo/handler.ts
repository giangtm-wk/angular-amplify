import { Schema } from '../../data/resource';
import axios from 'axios';

export const handler: Schema["GetTodoList"]["functionHandler"] = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
};
