import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "./App";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show 'PokéManager' inside a level 1 heading", () => {
      render(<App />, { wrapper: MemoryRouter });

      const appTitle = screen.getByRole("heading", { name: /pokémanager/i });

      expect(appTitle).toBeVisible();
    });
  });
});
