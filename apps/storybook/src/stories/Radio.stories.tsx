import { Radio, type RadioProps } from "@repo/ui";
import type { Meta, StoryObj } from "@storybook/react";
import outdent from "outdent";

const meta = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <Radio/>
        `,
      },
    },
  },
} satisfies Meta<RadioProps>;

export default meta;

type Story = StoryObj<RadioProps>;

export const Default = {
  name: "Default",
  args: {
    children: "Trumpet",
    name: "instrument",
  },
} satisfies Story;

export const Disabled = {
  name: "Disabled",
  args: {
    children: "Trumpet",
    name: "instrument",
    disabled: true,
  },
} satisfies Story;
