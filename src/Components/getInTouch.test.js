import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import ContactForm from "./getInTouch";


describe("<getInTouch/>", () => {
  test("Checking whether title is present", () => {
    render(<ContactForm />);
    const titleElement = screen.getByText(/Get In Touch/);
    expect(titleElement).toBeInTheDocument();
  });

  test("checking if email input field is valid",() => {
      render(<ContactForm/>);
      const validEmail = screen.getByTestId("email-input");
      userEvent.type(validEmail, "test@mail.com");
      expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
    
  });
});