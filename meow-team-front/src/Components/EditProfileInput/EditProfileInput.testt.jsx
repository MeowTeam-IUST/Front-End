// // EditProfileInput.test.js
// import { expect } from "vitest";
// import { render, fireEvent, waitFor } from "@testing-library/react";
// import EditProfileInput from "./EditProfileInput";

// describe("EditProfileInput Component", () => {
//   it("renders the EditProfileInput component in view mode correctly", async () => {
//     const { getByText, getByAltText } = render(
//       <EditProfileInput title="Name" value="John Doe" />
//     );

//     // Assert that the component renders in view mode correctly
//     expect(getByText("Name")).toBeVisible();
//     expect(getByText("John Doe")).toBeVisible();
//     expect(getByAltText("Edit")).toBeVisible();
//   });

// //   it("renders the EditProfileInput component in edit mode correctly", async () => {
// //     const { getByText, getByAltText, getByPlaceholderText } = render(
// //       <EditProfileInput title="Name" value="John Doe" />
// //     );

// //     // Click the edit button to enter edit mode
// //     fireEvent.click(getByAltText("Edit"));

// //     // Assert that the component renders in edit mode correctly
// //     expect(getByText("Name")).toBeVisible();
// //     expect(getByPlaceholderText("John Doe")).toBeVisible();
// //     expect(getByAltText("Confirm")).toBeVisible();
// //     expect(getByAltText("Cancel")).toBeVisible();
// //   });

// //   it("calls the setter function when confirming the edit", async () => {
// //     const mockSetter = vitest.fn();
// //     const { getByAltText } = render(
// //       <EditProfileInput title="Name" value="John Doe" setter={mockSetter} />
// //     );

// //     // Click the edit button to enter edit mode
// //     fireEvent.click(getByAltText("Edit"));

// //     // Confirm the edit
// //     fireEvent.click(getByAltText("Confirm"));

// //     // Wait for updates to complete
// //     await waitFor(() => {
// //       // Assert that the setter function is called with the correct value
// //       expect(
// //         mockSetter
// //       ).toHaveBeenCalledWith(/* Pass the expected new value here */);
// //     });
// //   });

//   it("cancels the edit mode when clicking cancel", async () => {
//     const { getByAltText, queryByText } = render(
//       <EditProfileInput title="Name" value="John Doe" />
//     );

//     // Click the edit button to enter edit mode
//     fireEvent.click(getByAltText("Edit"));

//     // Click cancel
//     fireEvent.click(getByAltText("Cancel"));

//     // Assert that the component is back in view mode
//     expect(queryByText("Confirm")).toBeNull();
//     expect(queryByText("Cancel")).toBeNull();
//     expect(getByAltText("Edit")).toBeVisible();
//   });

//   // You can add more tests based on your specific requirements
// });
