import { Button } from "@repo/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "BUTTON",
  },
};
