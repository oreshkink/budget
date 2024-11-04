import { trpc } from "../../../../trpc";

export async function create(params: { title: string }) {
  return trpc.createNote.mutate(params);
}