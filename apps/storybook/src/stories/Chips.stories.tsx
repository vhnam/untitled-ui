import { Chips, type ChipsProps } from "@repo/ui";
import type { Meta, StoryObj } from "@storybook/react";
import outdent from "outdent";

const meta = {
  title: "Components/Chips",
  component: Chips,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <Chips>Chips</Chips>
        `,
      },
    },
  },
} satisfies Meta<ChipsProps>;

export default meta;

type Story = StoryObj<ChipsProps>;

export const Default = {
  name: "Default",
  args: {
    children: "Chips",
  },
} satisfies Story;

export const WithIcon = {
  name: "With Icon",
  args: {
    children: "Chips",
    leadingIcon: "Location",
    trailingIcon: "ArrowDropDown",
  },
} satisfies Story;

export const Active = {
  name: "Active",
  args: {
    children: "Chips",
    leadingIcon: "Location",
    trailingIcon: "ArrowDropDown",
    state: "active",
  },
} satisfies Story;
