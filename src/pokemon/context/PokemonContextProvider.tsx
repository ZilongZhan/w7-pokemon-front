import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import PokemonContext from "./PokemonContext";
import { Pokemon, PokemonData } from "../types";
import { PokemonContextStructure } from "./types";
import PokemonClient from "../client/PokemonClient";

const PokemonContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const pokemonClient = useMemo(() => new PokemonClient(), []);

  const renderPokemons = useCallback(async (): Promise<void> => {
    const apiPokemons = await pokemonClient.getAllPokemons();

    setPokemons(apiPokemons);
  }, [pokemonClient]);

  const registerPokemon = async (pokemonData: PokemonData): Promise<void> => {
    const pokemon = await pokemonClient.addPokemon(pokemonData);

    setPokemons((pokemons) => [...pokemons, pokemon]);
  };

  const removePokemon = async (id: string): Promise<void> => {
    const apiPokemon = await pokemonClient.removePokemon(id);

    setPokemons((pokemons) =>
      pokemons.filter((pokemon) => pokemon.id !== apiPokemon.id),
    );
  };

  const capturePokemon = async (id: string): Promise<void> => {
    const apiPokemon = await pokemonClient.capturePokemon(id);

    setPokemons((pokemons) =>
      pokemons.map((pokemon) =>
        pokemon.id === apiPokemon.id ? apiPokemon : pokemon,
      ),
    );
  };

  const releasePokemon = async (id: string): Promise<void> => {
    const apiPokemon = await pokemonClient.releasePokemon(id);

    setPokemons((pokemons) =>
      pokemons.map((pokemon) =>
        pokemon.id === apiPokemon.id ? apiPokemon : pokemon,
      ),
    );
  };

  const PokemonContextValue: PokemonContextStructure = {
    pokemons,
    renderPokemons,
    registerPokemon,
    removePokemon,
    capturePokemon,
    releasePokemon,
  };

  return (
    <PokemonContext.Provider value={PokemonContextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
