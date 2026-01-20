import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import NextButton from "./NextButton";

const meta: Meta<typeof NextButton> = {
  title: "UI/NextButton",
  component: NextButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ width: 320 }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NextButton>;

export const Disabled: Story = {
  args: {
    isReady: false,
  },
};

export const Enabled_NoRoute: Story = {
  args: {
    isReady: true,
    onComplete: () => console.log("onComplete"),
  },
};

export const Enabled_NoHoverGradient: Story = {
  args: {
    isReady: true,
    onComplete: () => console.log("onComplete"),
  },
  decorators: [
    (Story) => (
      <div>
        <style>{`
          .next-button:hover::before,
          .next-button:not(:disabled):hover::before {
            opacity: 0;
          }
        `}</style>
        <Story />
      </div>
    ),
  ],
};
