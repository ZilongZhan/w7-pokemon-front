import { Pokemon } from "../types";

interface PokemonCardsListProps {
  pokemons: Pokemon[];
}

const PokemonCardsList: React.FC<PokemonCardsListProps> = ({ pokemons }) => {
  return (
    <ul className="pokemons">
      {pokemons.map((pokemon) => (
        <article key={pokemon.id}>
          <h2>{pokemon.name}</h2>
        </article>
      ))}
    </ul>
  );
};

export default PokemonCardsList;
