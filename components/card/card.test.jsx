import { render, screen} from "@testing-library/react";
import Card from "./card.jsx";

describe("Card", () => {

    beforeEach(() => {
        render(
            <Card
                logo="M"
                description="This is a description"
                image={{
                    url: "https://via.placeholder.com/150",
                    alt: "This is an alt",
                }}
                email="example@example.com"
                location="Location"
            />
        );
      });


    test("should render a logo", () => {
        screen.getByTestId('logo');
    });

    test("should render a description", () => {
        screen.getByTestId('description');
    });

    test("should render an image", () => {
        screen.getByTestId('image');
    });

    test("should render an email", () => {
        screen.getByTestId('email');
    });

    test("should render a location", () => {
        screen.getByTestId('location');
    });
});