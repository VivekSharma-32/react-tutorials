import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormExample from "../form-example";
import { test } from "vitest";

test("submit form with valid data", () => {
  render(<FormExample />);
  fireEvent.change(screen.getByLabelText("Name"), {
    taget: { value: "John Doe" },
  });
  fireEvent.change(screen.getByLabelText("Email"), {
    taget: { value: "sample@gmail.com" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    taget: { value: "Sample@123" },
  });
  fireEvent.submit(screen.getByText("submit"));
  expect(screen.queryByText("This field is required")).not.toBeInTheDocument();
});
