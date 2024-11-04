import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { notesTable } from './schema';
import { eq } from 'drizzle-orm';

const db = drizzle(process.env.DATABASE_URL!);

export function getNotes() {
  return db.select().from(notesTable);
}

export function removeNoteById(id: number) {
  return db.delete(notesTable).where(eq(notesTable.id, id));
}

export function createNote(params: { title: string }) {
  return db.insert(notesTable).values({
    title: params.title,
    createdAt: new Date().toISOString(),
  });
}