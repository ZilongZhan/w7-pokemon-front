import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'PokéManager' inside a level 1 heading", () => {
      render(<Header />);

      const appTitle = screen.getByRole("heading", { name: /pokémanager/i });

      expect(appTitle).toBeVisible();
    });
  });
});
