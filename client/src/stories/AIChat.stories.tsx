import type { Meta, StoryObj } from "@storybook/react";
import AIChat from "../components/ai/AIChat";

const meta: Meta<typeof AIChat> = {
  title: "Components/AIChat",
  component: AIChat,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof AIChat>;

export const Closed_Default: Story = {};

export const Default_Black: Story = {
  decorators: [
    (Story) => (
      <div style={{ background: "#000", minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export const Opened_ThenClose: Story = {
  play: async ({ canvasElement }) => {
    const openBtn = canvasElement.querySelector(
      'button[aria-label="Open AI Chat"]'
    ) as HTMLButtonElement | null;
    if (!openBtn) throw new Error('Could not find "Open AI Chat" button');
    openBtn.click();

    const closeBtn = canvasElement.querySelector(
      "div.fixed button"
    ) as HTMLButtonElement | null;
    if (!closeBtn) throw new Error("Could not find close button");
    closeBtn.click();
  },
};
