import { Pokemon, PokemonData } from "../types";

export interface PokemonContextStructure {
  pokemons: Pokemon[];
  renderPokemons: () => Promise<void>;
  registerPokemon: (pokemonData: PokemonData) => Promise<void>;
  removePokemon: (id: string) => Promise<void>;
}
