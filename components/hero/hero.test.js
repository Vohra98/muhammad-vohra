import { render, screen, within} from "@testing-library/react";
import '@testing-library/jest-dom';
import Hero from "./Hero";

beforeEach(() => {
    render(
        <Hero
            title="Test Title"
            subtitle="Test Subtitle"
        />
    );
});

describe("Hero", () => {
    it("renders a hero section with a title", () => {
        expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("renders a subtitle", () => {
        expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    });
});