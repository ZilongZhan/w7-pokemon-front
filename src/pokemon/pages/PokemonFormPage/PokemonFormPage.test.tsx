import { render, screen } from "@testing-library/react";
import PokemonFormPage from "./PokemonFormPage";
import AllContextsProvider from "../../../test-utils/AllContextsProvider/AllContextsProvider";

describe("Given the PokemonFormPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Add Pokémon' inside a heading", () => {
      render(<PokemonFormPage />, { wrapper: AllContextsProvider });

      const pageTitle = screen.getByRole("heading", { name: /add pokémon/i });

      expect(pageTitle).toBeVisible();
    });

    test("Then it should show 'Pokémon info' inside a heading", () => {
      render(<PokemonFormPage />, { wrapper: AllContextsProvider });

      const formTitle = screen.getByRole("heading", { name: /pokémon info/i });

      expect(formTitle).toBeVisible();
    });
  });
});
