import { render, screen } from "@testing-library/react";
import PokemonCardsList from "./PokemonCardsList";
import { minun, plusle } from "../../fixtures";

describe("Given the PokemonCardsList component", () => {
  describe("When it receives Plusle and Minun", () => {
    test("Then it should show 'Plusle' and 'Minun' inside a heading each", () => {
      const pokemons = [plusle, minun];

      render(<PokemonCardsList pokemons={pokemons} />);

      const plusleName = screen.getByRole("heading", { name: /plusle/i });
      const minumName = screen.getByRole("heading", { name: /minun/i });

      expect(plusleName).toBeVisible();
      expect(minumName).toBeVisible();
    });
  });
});
