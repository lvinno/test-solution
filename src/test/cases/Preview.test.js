import React from "react";
import { render, screen } from "@/test/testUtils";
import PreviewContainer from "@Components/HCard/Preview/PreviewContainer";

describe("Card Preview", () => {
  it("will render correctly when the rootState is the initialState", () => {
    render(<PreviewContainer />, {
      initialState: {
        givenName: "",
        surname: "",
        email: "",
        phone: "",
        houseName: "",
        street: "",
        suburb: "",
        state: "",
        postcode: "",
        country: "",
        avatar: undefined,
      },
    });

    const textLabels = [
      /email/i,
      /phone/i,
      /address/i,
      /postcode/i,
      /country/i,
    ];
  });
});
