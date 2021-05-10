import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find an element with arole of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // when clicked, expect the bgColor to be blue and the button text to be 'Change to red'
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("when checkbox is checked, button should be disabled", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("Disabled button has gray background and reverts to MediumVioletRed", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({
    backgroundColor: "MediumVioletRed",
  });
});

test("Disabled button has gray background and reverts to blue", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(button);

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({
    backgroundColor: "MidnightBlue",
  });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
