import { render, screen } from "@testing-library/react";
import IntroText from "../IntroText";

it("should have Apple Stock React To News Articles", () => {
  render(<IntroText />);
  const message = screen.queryByText(/Apple Stock React To News Articles/i);
  expect(message).toBeVisible();
});
