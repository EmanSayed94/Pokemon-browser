import PokemonCard from "../PokemonCard";
interface PokemonListProps {
  data: { name: string; url: string }[]; // or PokemonCardProps[] if structure matches exactly
}
const PokemonList = ({ data }: PokemonListProps) => {
  return (
    <>
      {
        data.map((pokemon: { name: string; url: string }) => {
          const id = pokemon.url.split("/").filter(Boolean).pop() ?? "";
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

          return (
            <div key={pokemon.name}>
              <PokemonCard name={pokemon.name} image={image} id={id} />
            </div>
          );
        })
      }
    </>

  )
}

export default PokemonList;