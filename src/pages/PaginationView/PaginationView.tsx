import { useState } from "react";
import { usePokemonList } from "../../hooks/useGetPokemonList";
import PokemonListSkeleton from "../../components/skeletons/PokemonListSkeleton";
import AppPagination from "../../components/Pagination";
import PokemonList from "../../components/PokemonList";



export default function PaginationView() {
  const [page, setPage] = useState(1);

  const limit = 20;

  const { data, isLoading, isError, refetch, isFetching } = usePokemonList(limit, page);

  if (isLoading) {
    return (
      <PokemonListSkeleton limit={limit} />
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center">
        <p className="mb-2 text-red-500">Error loading Pokémon data.</p>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      {isFetching && (
        <div className="flex justify-center mb-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <PokemonList data={data.results} />
      </div>
      <div className="flex justify-center mt-4 space-x-2  bottom-4">

        <AppPagination
          total={data.count}
          pageSize={limit}
          current={page}
          onChange={(page) => setPage(page)}
          item={'pokemon'}
        />
      </div>

    </div>
  );
}
