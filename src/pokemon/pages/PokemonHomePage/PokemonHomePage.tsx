import { useEffect } from "react";
import PokemonCardsList from "../../components/PokemonCardsList/PokemonCardsList";
import usePokemons from "../../hooks/usePokemons";

const PokemonHomePage: React.FC = () => {
  const { pokemons, renderPokemons } = usePokemons();

  useEffect(() => {
    renderPokemons();
  }, [renderPokemons]);

  return (
    <>
      <h2>Home</h2>
      <span>Total Pokémon: {pokemons.length}</span>
      <PokemonCardsList pokemons={pokemons} />
    </>
  );
};

export default PokemonHomePage;
