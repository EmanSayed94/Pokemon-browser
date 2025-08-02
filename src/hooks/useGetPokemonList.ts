import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axiosInstance";

export function usePokemonList(limit: number, page: number) {
    const offset = (page - 1) * limit;
    return useQuery({
        queryKey: ["pokemon", page],
        queryFn: async () => {
            const res = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
            return res.data;
        },
    });
}
