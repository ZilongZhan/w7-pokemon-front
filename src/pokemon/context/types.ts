import { Pokemon, PokemonData } from "../types";

export interface PokemonContextStructure {
  pokemons: Pokemon[];
  renderPokemons: () => Promise<void>;
  capturePokemon: (pokemonData: PokemonData) => Promise<void>;
}
