import { test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { AddCategoryPopUp } from "./AddCategoryPopUp";

test("renders AddCategoryPopUp and checks initial state", () => {
  const { getByText, getByLabelText } = render(
    <AddCategoryPopUp
      isOpen={true}
      onClose={() => {}}
      parentId={1}
      setRefresh={() => {}}
      refresh={false}
    />
  );

  expect(getByText("اطلاعات کارت")).toBeInTheDocument();
  expect(getByLabelText("نام کارت")).toHaveValue("");
  expect(getByLabelText("زیرنویس کارت")).toHaveValue("");
});

test("checks title input change", async () => {
  const { getByLabelText } = render(
    <AddCategoryPopUp
      isOpen={true}
      onClose={() => {}}
      parentId={1}
      setRefresh={() => {}}
      refresh={false}
    />
  );
  const titleInput = getByLabelText("نام کارت");

  await fireEvent.change(titleInput, { target: { value: "Test Title" } });
  expect(titleInput).toHaveValue("Test Title");
});

test("checks subtitle input change", async () => {
  const { getByLabelText } = render(
    <AddCategoryPopUp
      isOpen={true}
      onClose={() => {}}
      parentId={1}
      setRefresh={() => {}}
      refresh={false}
    />
  );
  const subtitleInput = getByLabelText("زیرنویس کارت");

  await fireEvent.change(subtitleInput, { target: { value: "Test Subtitle" } });
  expect(subtitleInput).toHaveValue("Test Subtitle");
});
