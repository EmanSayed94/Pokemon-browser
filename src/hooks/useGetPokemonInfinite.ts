import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "../api/axiosInstance";

export function usePokemonInfinite(limit: number) {
  return useInfiniteQuery({
    queryKey: ["pokemon-infinite"],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await api.get(`/pokemon?limit=${limit}&offset=${pageParam}`);
      return res.data;
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const url = new URL(lastPage.next);
      return parseInt(url.searchParams.get("offset") || "0", 10);
    },
    initialPageParam: 0,
  });
}
