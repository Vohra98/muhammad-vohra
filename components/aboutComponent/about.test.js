import { render, screen, within} from "@testing-library/react";
import '@testing-library/jest-dom';

import AboutComponent from "./AboutComponent";


const about = [
    {
        name: "Test Name",
        image: {
            url: "test-image.png",
            alt: "test image"
        },
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
        ]
    }
]


beforeEach(() => {
    render(
        <AboutComponent about={about}/>
    );
});

describe("About component", () => {
    it("renders a gif of me", () => {
        expect(screen.getByAltText("muhammad Vohra memoji")).toBeInTheDocument();
    });
    it("renders a section with content in it", () => {
        expect(screen.getByTestId('about-section')).toBeInTheDocument();
    });
}); 