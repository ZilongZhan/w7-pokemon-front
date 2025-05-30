import { Pokemon, PokemonData } from "../types";

export interface PokemonClientStructure {
  getAllPokemons: () => Promise<Pokemon[]>;
  addPokemon: (pokemonData: PokemonData) => Promise<Pokemon>;
  removePokemon: (id: string) => Promise<Pokemon>;
  capturePokemon: (id: string) => Promise<Pokemon>;
  releasePokemon: (id: string) => Promise<Pokemon>;
}
