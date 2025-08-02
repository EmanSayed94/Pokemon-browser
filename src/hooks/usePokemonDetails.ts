import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axiosInstance";

export function usePokemonDetails(id: string) {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: async () => {
      const res = await api.get(`/pokemon/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
}
