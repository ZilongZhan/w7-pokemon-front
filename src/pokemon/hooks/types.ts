import { PokemonData } from "../types";

export interface UsePokemonForm {
  pokemonData: PokemonData;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isValidData: boolean;
}
