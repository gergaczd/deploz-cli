import { Schema } from 'conf';

export type RepositoryDescriptor = {
  path: string;
  type: string;
};

export const schema = {
  repositories: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        path: { type: 'string' },
        type: { type: 'string', enum: ['service', 'client'] }
      }
    }
  }
} as Schema<any>;
