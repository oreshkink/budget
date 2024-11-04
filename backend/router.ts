import { initTRPC } from '@trpc/server';
import * as db from './db';
import { z } from 'zod';

export const t = initTRPC.create();
export const appRouter = t.router({
  getNotes: t.procedure.query(() => {
    return db.getNotes();
  }),
  removeNoteById: t.procedure
    .input(z.number())
    .mutation((opts) => {
      return db.removeNoteById(opts.input);
  }),
  createNote: t.procedure
    .input(z.object({
      title: z.string()
    }))
    .mutation((opts) => {
      return db.createNote(opts.input);
    })
});

export type AppRouter = typeof appRouter;