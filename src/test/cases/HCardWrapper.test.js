import React from "react";
import { render, screen } from "@/test/testUtils";
import HCardWrapper from "@Components/HCard/HCardWrapper";

describe("HCardWrapper", () => {
  beforeEach(() => {
    render(<HCardWrapper />);
  });
  it("will render Form", () => {
    expect(screen.getByText(/hCard Builder/i)).toBeInTheDocument();
  });
  it("will render Preview", () => {
    expect(screen.getByText(/HCARD PREVIEW/i)).toBeInTheDocument();
  });
});
