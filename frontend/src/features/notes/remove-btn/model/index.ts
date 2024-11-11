import { useMutation, useQueryClient } from "@tanstack/vue-query";

import { NOTE_QUERY_KEY } from "../../../../entities/note/model/composables";
import { trpc } from "../../../../trpc";

export function useRemoveMutation() {
  const queryClient = useQueryClient();

  const removeMutation = useMutation({
    mutationFn: trpc.removeNoteById.mutate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTE_QUERY_KEY });
    },
  });

  return removeMutation;
}
