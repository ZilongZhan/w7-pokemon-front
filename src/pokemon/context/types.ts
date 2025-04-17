import { Pokemon } from "../types";

export interface PokemonContextStructure {
  pokemons: Pokemon[];
  renderPokemons: () => Promise<void>;
}
