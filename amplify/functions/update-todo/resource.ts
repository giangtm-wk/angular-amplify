import { defineFunction } from '@aws-amplify/backend';

export const updateTodoApiFunction = defineFunction({
  logging: {
    retention: '3 days'
  }
});
