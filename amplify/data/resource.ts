import { a, type ClientSchema, defineData } from '@aws-amplify/backend';

const schema = a.schema({});

export type Schema = ClientSchema<typeof schema>;
export const  data = defineData({ schema});
