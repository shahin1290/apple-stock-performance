import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Button from "../Button";

test("button click flow", () => {
  const handleClick = vi.fn();
  render(<Button handleClick={handleClick} title="month" selection={false} />);

  const buttonElement = screen.getByRole("button", {
    name: /month/i,
  });

  expect(buttonElement).toHaveTextContent(/month/i);

  expect(buttonElement).toHaveClass("bg-transparent");

  fireEvent.click(buttonElement);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
