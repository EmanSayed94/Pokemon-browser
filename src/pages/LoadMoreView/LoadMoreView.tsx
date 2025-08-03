import { usePokemonInfinite } from "../../hooks/useGetPokemonInfinite";
import PokemonListSkeleton from "../../components/skeletons/PokemonListSkeleton";
import PokemonList from "../../components/PokemonList";

export default function LoadMoreView() {
  const limit = 10;
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    usePokemonInfinite(limit);

  if (isLoading) {
    return <PokemonListSkeleton limit={limit} />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.pages.flatMap((page) => <PokemonList data={page.results} />)}
      </div>

      {isFetchingNextPage && (
        <div className="flex justify-center mt-4 items-center gap-4">
          <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p>Loading more Pokémon...</p>
        </div>
      )}

      {!isFetchingNextPage && hasNextPage && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              fetchNextPage();
            }}
            className={`flex gap-2 items-center border-2 px-4 py-2 rounded transition `}
          >
            {/* <div className={`w-6 h-6 border-4 rounded-full`}
            ></div> */}
            Load More

          </button>

        </div>
      )}

      <p className="mt-4">
        Showing{" "}
        {data?.pages?.reduce((acc, page) => acc + page.results.length, 0) ?? 0} Pokémon
      </p>
    </div>
  );
}
