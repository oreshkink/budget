import { useQuery } from "@tanstack/vue-query";
import { query } from "../api";

export const NOTE_QUERY_KEY = ['notes'];

export function useAll() {
  const { data } = useQuery({
    queryKey: NOTE_QUERY_KEY,
    queryFn: query,
  });

  return {
    notes: data,
  }
}