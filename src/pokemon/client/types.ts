import { Pokemon } from "../types";

export interface PokemonClientStructure {
  getAllPokemons: () => Promise<Pokemon[]>;
}
