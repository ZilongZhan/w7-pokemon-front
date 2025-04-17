import {
  mapPokemonDetailsDtoToPokemonDetails,
  mapPokemonsDtoToPokemon,
} from "../dto/mappers";
import { PokemonDetailsDto, PokemonDto } from "../dto/types";
import { Pokemon, PokemonDetails } from "../types";
import { PokemonClientStructure } from "./types";

class PokemonClient implements PokemonClientStructure {
  private myPokemonsAPI = `${import.meta.env.VITE_BASE_URL}/pokemon`;
  private pokeAPI = "https://pokeapi.co/api/v2/pokemon";

  private async getPokemonDtoWithDetails(
    name: string,
  ): Promise<PokemonDetails> {
    const response = await fetch(`${this.pokeAPI}/${name}`);

    if (!response.ok) {
      throw new Error("Error fetching pokemon details");
    }

    const pokemonDetailsDto = (await response.json()) as PokemonDetailsDto;

    return mapPokemonDetailsDtoToPokemonDetails(pokemonDetailsDto);
  }

  public async getAllPokemons(): Promise<Pokemon[]> {
    const response = await fetch(this.myPokemonsAPI);

    if (!response.ok) {
      throw new Error("Error fetching pokemons");
    }

    const { pokemons: pokemonsDto } = (await response.json()) as {
      pokemons: PokemonDto[];
    };

    const pokemonsDtoWithDetails = await Promise.all(
      pokemonsDto.map(async (pokemonDto) => {
        const pokemonDetails = await this.getPokemonDtoWithDetails(
          pokemonDto.name,
        );

        return {
          pokemonDto,
          pokemonDetails,
        };
      }),
    );

    return mapPokemonsDtoToPokemon(pokemonsDtoWithDetails);
  }
}

export default PokemonClient;
