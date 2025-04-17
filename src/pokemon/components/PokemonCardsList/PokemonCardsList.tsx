import { Pokemon } from "../../types";
import PokemonCard from "../PokemonCard/PokemonCard";

import "./PokemonCardsList.css";

interface PokemonCardsListProps {
  pokemons: Pokemon[];
}

const PokemonCardsList: React.FC<PokemonCardsListProps> = ({ pokemons }) => {
  return (
    <ul className="pokemons">
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
};

export default PokemonCardsList;
