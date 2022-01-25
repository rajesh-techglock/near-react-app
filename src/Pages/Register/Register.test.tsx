import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RegisterComponent from "./RegisterComponent";
import { Provider } from "react-redux";
import store from "../../config/store";
describe("Testing register form", function () {
  /**
   * Testing of register with email
   */
  test("if email field not fill", async function () {
    render(
      <Provider store={store}>
        <RegisterComponent />
      </Provider>
    );
    const emailInput = await screen.findByPlaceholderText("Enter your email");
    expect(emailInput).toBeInTheDocument();
    fireEvent.change(emailInput, { target: { value: "" } });
    const buttonSubmitWithoutValue = screen.getByRole("button", {
      name: "Continue",
    });
    fireEvent.click(buttonSubmitWithoutValue);
    const emailRequiredMessage = screen.getByText("Above field is required.");
    expect(emailRequiredMessage).toBeInTheDocument();
  });
  test("if enter invalid email", async function () {
    render(
      <Provider store={store}>
        <RegisterComponent />
      </Provider>
    );
    const emailInput = await screen.findByPlaceholderText("Enter your email");
    expect(emailInput).toBeInTheDocument();
    fireEvent.change(emailInput, { target: { value: "rajesh@gmail.com" } });
    const buttonSubmitWithoutValue = screen.getByRole("button", {
      name: "Continue",
    });
    fireEvent.click(buttonSubmitWithoutValue);
    const emailMessage = screen.getByText("This email already exist.");
    expect(emailMessage).toBeInTheDocument();
  });
  test("Testing register with email", async function () {
    render(
      <Provider store={store}>
        <RegisterComponent />
      </Provider>
    );
    const emailInput = await screen.findByPlaceholderText("Enter your email");
    expect(emailInput).toBeInTheDocument();
    await fireEvent.change(emailInput, {
      target: { value: "rajesh@yopmail.com" },
    });
    const button = screen.getByRole("button", { name: "Continue" });
    fireEvent.click(button);
    await waitFor(() => screen.findByText("OTP sent on your email"));
    const otpInputs = screen.getAllByTestId("input");
    expect(otpInputs[0].getAttribute("value")).toBe("6");
    expect(otpInputs[1].getAttribute("value")).toBe("5");
    expect(otpInputs[2].getAttribute("value")).toBe("3");
    expect(otpInputs[3].getAttribute("value")).toBe("3");
    expect(otpInputs[4].getAttribute("value")).toBe("3");
    expect(otpInputs[5].getAttribute("value")).toBe("4");
  });

  /**
   * Testing of register with phone number
   */
  test("if phone number field not fill", async function () {
    render(
      <Provider store={store}>
        <RegisterComponent />
      </Provider>
    );
    fireEvent.click(screen.getByText("Phone"));
    const phoneInput = await screen.findByPlaceholderText("Ex (337) 378 8383");
    expect(phoneInput).toBeInTheDocument();
    fireEvent.change(phoneInput, { target: { value: "" } });
    const buttonSubmitWithoutValue = screen.getByRole("button", {
      name: "Continue",
    });
    fireEvent.click(buttonSubmitWithoutValue);
    const phoneRequiredMessage = screen.getByText("Above field is required.");
    expect(phoneRequiredMessage).toBeInTheDocument();
  });
  test("if enter invalid phone number", async function () {
    render(
      <Provider store={store}>
        <RegisterComponent />
      </Provider>
    );
    fireEvent.click(screen.getByText("Phone"));
    const phoneInput = await screen.findByPlaceholderText("Ex (337) 378 8383");
    expect(phoneInput).toBeInTheDocument();
    fireEvent.change(phoneInput, { target: { value: "9887234354" } });
    const buttonSubmitWithoutValue = screen.getByRole("button", {
      name: "Continue",
    });
    fireEvent.click(buttonSubmitWithoutValue);
    const phoneMessage = screen.getByText("This phone number already exist.");
    expect(phoneMessage).toBeInTheDocument();
  });
  test("if enter valid phone number", async function () {
    render(
      <Provider store={store}>
        <RegisterComponent />
      </Provider>
    );
    fireEvent.click(screen.getByText("Phone"));
    const phoneInput = await screen.findByPlaceholderText("Ex (337) 378 8383");
    expect(phoneInput).toBeInTheDocument();
    await fireEvent.change(phoneInput, {
      target: { value: "9887134354" },
    });
    const button = screen.getByRole("button", { name: "Continue" });
    fireEvent.click(button);
    screen.getAllByText("OTP sent on your phone number");
    const otpInputs = screen.getAllByTestId("input");
    expect(otpInputs[0].getAttribute("value")).toBe("6");
    expect(otpInputs[1].getAttribute("value")).toBe("2");
    expect(otpInputs[2].getAttribute("value")).toBe("3");
    expect(otpInputs[3].getAttribute("value")).toBe("2");
    expect(otpInputs[4].getAttribute("value")).toBe("4");
    expect(otpInputs[5].getAttribute("value")).toBe("4");
  });
});
