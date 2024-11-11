import type { Config } from 'drizzle-kit';

export default {
  schema: 'db/schema.ts',
  out: 'drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://postgres:postgres@localhost:3000/postgres',
  },
};
