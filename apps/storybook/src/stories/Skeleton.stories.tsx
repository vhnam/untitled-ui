import { Skeleton, type SkeletonProps } from "@repo/ui";
import type { Meta, StoryObj } from "@storybook/react";
import outdent from "outdent";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <Skeleton />
        `,
      },
    },
  },
} satisfies Meta<SkeletonProps>;

export default meta;

type Story = StoryObj<SkeletonProps>;

export const Text = {
  name: "Text",
  args: {
    size: 20,
    variant: "text",
  },
} satisfies Story;

export const Avatar = {
  name: "Avatar",
  args: {
    size: "xlarge",
    variant: "circle",
  },
} satisfies Story;
