import { useParams } from "react-router";
import PokemonDetailsCard from "../../components/PokemonDetailsCard/PokemonDetailsCard";
import usePokemons from "../../hooks/usePokemons";

const PokemonDetailsPage: React.FC = () => {
  const { pokemons } = usePokemons();
  const { name } = useParams();

  const pokemon = pokemons.find((pokemon) => pokemon.name === name);

  if (!pokemon) {
    return <p>Pokémon not found</p>;
  }

  return (
    <>
      <h2>Detailed Info</h2>
      <PokemonDetailsCard pokemon={pokemon} />
    </>
  );
};

export default PokemonDetailsPage;
