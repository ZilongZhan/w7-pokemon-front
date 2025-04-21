import { Pokemon, PokemonData } from "../types";

export interface PokemonContextStructure {
  pokemons: Pokemon[];
  renderPokemons: () => Promise<void>;
  registerPokemon: (pokemonData: PokemonData) => Promise<void>;
  removePokemon: (id: string) => Promise<void>;
  capturePokemon: (id: string) => Promise<void>;
  releasePokemon: (id: string) => Promise<void>;
}
