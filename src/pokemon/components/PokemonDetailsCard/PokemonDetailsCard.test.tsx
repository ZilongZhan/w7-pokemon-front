import { render, screen } from "@testing-library/react";
import { minun, plusle } from "../../fixtures";
import PokemonDetailsCard from "./PokemonDetailsCard";
import AllContextsProvider from "../../../test-utils/AllContextsProvider/AllContextsProvider";

describe("Given the PokemonDetailsCard component", () => {
  describe("When it receives Plusle which is captured", () => {
    test("Then it should show 'Plusle' inside a heading", () => {
      render(<PokemonDetailsCard pokemon={plusle} />, {
        wrapper: AllContextsProvider,
      });

      const plusleName = screen.getByRole("heading", { name: /plusle/i });

      expect(plusleName).toBeVisible();
    });

    test("Then it should show pixelart of Plusle", () => {
      render(<PokemonDetailsCard pokemon={plusle} />, {
        wrapper: AllContextsProvider,
      });

      const plusleImage = screen.getByAltText(/pixelart of plusle/i);

      expect(plusleImage).toBeVisible();
    });

    test("Then the user should have this pokemon", () => {
      render(<PokemonDetailsCard pokemon={plusle} />, {
        wrapper: AllContextsProvider,
      });

      const capturedIcon = screen.getByLabelText(/you have this pokemon/i);

      expect(capturedIcon).toBeVisible();
    });

    test("Then it should show a 'Remove Plusle' button", () => {
      render(<PokemonDetailsCard pokemon={plusle} />, {
        wrapper: AllContextsProvider,
      });

      const removeButton = screen.getByRole("button", {
        name: /remove plusle/i,
      });

      expect(removeButton).toBeVisible();
    });

    test("Then it should show a 'Release' button and not a 'Capture' button", () => {
      render(<PokemonDetailsCard pokemon={plusle} />, {
        wrapper: AllContextsProvider,
      });

      const releaseButton = screen.getByRole("button", { name: /release/i });
      const captureButton = screen.queryByRole("button", { name: /capture/i });

      expect(releaseButton).toBeVisible();
      expect(captureButton).toBeNull();
    });
  });

  describe("When it receives Minun which is not captured", () => {
    test("Then it should show a 'Capture' button and not a 'Release' button", () => {
      render(<PokemonDetailsCard pokemon={minun} />, {
        wrapper: AllContextsProvider,
      });

      screen.debug();

      const releaseButton = screen.queryByRole("button", {
        name: /release/i,
      });
      const captureButton = screen.getByRole("button", {
        name: /capture/i,
      });

      expect(releaseButton).toBeNull();
      expect(captureButton).toBeVisible();
    });
  });
});
