import { sql } from "drizzle-orm";
import { pgTable, varchar, index, serial, timestamp } from "drizzle-orm/pg-core"

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
