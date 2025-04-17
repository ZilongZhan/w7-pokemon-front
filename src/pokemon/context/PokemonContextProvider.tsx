import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import PokemonContext from "./PokemonContext";
import { Pokemon } from "../types";
import { PokemonContextStructure } from "./types";
import PokemonClient from "../client/PokemonClient";

const PokemonContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const pokemonClient = useMemo(() => new PokemonClient(), []);

  const renderPokemons = useCallback(async (): Promise<void> => {
    const apiPokemons = await pokemonClient.getAllPokemons();

    setPokemons(apiPokemons);
  }, [pokemonClient]);

  const PokemonContextValue: PokemonContextStructure = {
    pokemons,
    renderPokemons,
  };

  return (
    <PokemonContext.Provider value={PokemonContextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
