import { useMutation, useQueryClient } from "@tanstack/vue-query";

import { NOTE_QUERY_KEY } from "../../../../entities/note/model/composables";
import { trpc } from "../../../../trpc";

export function useCreateMutation() {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: trpc.createNote.mutate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTE_QUERY_KEY });
    },
  });

  return createMutation;
}
