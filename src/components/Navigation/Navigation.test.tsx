import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'home' link", () => {
      render(<Navigation />, { wrapper: MemoryRouter });

      const homeLink = screen.getByRole("link", { name: /home/i });

      expect(homeLink).toBeVisible();
    });
  });
});
