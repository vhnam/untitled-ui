import { Icon } from "@repo/icons";
import { TextInput, type TextInputProps } from "@repo/ui";
import type { Meta, StoryObj } from "@storybook/react";
import outdent from "outdent";

const meta = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <TextInput name="name" />
        `,
      },
    },
  },
} satisfies Meta<TextInputProps>;

export default meta;

type Story = StoryObj<TextInputProps>;

export const Default = {
  name: "Default",
  args: {
    label: "Hint",
    name: "name",
    helperText: "Supporting Text",
    trailingIcon: <Icon name="Cancel" />,
  },
} satisfies Story;

export const Error = {
  name: "Error",
  args: {
    label: "Hint",
    name: "name",
    error: true,
    errorMessage: "Supporting Text",
    helperText: "Required *",
    trailingIcon: <Icon name="Cancel" />,
    value: "Input",
  },
} satisfies Story;

export const Disabled = {
  name: "Disabled",
  args: {
    label: "Hint",
    name: "name",
    disabled: true,
    helperText: "Supporting Text",
    trailingIcon: <Icon name="Cancel" />,
  },
} satisfies Story;

export const Suffix = {
  name: "Suffix",
  args: {
    label: "Hint",
    name: "name",
    helperText: "Supporting Text",
    suffix: "Suffix",
  },
} satisfies Story;
