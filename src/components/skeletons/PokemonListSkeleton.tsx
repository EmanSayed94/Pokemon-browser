import PokemonCardSkeleton from './PokemonCardSkeleton'

const PokemonListSkeleton = ({ limit }: { limit: number }) => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Array.from({ length: limit }).map((_, idx) => (
                    <PokemonCardSkeleton key={idx} />
                ))}
            </div>
        </div>
    )
}

export default PokemonListSkeleton
