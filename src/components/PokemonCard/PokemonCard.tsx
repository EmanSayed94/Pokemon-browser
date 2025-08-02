import { Link } from "react-router-dom";

interface PokemonCardProps {
  name: string;
  image: string;
  id: string;

}

export default function PokemonCard({ name, image, id }: PokemonCardProps) {
  const formattedId = id ? `#${String(id).padStart(3, "0")}` : '';

  return (
    <Link
      to={`/pokemon/${name}`}
      className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center"
    >
      <div className="bg-gray-200 rounded mb-2 w-full flex justify-center ">

        <img
          src={image}
          alt={name}
          className="w-40 h-40 object-contain mb-2"
          loading="lazy"
        />
      </div>
      <p className="capitalize font-semibold text-gray-800 my-4">{name}</p>
      <p className="text-gray-400 ">{id ? formattedId : ""}</p>
    </Link>
  );
}
