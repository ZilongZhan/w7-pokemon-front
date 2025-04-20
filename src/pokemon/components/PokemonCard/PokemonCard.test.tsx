import { render, screen } from "@testing-library/react";
import { plusle } from "../../fixtures";
import PokemonCard from "./PokemonCard";
import PokemonContextProvider from "../../context/PokemonContextProvider";

describe("Given the PokemonCard component", () => {
  describe("When it receives a Plusle which is captured", () => {
    test("Then it should show 'Plusle' inside a heading", () => {
      render(<PokemonCard pokemon={plusle} />, {
        wrapper: PokemonContextProvider,
      });

      const plusleName = screen.getByRole("heading", { name: /plusle/i });

      expect(plusleName).toBeVisible();
    });

    test("Then it should show pixelart of Plusle", () => {
      render(<PokemonCard pokemon={plusle} />, {
        wrapper: PokemonContextProvider,
      });

      const plusleImage = screen.getByAltText(/pixelart of plusle/i);

      expect(plusleImage).toBeVisible();
    });

    test("Then the user should have this pokemon", () => {
      render(<PokemonCard pokemon={plusle} />, {
        wrapper: PokemonContextProvider,
      });

      const capturedIcon = screen.getByLabelText(/you have this pokemon/i);

      expect(capturedIcon).toBeVisible();
    });
  });
});
