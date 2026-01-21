import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import AuthForm from "../components/authForm";

const meta: Meta<typeof AuthForm> = {
  title: "Components/AuthForm",
  component: AuthForm,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AuthForm>;

export const Default_SignUpTab: Story = {};

export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div style={{ background: "#111", minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export const SwitchToLogin_Play: Story = {
  play: async ({ canvasElement }) => {

    const loginBtn = Array.from(canvasElement.querySelectorAll("button")).find(
      (b) => (b.textContent ?? "").trim().toLowerCase() === "log in"
    ) as HTMLButtonElement | undefined;

    if (!loginBtn) throw new Error('Could not find the "Log In" tab button');
    loginBtn.click();

    const emailLabel = Array.from(canvasElement.querySelectorAll("label")).find((l) =>
      (l.textContent ?? "").toLowerCase().includes("email")
    );
    if (!emailLabel) throw new Error("Login form did not render");
  },
};
