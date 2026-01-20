import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { userEvent, within } from "@storybook/test";
import HealthTracker from "./HealthTracker";

const meta: Meta<typeof HealthTracker> = {
  title: "Pages/HealthTracker",
  component: HealthTracker,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/healthtracker"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HealthTracker>;

export const Default: Story = {};

export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div style={{ background: "#111", minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export const OpenAddMetricModal_Play: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /add health metric/i }));
    canvas.getByText(/select metric type/i);
  },
};
