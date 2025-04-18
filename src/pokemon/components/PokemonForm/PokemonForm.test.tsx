import { render, screen } from "@testing-library/react";
import PokemonForm from "./PokemonForm";
import userEvent from "@testing-library/user-event";
import AllContextsProvider from "../../../test-utils/AllContextsProvider/AllContextsProvider";

describe("Given the PokemonForm component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Pokémon info' inside a heading", () => {
      render(<PokemonForm />, { wrapper: AllContextsProvider });

      const formHeading = screen.getByRole("heading", {
        name: /pokémon info/i,
      });

      expect(formHeading).toBeVisible();
    });

    test("Then it should show a 'Name' input", () => {
      render(<PokemonForm />, { wrapper: AllContextsProvider });

      const nameInput = screen.getByLabelText(/^name/i);

      expect(nameInput).toBeVisible();
    });

    test("Then it should show a 'Add Pokémon' button", () => {
      render(<PokemonForm />, { wrapper: AllContextsProvider });

      const addPokemonButton = screen.getByRole("button", {
        name: /add pokémon/i,
      });

      expect(addPokemonButton).toBeVisible();
    });

    describe("And the user types 'Pikachu' inside the 'Name' input", () => {
      test("Then it should show 'Pikachu' inside the 'Name' input", async () => {
        const user = userEvent.setup();

        render(<PokemonForm />, { wrapper: AllContextsProvider });

        const nameInput = screen.getByLabelText(/^name/i);

        await user.type(nameInput, "Pikachu");

        expect(nameInput).toHaveValue("Pikachu");
      });
    });
  });
});
