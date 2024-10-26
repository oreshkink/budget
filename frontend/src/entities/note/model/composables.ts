import { useQuery } from "@tanstack/vue-query";
import { query } from "../api";
import type { Note } from "./type";


export const NOTE_QUERY_KEY = ['notes'];

export function useAll() {
  const { data } = useQuery<Note[]>({
    queryKey: NOTE_QUERY_KEY,
    queryFn: query,
  });

  return {
    notes: data,
  }
}