import { render, screen, within} from "@testing-library/react";
import '@testing-library/jest-dom';

import Hero from "./Hero";

beforeEach(() => {
    render(
        <Hero
            title="Test Title"
            subtitle="Test Subtitle"
            companies={[
                {
                    name: "Test Company 1",
                    logo: "test-logo-1.svg",
                    _id: "adlkfjio28974r1"
                },
                {
                    name: "Test Company 2",
                    logo: "test-logo-2.svg",
                    _id: "adlkfjio28974r2"
                },
                {
                    name: "Test Company 3",
                    logo: "test-logo-3.svg",
                    _id: "adlkfjio28974r2"
                },
                {
                    name: "Test Company 4",
                    logo: "test-logo-4.svg",
                    _id: "adlkfjio28974r2"
                },
                {
                    name: "Test Company 5",
                    logo: "test-logo-5.svg",
                    _id: "adlkfjio28974r2"
                },
                {
                    name: "Test Company 5",
                    logo: "test-logo-5.svg",
                    _id: "adlkfjio28974r2"
                }
            ]}
            button={{
                text: "Test Button",
                link: "/test"
            }}

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

    it("renders a button", () => {
        expect(screen.getByTestId("hero-button")).toBeInTheDocument();
    });

    it("renders a list of companies", () => {
        const list = screen.getByTestId("companies-list");
        const { getAllByRole } = within(list);
        const items = getAllByRole("listitem");
        expect(items).toHaveLength(4);
    });
}); 