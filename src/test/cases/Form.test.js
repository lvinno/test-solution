import React from "react";
import { render, screen } from "@/test/testUtils";
import FormContainer from "@Components/HCard/Form/FormContainer";
import FormMain from "@Components/HCard/Form/Main/FormMain";
import userEvent from "@testing-library/user-event";

describe("Form", () => {
  it("will render Form", () => {
    render(<FormContainer />);

    expect(screen.getByText(/Personal Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Address/i)).toBeInTheDocument();
  });

  it("will render buttons", () => {
    render(<FormContainer />);

    expect(screen.getByText(/upload avatar/i)).toBeInTheDocument();
    expect(screen.getByText(/create hcard/i)).toBeInTheDocument();
  });

  it("will accept user inputs", () => {
    render(<FormContainer />);
    const labels = [
      /given name/i,
      /surname/i,
      /email/i,
      /phone/i,
      /house name or #/i,
      /street/i,
      /suburb/i,
      /state/i,
      /postcode/i,
      /country/i,
    ];
    labels.forEach((labelTextRegx) => {
      const input = screen.getByLabelText(labelTextRegx);
      userEvent.type(input, "test");
      expect(input.value).toEqual("test");
    });
  });
});
