import { useQuery } from "@tanstack/vue-query";

import { trpc } from "../../../trpc";

export const NOTE_QUERY_KEY = ["notes"];

export function useAll() {
  const { data } = useQuery({
    queryKey: NOTE_QUERY_KEY,
    queryFn: () => trpc.getNotes.query(),
  });

  return {
    notes: data,
  };
}
