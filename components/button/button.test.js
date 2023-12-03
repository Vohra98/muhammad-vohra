import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Button from "./Button";


describe("Button", () => {
    it("renders a button with text if a funtion is passed", () => {
        render(<Button text="Test Button" testId="test" onClick={test = () => {}}/>);
        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(screen.getByText("Test Button")).toBeInTheDocument();
    }); 

    it("renders a button with text if a link is passed", () => {
        render(<Button text="Test Link" testId="test" url="/test"/>);
        expect(screen.getByRole("link")).toBeInTheDocument();
        expect(screen.getByText("Test Link")).toBeInTheDocument();
    });


});