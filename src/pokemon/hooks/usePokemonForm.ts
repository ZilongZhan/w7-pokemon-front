import { useState } from "react";
import { PokemonData } from "../types";
import { UsePokemonForm } from "./types";

const usePokemonForm = (): UsePokemonForm => {
  const initialPokemonData = {
    name: "",
    pokeIndex: 0,
    imageUrl: "",
    isCaptured: false,
  };

  const [pokemonData, setPokemonData] =
    useState<PokemonData>(initialPokemonData);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const newPokemonData: PokemonData = {
      ...pokemonData,
      [event.target.id]: value,
    };

    setPokemonData(newPokemonData);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const isValidData =
    pokemonData.name !== "" &&
    pokemonData.imageUrl !== "" &&
    pokemonData.pokeIndex !== 0;

  return {
    pokemonData,
    handleOnChange,
    handleOnSubmit,
    isValidData,
  };
};

export default usePokemonForm;
