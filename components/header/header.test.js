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
    expect(screen.getByRole("button")).toBeInTheDocument();
  })

  it("renders a sidebar", () => {
    
  });


  // it("renders 4 links in the menu", () => {
  //   const menu = screen.getByRole("navigation");
  //   expect(within(menu).getAllByRole("link").length).toBe(4);
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
