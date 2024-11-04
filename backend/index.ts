import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './router.ts';

createHTTPServer({
  router: appRouter,
}).listen(4000);