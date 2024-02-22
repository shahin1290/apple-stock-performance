import { render, screen } from "@testing-library/react";
import StatusCard from "../StatusCard";

it("should have Apple Stock React To News Articles", () => {
  render(<StatusCard totalNewsCount={100} />);
  const message = screen.queryByText("100");
  expect(message).toBeVisible();
});
