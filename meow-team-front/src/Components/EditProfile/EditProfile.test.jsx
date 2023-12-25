// import { render, screen } from "@testing-library/react";
// import { describe, expect, test } from "vitest";
// import {EditProfile} from "./EditProfile";

// describe("EditProfile", () => {
//     test("renders EditProfile component without crashing", () => {
//       render(<EditProfile />);
//     });

//     beforeEach(() => {
//       render(
//         <EditProfile/>
//       );
//     });


//     test("renders EditProfileInput components with correct props", () => {
      

//       const nameInput = screen.getByText("نام");
//       expect(nameInput).toBeInTheDocument();

//       const surnameInput = screen.getByText("نام خانوادگی");
//       expect(surnameInput).toBeInTheDocument();

//       const phoneInput = screen.getByText("شماره تلفن");
//       expect(phoneInput).toBeInTheDocument();

//       const emailInput = screen.getByText("ایمیل");
//       expect(emailInput).toBeInTheDocument();

//       const passwordInput = screen.getByText("رمز عبور");
//       expect(passwordInput).toBeInTheDocument();

//       const dobInput = screen.getByText("تاریخ تولد");
//       expect(dobInput).toBeInTheDocument();
//     });
// })