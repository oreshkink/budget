import { useQuery } from "@tanstack/vue-query";
import { query } from "../api";
import type { Account } from "./type";


export const QUERY_KEY = ['accounts'];

export function useAll() {
  const { data } = useQuery<Account[]>({
    queryKey: QUERY_KEY,
    queryFn: query,
  });

  return {
    accounts: data,
  }
}