import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import exp from "constants";
import { act } from "react-dom/test-utils";

beforeEach(() => {
  render(<Header />);
});

describe("Header", () => {
  it("renders a menu button", () => {
    expect(screen.getByTestId("menu-button")).toBeInTheDocument();
  });

  it("renders a sidebar when menu button is clicked", () => {
    act(() => {
      screen.getByTestId("menu-button").click();
    });
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  it("renders a sidebar with 5 menu items", () => {
    act(() => {
      screen.getByTestId("menu-button").click();
    });
    expect(
      within(screen.getByTestId("sidebar")).getAllByRole("listitem").length
    ).toBe(5);
  });

  it("renders the logo component", () => {
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  it("renders the github and linked in social icons", () => {
    expect(screen.getByTestId("linkedin")).toBeInTheDocument();
    // expect(screen.getByTestId('linkedin')).toBeInTheDocument();
  });
});
