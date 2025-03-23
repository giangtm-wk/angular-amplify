import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { todoSchema } from './schemas/toto-schema';

/**
 * Define and configure your data resource
 * @see https://docs.amplify.aws/angular/build-a-backend/data/custom-business-logic/
 */
const schema = a.schema({
  ...todoSchema
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  }
});
