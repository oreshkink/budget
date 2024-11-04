import { trpc } from "../../../../trpc";

export async function remove(id: number) {
  return trpc.removeNoteById.mutate(id);
}