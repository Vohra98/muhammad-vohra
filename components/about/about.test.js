import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { act } from "react-dom/test-utils";

import About from "./About";


const about = {
    content: [
        {
            children: [
                {
                    marks: [],
                    text: "Test",
                    _key: 'hjg765bnja897bd',
                    _type: 'span'
                },
                {
                    marks: ['strong'],
                    text: "Content",
                    _key: 'hjg765bnja897bd',
                    _type: 'span'
                }
            ],
            markDefs: [],
            style: "h2",
            _key: 'ads748jhkla897',
            _type: 'block'
        }
    ],
    technologies: [
        {
            _id: "123456789",
            name: "Test",
            experience: 70,
        },
        {
            _id: "123456789",
            name: "Test",
            experience: 70,
        }
    ],
}

beforeEach(() => {
    render(<About about={about}/>);
});

describe("About", () => {
    it("renders a title", () => {
        expect(screen.getByTestId("title")).toBeInTheDocument();    
    });

    it("render two buttons for About and skills", () => {
        expect(screen.getAllByRole("button")).toHaveLength(2);
    });

    it("renders the about content section on first load", () => {
        expect(screen.getByTestId("content")).toBeInTheDocument();
    });

    it("shows technologies section after clicking skills button", () => {
        act(() => {
            screen.getByTestId("skills-button").click();
        });
        expect(screen.getAllByRole("listitem")).toHaveLength(2);
    });

    it("shows about section again after clicking about button", () => {
        act(() => {
            screen.getByTestId("about-button").click();
        });
        expect(screen.getByTestId("content")).toBeInTheDocument();
    });
});