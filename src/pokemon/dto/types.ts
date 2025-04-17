import { Pokemon, Type } from "../types";

export type PokemonDto = Omit<Pokemon, "abilities" | "types" | "imageAlt">;

export interface PokemonDetailsDto {
  types: { type: { name: Type } }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
}
