import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

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

    it("renders a content section", () => {
        expect(screen.getByTestId("content")).toBeInTheDocument();
    });

    it("renders a technoligies section", () => {
        expect(screen.getAllByRole("listitem")).toHaveLength(2);
    });
    
    it("renders a progress bar", () => {
        expect(screen.getAllByRole("progressbar")).toHaveLength(2);
    });
});