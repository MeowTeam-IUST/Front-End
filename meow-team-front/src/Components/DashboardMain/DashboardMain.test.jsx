import { test } from "vitest";
import { render } from "@testing-library/react";
import DashboardMain from "./DashboardMain";

test("DashboardMain component renders children correctly", () => {
  const { asFragment } = render(
    <DashboardMain>
      <div className="child">Child Component</div>
    </DashboardMain>
  );

  expect(asFragment()).toMatchSnapshot();
});
