import { test } from "vitest";
import { Comment, UserBox, CommentsSection } from "./Comments"; // Update with the correct file path
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Comment component renders correctly", () => {
  const { asFragment } = render(
    <Comment logo="logo" name="John" date="2023-01-01" text="Test comment" />
  );
  expect(asFragment()).toMatchSnapshot();
});

test("UserBox component renders correctly", () => {
  const { asFragment } = render(
    <UserBox userlogo="user-logo" usertext="Enter your comment" />
  );
  expect(asFragment()).toMatchSnapshot();
});

// test("UserBox component handles input change correctly", () => {
//   const { getByRole } = render(
//     <UserBox userlogo="user-logo" usertext="Enter your comment" />
//   );
//   const input = getByRole("textbox");

//   userEvent.type(input, "New comment");

//   expect(input).toHaveValue("New comment");
// });

test("CommentsSection component renders correctly", () => {
  const comments = [
    { logo: "logo1", name: "John", date: "2023-01-01", text: "Comment 1" },
    { logo: "logo2", name: "Alice", date: "2023-01-02", text: "Comment 2" },
  ];

  const userbox = { userlogo: "user-logo", usertext: "Enter your comment" };

  const { asFragment } = render(
    <CommentsSection comments={comments} userbox={userbox} />
  );
  expect(asFragment()).toMatchSnapshot();
});
