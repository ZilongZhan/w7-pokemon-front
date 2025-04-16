import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'home' link", () => {
      render(<Navigation />);

      const homeLink = screen.getByRole("link", { name: /home/i });

      expect(homeLink).toBeVisible();
    });
  });
});
