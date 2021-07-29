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

    const dataIds = [
      "email",
      "phone",
      "address",
      "addressLine2",
      "postcode",
      "country",
    ];

    dataIds.forEach((id) => {
      const preview = screen.getByTestId(id + "-preview");
      expect(preview.innerHTML).toBe("");
    });
  });

  it("will render correctly when the rootState contains value", () => {
    const testState = {
      givenName: "test1",
      surname: "test2",
      email: "emailtest3@test.com",
      phone: "test4",
      houseName: "test5",
      street: "test6",
      suburb: "test7",
      state: "test8",
      postcode: "test9",
      country: "test10",
      avatar: "fakeUrl",
    };
    render(<PreviewContainer />, {
      initialState: testState,
    });
    const email = screen.getByTestId("email-preview");
    expect(email.innerHTML).toBe(testState.email);

    const phone = screen.getByTestId("phone-preview");
    expect(phone.innerHTML).toBe(testState.phone);

    const address = screen.getByTestId("address-preview");
    expect(address.innerHTML).toBe(
      `${testState.houseName} ${testState.street}`
    );

    const addressLine2 = screen.getByTestId("addressLine2-preview");
    expect(addressLine2.innerHTML).toBe(
      `${testState.suburb}, ${testState.state}`
    );
  });
});
