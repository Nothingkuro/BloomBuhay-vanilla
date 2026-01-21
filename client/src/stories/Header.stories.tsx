import type { Meta, StoryObj } from "@storybook/react";
import Header from "../components/ui/Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onMenuClick: () => console.log("menu clicked"),
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

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

export const WithContainerPadding: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};
