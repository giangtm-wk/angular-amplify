import { defineFunction } from '@aws-amplify/backend';

export const getTodoListApiFunction = defineFunction({
  logging: {
    retention: '3 days'
  }
});
