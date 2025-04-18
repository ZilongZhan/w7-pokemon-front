import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AllContextsProvider from "../../../test-utils/AllContextsProvider/AllContextsProvider";
import PokemonForm from "./PokemonForm";

describe("Given the PokemonForm component", () => {
  describe("When it renders", () => {
    const user = userEvent.setup();

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

    test("Then it should show a 'Register' button", () => {
      render(<PokemonForm />, { wrapper: AllContextsProvider });

      const addPokemonButton = screen.getByRole("button", {
        name: /register/i,
      });

      expect(addPokemonButton).toBeVisible();
    });

    describe("And the user types 'Pikachu' inside the 'Name' input", () => {
      test("Then it should show 'Pikachu' inside the 'Name' input", async () => {
        const expectedValue = "Pikachu";

        render(<PokemonForm />, { wrapper: AllContextsProvider });

        const nameInput = screen.getByLabelText(/^name/i);

        await user.type(nameInput, expectedValue);

        expect(nameInput).toHaveValue(expectedValue);
      });
    });

    describe("And the user clicks the 'Captured' checkbox", () => {
      test("Then the 'Captured' checkbox should be checked", async () => {
        render(<PokemonForm />, { wrapper: AllContextsProvider });

        const capturedCheckbox = screen.getByLabelText(/^captured/i);

        await user.click(capturedCheckbox);
      });
    });
  });
});
