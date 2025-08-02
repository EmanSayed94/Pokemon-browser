
const PokemonCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col  animate-pulse">
      <div className="w-full h-24 bg-gray-200 rounded my-2"></div>
      <div className="w-24 h-4 bg-gray-200 rounded my-2"></div>
      <div className="w-24 h-4 bg-gray-200 rounded my-2"></div>
    </div>
  );
}

export default PokemonCardSkeleton
