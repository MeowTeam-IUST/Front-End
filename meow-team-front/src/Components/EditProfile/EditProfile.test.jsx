import { test } from "vitest";
import { render as rtlRender, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../../Slices/UserSlice.js"; // Import your root reducer
import { EditProfile } from "./EditProfile";

// Create a custom render function to include the Redux provider
function render(
  ui,
  {
    initialState = {
      User: {
        image: "test-image.jpg", // Replace this with a valid image path
        // Add other properties of the User state if needed
      },
    },
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// Now you can use this custom render function in your tests
test("renders EditProfile", () => {
  const { getByText } = render(<EditProfile />);
  expect(getByText("تغییر پروفایل")).toBeInTheDocument();
});



