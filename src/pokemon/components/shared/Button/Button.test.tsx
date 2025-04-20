import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given the Button component", () => {
  describe("When it receives 'Hello World'", () => {
    test("Then it should show a 'Hello World' button", () => {
      render(<Button>{"Hello World"}</Button>);

      const buttonElement = screen.getByRole("button", {
        name: /hello world/i,
      });

      expect(buttonElement).toBeVisible();
    });

    describe("When ti receives an action and the user clicks the button", () => {
      test("Then it should call the action", async () => {
        const action = vitest.fn();
        const user = userEvent.setup();

        render(<Button action={action}>{"Hello World"}</Button>);

        const buttonElement = screen.getByRole("button", {
          name: /hello world/i,
        });

        await user.click(buttonElement);

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
