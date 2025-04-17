export type Type =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

export interface Pokemon {
  id: string;
  pokeIndex: number;
  name: string;
  types: Type[];
  abilities: string[];
  imageUrl: string;
  imageAlt: string;
  isCaptured: boolean;
}

export type PokemonDetails = Pick<Pokemon, "abilities" | "types">;
