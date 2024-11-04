import { trpc } from "../../../trpc";

export async function query() {
  return trpc.getNotes.query();
}