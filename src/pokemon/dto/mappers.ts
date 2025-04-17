import { Pokemon, PokemonDetails } from "../types";
import { PokemonDetailsDto, PokemonDto } from "./types";

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

export const mapPokemonDetailsDtoToPokemonDetails = ({
  types: typesDto,
  abilities: abilitiesDto,
}: PokemonDetailsDto): PokemonDetails => {
  const types = typesDto.map(({ type: { name } }) => name);
  const abilities = abilitiesDto.map(({ ability: { name } }) => name);

  return { types, abilities };
};
