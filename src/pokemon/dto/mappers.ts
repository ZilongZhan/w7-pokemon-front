import { Pokemon, PokemonDetails } from "../types";
import { PokemonDto } from "./types";

export const mapPokemonDtoToPokemon = (
  pokemonDto: PokemonDto,
  { abilities, types }: PokemonDetails,
): Pokemon => {
  return {
    ...pokemonDto,
    imageAlt: `Pixelart of ${pokemonDto.name}`,
    abilities,
    types,
  };
};

export const mapPokemonsDtoToPokemon = (
  pokemonsDtoWithDetails: {
    pokemonDto: PokemonDto;
    pokemonDetails: PokemonDetails;
  }[],
): Pokemon[] => {
  return pokemonsDtoWithDetails.map(({ pokemonDto, pokemonDetails }) =>
    mapPokemonDtoToPokemon(pokemonDto, pokemonDetails),
  );
};
