import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the AidWorks landing page and primary navigation", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /compassion creates change/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: /donate/i }).length).toBeGreaterThan(0);
});
