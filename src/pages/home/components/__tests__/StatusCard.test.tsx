import { render, screen } from "@testing-library/react";
import StatusCard from "../StatusCard";

it("should have Apple Stock React To News Articles", () => {
  render(
    <StatusCard
      totalNewsCount={100}
      selection1="2022-02-02"
      selection2="2022-03-02"
    />
  );
  const message = screen.queryByText("100");
  expect(message).toBeVisible();
});
