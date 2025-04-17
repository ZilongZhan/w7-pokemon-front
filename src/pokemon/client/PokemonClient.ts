import { mapPokemonsDtoToPokemon } from "../dto/mappers";
import { PokemonDto } from "../dto/types";
import { Pokemon, PokemonDetails } from "../types";
import { PokemonClientStructure } from "./types";

class PokemonClient implements PokemonClientStructure {
  private myPokemonsAPI = `${import.meta.env.VITE_BASE_URL}/pokemon`;
  private pokeAPI = "https://pokeapi.co/api/v2/pokemon";

  private async getPokemonDtoWithDetails(
    pokemonDto: PokemonDto,
  ): Promise<{ pokemonDto: PokemonDto; pokemonDetails: PokemonDetails }> {
    const response = await fetch(`${this.pokeAPI}/${pokemonDto.name}`);

    if (!response.ok) {
      throw new Error("Error fetching pokemon details");
    }

    const pokemonDetails = (await response.json()) as PokemonDetails;

    return { pokemonDto, pokemonDetails };
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
      pokemonsDto.map(
        async (pokemonDto) => await this.getPokemonDtoWithDetails(pokemonDto),
      ),
    );

    return mapPokemonsDtoToPokemon(pokemonsDtoWithDetails);
  }
}

export default PokemonClient;
