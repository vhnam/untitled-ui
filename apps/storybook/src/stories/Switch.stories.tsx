import { Switch, type SwitchProps } from "@repo/ui";
import type { Meta, StoryObj } from "@storybook/react";
import outdent from "outdent";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <Switch />
        `,
      },
    },
  },
} satisfies Meta<SwitchProps>;

export default meta;

type Story = StoryObj<SwitchProps>;

export const Default = {
  name: "Default",
  args: {
    name: "isAgree",
  },
} satisfies Story;

export const Disabled = {
  name: "Disabled",
  args: {
    name: "isAgree",
    disabled: true,
    defaultChecked: true,
  },
} satisfies Story;
