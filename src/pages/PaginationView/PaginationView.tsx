import { useState } from "react";
import { usePokemonList } from "../../hooks/useGetPokemonList";
import PokemonCardSkeleton from "../../components/skeletons/PokemonCardSkeleton";
import PokemonCard from "../../components/PokemonCard";
import PokemonListSkeleton from "../../components/skeletons/PokemonListSkeleton";
import AppPagination from "../../components/Pagination";



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
        {data.results.map((pokemon: { name: string; url: string }) => {
          const id = pokemon.url.split("/").filter(Boolean).pop() ?? "";
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

          return (
            <div key={pokemon.name}>
              <PokemonCard name={pokemon.name} image={image} id={id} />
            </div>
          );
        })}

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
