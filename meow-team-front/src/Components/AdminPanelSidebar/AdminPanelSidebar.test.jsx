import { test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import AdminPanelSidebar from "./AdminPanelSidebar";

test("renders AdminPanelSidebar component", () => {
  const items = [{ icon: "testIcon", name: "Test Item" }];
  const { getByText } = render(
    <AdminPanelSidebar
      setChoosenItem={() => {}}
      items={items}
      choosenItem={0}
    />
  );
  expect(getByText("ادمین اپکس شاپ")).toBeTruthy();
  expect(getByText("Test Item")).toBeTruthy();
});

test("calls setChoosenItem on item click", async () => {
  const items = [{ icon: "testIcon", name: "Test Item" }];
  let choosenItemIndex;
  const setChoosenItem = (index) => {
    choosenItemIndex = index;
  };
  const { getByText } = render(
    <AdminPanelSidebar
      setChoosenItem={setChoosenItem}
      items={items}
      choosenItem={0}
    />
  );
  const item = getByText("Test Item");
  fireEvent.click(item);
  expect(choosenItemIndex).toBe(0);
});

// You would need to mock window.location.href to test the "مشاهده سایت" click
