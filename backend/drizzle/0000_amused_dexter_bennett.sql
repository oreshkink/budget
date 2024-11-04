-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "alembic_version" (
	"version_num" varchar(32) PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "note" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"created_at" timestamp
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "ix_note_id" ON "note" USING btree ("id");
*/