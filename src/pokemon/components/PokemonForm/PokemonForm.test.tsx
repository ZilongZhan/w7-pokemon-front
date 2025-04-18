import { render, screen } from "@testing-library/react";
import PokemonForm from "./PokemonForm";

describe("Given the PokemonForm component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Pokémon info' inside a heading", () => {
      render(<PokemonForm />);

      const formHeading = screen.getByRole("heading", {
        name: /pokémon info/i,
      });

      expect(formHeading).toBeVisible();
    });

    test("Then it should show a 'Name' input", () => {
      render(<PokemonForm />);

      const nameInput = screen.getByLabelText(/^name/i);

      expect(nameInput).toBeVisible();
    });

    test("Then it should show a 'Add Pokémon' button", () => {
      render(<PokemonForm />);

      const addPokemonButton = screen.getByRole("button", {
        name: /add pokémon/i,
      });

      expect(addPokemonButton).toBeVisible();
    });
  });
});
