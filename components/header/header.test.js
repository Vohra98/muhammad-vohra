import { render, screen, within} from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "./Header";

beforeEach(() => {
    render(
        <Header />
    );
  });

describe("Header", () => {
  it("renders a menu button", () => {
    const menuButton = screen.getByRole("button", { name: "Open" });
    expect(menuButton).toBeInTheDocument();
  })

  it("Only opens sidebar with 4 links when menu button is clicked", () => {
    const navigation = screen.queryByRole("navigation");
    expect(navigation).not.toBeInTheDocument();
    const menuButton = screen.getByRole("button", { name: "Open" });
    menuButton.click();
    expect(within(navigation).getAllByRole("link").length).toBe(4);
    const menu = screen.getByTestId("navigation");
    console.log(menu);
    expect(within(menu).getAllByRole("link").length).toBe(4);

  });




  // it("renders 4 links in the menu", () => {
    // const menu = screen.getByRole("navigation");
    // expect(within(menu).getAllByRole("link").length).toBe(4);
  // });

  // it("renders the correct text in the links", () => {
  //   expect(screen.getByText("Home")).toBeInTheDocument();
  //   expect(screen.getByText("About")).toBeInTheDocument();
  //   expect(screen.getByText("Projects")).toBeInTheDocument();
  //   expect(screen.getByText("Download CV")).toBeInTheDocument();
  // });

  it("renders the logo component", () => {
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it("renders the github and linked in social icons", () => {
    expect(screen.getByTestId('github')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin')).toBeInTheDocument();
  });

});
