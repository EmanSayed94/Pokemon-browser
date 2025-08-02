import { useParams, useNavigate } from "react-router-dom";
import { usePokemonDetails } from "../../hooks/usePokemonDetails";

export default function PokemonDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, isLoading, isError } = usePokemonDetails(id || "");

  if (isLoading) return <p className="text-center py-10">Loading...</p>;

  if (isError || !data) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">Error loading Pokémon details.</p>
        <button
          onClick={() => navigate("/pagination")}
          className="px-4 py-2 bg-gray-500 text-black rounded hover:bg-gray-600"
        >
          Back
        </button>
      </div>
    );
  }

  const officialArtwork = data.sprites.other["official-artwork"].front_default;
  const formattedId = `#${String(data.id).padStart(3, "0")}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 py-10 flex justify-center text-2xl">
      <button
        onClick={() => navigate("/pagination")}
        className="absolute left-4 top-4 text-sm  font-bold bg-white text-gray-800 px-3 py-1 rounded hover:bg-gray-100"
      >
        ← Back To List
      </button>
      <div className="min-h-screen flex justify-center items-center w-full mt-12 lg:mt-4">
        <div className="bg-white shadow-lg rounded-xl w-full max-w-4xl overflow-hidden h-max mx-4 sm:mx-8">

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-center text-white relative">
            <h1 className="lg:text-3xl font-bold capitalize">{data.name}</h1>
            <p className="text-xl my-1">{formattedId}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:px-6 py-4">
            <div>
              <div className="mx-auto flex justify-center mt-4 bg-gray-100 rounded-full w-60 h-60 lg:w-80 xl:h-80 items-center">
                <img
                  src={officialArtwork}
                  alt={data.name}
                  className="w-40 h-40 xl:w-70 xl:h-70"
                />
              </div>

              <div className="flex justify-around px-6 mt-4 gap-4 text-sm lg:text-xl">
                <InfoCard label="Height" value={`${data.height / 10} m`} />
                <InfoCard label="Weight" value={`${data.weight / 10} kg`} />
              </div>
            </div>

            <div className="flex flex-col">
              <StatsSection stats={data.stats} />
              <AbilitiesSection abilities={data.abilities} />
              <BaseExperience value={data.base_experience} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- Subcomponents ---------------------- */

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow text-center w-full">
      <p className="text-gray-500">{label}</p>
      <p className="font-bold my-2">{value}</p>
    </div>
  );
}

function StatsSection({ stats }: { stats: any[] }) {
  return (
    <div className="px-6 mt-2">
      <h2 className="text-lg lg:text-xl font-bold my-4 text-start">
        Base Stats
      </h2>
      {stats.map((stat) => (
        <div key={stat.stat.name} className="mb-2">
          <div className="flex justify-between mb-1">
            <span className="text-sm xl:text-lg capitalize font-bold">
              {stat.stat.name}
            </span>
            <span className="text-sm xl:text-lg">{stat.base_stat}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-black h-2.5 rounded-full"
              style={{
                width: `${stat.base_stat > 100 ? 100 : stat.base_stat}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AbilitiesSection({
  abilities,
}: {
  abilities: { ability: { name: string }; is_hidden: boolean }[];
}) {
  return (
    <div className="px-6 mt-2">
      <h2 className="text-lg lg:text-lg font-bold my-4 text-start">
        Abilities
      </h2>
      <ul className="flex flex-wrap gap-2">
        {abilities.map(({ ability, is_hidden }) => (
          <div key={ability.name} className="flex gap-2 items-center">
            <li
              className={`${is_hidden
                ? "bg-gray-100"
                : "white border-black border-2"
                } px-2 py-2 rounded-full text-sm capitalize`}
            >
              {ability.name}
            </li>
            {is_hidden && (
              <span className="text-gray-300  text-sm">
                ( Hidden )
              </span>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

function BaseExperience({ value }: { value: number }) {
  return (
    <div className="px-6 mt-2 text-start">
      <h2 className="text-lg lg:text-lg font-bold my-4 text-start">
        Base Experience
      </h2>
      <p className="text-purple-600 font-extrabold text-sm lg:text-lg">
        {value} XP
      </p>
    </div>
  );
}
