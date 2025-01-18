import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { notesTable, tagsTable, notesToTagsTable } from './schema';
import { eq } from 'drizzle-orm';

type Note = typeof notesTable.$inferSelect;
type Tag = typeof tagsTable.$inferSelect;
type NotesToTags = typeof notesToTagsTable.$inferSelect;
type NoteWithTag = Note & {
  tags: Tag[] | undefined;
};

const db = drizzle(process.env.DATABASE_URL!);

export async function getNotesWithTags() {
  const notes = await db.select().from(notesTable).execute();
  const rows = await db.select()
    .from(notesToTagsTable)
    .leftJoin(tagsTable, eq(notesToTagsTable.tagId, tagsTable.id))
    .execute();

  const tagsByNoteId = new Map<Note['id'], Tag[]>();

  rows.forEach((row) => {
    if (!row.tag) {
      return;
    }

    const noteId = row.notes_to_tags.noteId;

    if (!tagsByNoteId.has(noteId)) {
      tagsByNoteId.set(noteId, []);
    }

    tagsByNoteId.get(noteId)?.push(row.tag);
  });

  return notes.reduce<NoteWithTag[]>((acc, note) => {
    acc.push({
      ...note,
      tags: tagsByNoteId.get(note.id)
    });

    return acc;
  }, []);
}

export function removeNoteById(id: number) {
  return db.delete(notesTable).where(eq(notesTable.id, id));
}

export async function createNoteWithTags(params: { title: string, tagsIds: Tag["id"][] }) {
  const { title, tagsIds } = params;

  const notes = await db.insert(notesTable).values({
    title,
    createdAt: new Date().toISOString(),
  }).returning();

  const notesToTagsRelationValues: NotesToTags[] = [];

  notes.forEach((note) => {
    if (tagsIds.length > 0) {
      tagsIds.forEach((tagId) => {
        notesToTagsRelationValues.push({ noteId: note.id, tagId });
      });
    }
  });

  if (notesToTagsRelationValues.length > 0) {
    await db.insert(notesToTagsTable).values(notesToTagsRelationValues);
  }

  return;
}

export function getTags() {
  return db.select().from(tagsTable);
}
