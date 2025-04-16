import { Pokemon } from "../types";

interface PokemonCardsListProps {
  pokemons: Pokemon[];
}

const PokemonCardsList: React.FC<PokemonCardsListProps> = ({ pokemons }) => {
  return (
    <ul className="pokemons">
      {pokemons.map((pokemon) => (
        <h2 key={pokemon.id}>{pokemon.name}</h2>
      ))}
    </ul>
  );
};

export default PokemonCardsList;
