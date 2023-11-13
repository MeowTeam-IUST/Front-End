import { test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import {ProfileHeader} from "./ProfileHeader";

test("renders ProfileHeader with name and image when authenticated", () => {
  const name = "Test User";
  const image = "test.jpg";
  localStorage.setItem("token", "testToken");
  const { getByText, getByAltText } = render(
    <ProfileHeader name={name} image={image} />
  );

  expect(getByText(name)).toBeInTheDocument();
  expect(getByAltText("")).toBeInTheDocument();
  fireEvent.click(getByText("خروج"));
  expect(localStorage.getItem("token")).toBeNull();
});

test("renders ProfileHeader with login prompt when not authenticated", () => {
  localStorage.removeItem("token");
  const { getByText } = render(<ProfileHeader />);

  expect(getByText("ورود یا ثبت‌نام")).toBeInTheDocument();
  fireEvent.click(getByText("ورود یا ثبت‌نام"));
  expect(window.location.href).toBe("/login");
});
