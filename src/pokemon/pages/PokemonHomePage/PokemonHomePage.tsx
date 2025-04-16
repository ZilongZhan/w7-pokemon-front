import { useState } from "react";
import { Pokemon } from "../../types";

const PokemonHomePage: React.FC = () => {
  const [pokemons] = useState<Pokemon[]>([]);

  return (
    <>
      <h2>Home</h2>
      <span>Total Pokémon: {pokemons.length}</span>
    </>
  );
};

export default PokemonHomePage;
