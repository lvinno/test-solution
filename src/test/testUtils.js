import { render as rtlRender } from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { initialState as initialRootState, rootReducer } from "@/redux/store";

const render = (
  ui,
  {
    initialState = initialRootState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
