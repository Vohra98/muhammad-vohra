import { render, screen, within} from "@testing-library/react";
import '@testing-library/jest-dom';

import ParalaxCards from "./ParalaxCards";

const technologies = [
    {
        _id: "123456789",
        name: "Test",
        type: "frontend ",
        experience: 70,
    },
    {
        _id: "123456712",
        name: "Test2",
        type: "foundational",
        experience: 70,
    },
    {
        _id: "123456734",
        name: "Test3",
        type: "toolingAndTechnologies",
        experience: 70,
    }
];

beforeEach(() => {
    render(
        <ParalaxCards type='Skills' content={technologies} />
    )
});

describe("ParalaxCards", () => {
    it("renders a ParalaxCards section", () => {
        expect(screen.getByTestId("paralax-cards")).toBeInTheDocument();
    })

    // renders a title
    it("renders a title", () => {
        expect(screen.getByText("Skills")).toBeInTheDocument();
    })

    // renders the correct number of cards
    it("renders the correct number o    f cards", () => {
        const cards = screen.getAllByTestId("paralax-card");
        expect(cards).toHaveLength(3);
    })
});