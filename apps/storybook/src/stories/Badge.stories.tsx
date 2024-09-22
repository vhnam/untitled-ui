import { Badge, type BadgeProps } from "@repo/ui";
import type { Meta, StoryObj } from "@storybook/react";
import outdent from "outdent";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <Badge>Badge</Badge>
        `,
      },
    },
  },
} satisfies Meta<BadgeProps>;

export default meta;

type Story = StoryObj<BadgeProps>;

export const Default = {
  name: "Default",
  args: {
    children: "Badge",
  },
} satisfies Story;

export const SmallSize = {
  name: "Small Size",
  args: {
    children: "Badge",
    size: "small",
  },
} satisfies Story;

export const WithIcon = {
  name: "With Icon",
  args: {
    children: "Badge",
    icon: "CheckCircle",
  },
} satisfies Story;
