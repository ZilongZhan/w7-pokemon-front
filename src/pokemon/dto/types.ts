import { Pokemon } from "../types";

export type PokemonDto = Omit<Pokemon, "abilities" | "types" | "imageAlt">;
