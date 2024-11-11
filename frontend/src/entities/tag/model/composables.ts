import { useQuery } from "@tanstack/vue-query";

import { trpc } from "../../../trpc";

export const TAG_QUERY_KEY = ["tags"];

export function useAll() {
  const { data } = useQuery({
    queryKey: TAG_QUERY_KEY,
    queryFn: () => trpc.getTags.query(),
  });

  return {
    tags: data,
  };
}
