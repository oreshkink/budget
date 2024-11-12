import { sql } from "drizzle-orm";
import { pgTable, varchar, index, serial, timestamp, integer, primaryKey } from "drizzle-orm/pg-core"

export const notesTable = pgTable(
  "note",
  {
    id: serial().primaryKey().notNull(),
    title: varchar(),
    createdAt: timestamp("created_at", { mode: 'string' }).default(sql`now()`),
  },
  (table) => {
    return {
      ixNoteId: index("ix_note_id").using("btree", table.id.asc().nullsLast()),
    }
  }
);

export const tagsTable = pgTable(
  "tag",
  {
    id: serial().primaryKey().notNull(),
    title: varchar(),
  },
);

export const notesToTagsTable = pgTable(
  'notes_to_tags',
  {
    noteId: integer('note_id')
      .notNull()
      .references(() => notesTable.id),
    tagId: integer('tag_id')
      .notNull()
      .references(() => tagsTable.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.noteId, t.tagId] }),
  }),
);
