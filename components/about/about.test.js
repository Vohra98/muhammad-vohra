import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { act } from "react-dom/test-utils";
import 'intersection-observer';

import About from "./About";


const about = {
    technologies: [
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
    ],
}

beforeEach(() => {
    render(<About about={about}/>);
});

describe("About", () => {
    it("renders a title", () => {
        expect(screen.getByTestId("about-title")).toBeInTheDocument();
    });

});