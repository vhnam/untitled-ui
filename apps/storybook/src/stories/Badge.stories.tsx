import { Badge, IconButton, type BadgeProps } from "@repo/ui";
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

export const Notification = {
  name: "Notification Badge",
  args: {
    children: <IconButton iconName="Notifications" />,
    badgeContent: "99+",
  },
} satisfies Story;

export const Dot = {
  name: "Dot Badge",
  args: {
    children: <IconButton iconName="Notifications" />,
  },
} satisfies Story;
