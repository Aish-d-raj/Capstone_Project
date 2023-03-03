import { screen, render } from "@testing-library/react";
import CarouselComponent from "./Carousel";


describe("<CarouselComponent/>", () => {
  test("Check if image as an attribute alt", () => {
    render(<CarouselComponent />);
    const imgAlt = screen.getByAltText(/First slide/);
    expect(imgAlt).toHaveAttribute("alt");
  });
});