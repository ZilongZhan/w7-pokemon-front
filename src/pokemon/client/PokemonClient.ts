import {
  mapPokemonDetailsDtoToPokemonDetails,
  mapPokemonDtoToPokemon,
  mapPokemonsDtoToPokemon,
} from "../dto/mappers";
import { PokemonDetailsDto, PokemonDto } from "../dto/types";
import { Pokemon, PokemonData, PokemonDetails } from "../types";
import { PokemonClientStructure } from "./types";

class PokemonClient implements PokemonClientStructure {
  private myPokemonsApi = `${import.meta.env.VITE_BASE_URL}/pokemon`;
  private pokeApi = "https://pokeapi.co/api/v2/pokemon";

  private async getPokemoDetails(name: string): Promise<PokemonDetails> {
    const response = await fetch(`${this.pokeApi}/${name}`);

    if (!response.ok) {
      throw new Error("Error fetching pokemon details");
    }

    const pokemonDetailsDto = (await response.json()) as PokemonDetailsDto;

    return mapPokemonDetailsDtoToPokemonDetails(pokemonDetailsDto);
  }

  public async getAllPokemons(): Promise<Pokemon[]> {
    const response = await fetch(this.myPokemonsApi);

    if (!response.ok) {
      throw new Error("Error fetching pokemons");
    }

    const { pokemons: pokemonsDto } = (await response.json()) as {
      pokemons: PokemonDto[];
    };

    const pokemonsDtoWithDetails = await Promise.all(
      pokemonsDto.map(async (pokemonDto) => {
        const pokemonDetails = await this.getPokemoDetails(pokemonDto.name);

        return {
          pokemonDto,
          pokemonDetails,
        };
      }),
    );

    return mapPokemonsDtoToPokemon(pokemonsDtoWithDetails);
  }

  public async addPokemon(pokemonData: PokemonData): Promise<Pokemon> {
    const response = await fetch(this.myPokemonsApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemonData),
    });

    if (!response.ok) {
      throw new Error("Error adding pokemon");
    }

    const pokemonDto = (await response.json()) as PokemonDto;
    const pokemonDetails = await this.getPokemoDetails(pokemonDto.name);

    return mapPokemonDtoToPokemon(pokemonDto, pokemonDetails);
  }

  public async removePokemon(id: string): Promise<Pokemon> {
    const response = await fetch(`${this.myPokemonsApi}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error removing pokemon");
    }

    const pokemonDto = (await response.json()) as PokemonDto;
    const pokemonDetails = await this.getPokemoDetails(pokemonDto.name);

    return mapPokemonDtoToPokemon(pokemonDto, pokemonDetails);
  }

  public async capturePokemon(id: string): Promise<Pokemon> {
    const response = await fetch(
      `${this.myPokemonsApi}/add-to-poke-ball/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCaptured: true }),
      },
    );

    if (!response.ok) {
      throw new Error("Error capturing pokemon");
    }

    const pokemonDto = (await response.json()) as PokemonDto;
    const pokemonDetails = await this.getPokemoDetails(pokemonDto.name);

    return mapPokemonDtoToPokemon(pokemonDto, pokemonDetails);
  }

  public async releasePokemon(id: string): Promise<Pokemon> {
    const response = await fetch(
      `${this.myPokemonsApi}/remove-from-poke-ball/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCaptured: false }),
      },
    );

    if (!response.ok) {
      throw new Error("Error releasing pokemon");
    }

    const pokemonDto = (await response.json()) as PokemonDto;
    const pokemonDetails = await this.getPokemoDetails(pokemonDto.name);

    return mapPokemonDtoToPokemon(pokemonDto, pokemonDetails);
  }
}

export default PokemonClient;
