import { Checkbox, type CheckboxProps } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';
import outdent from 'outdent';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <Checkbox />
        `,
      },
    },
  },
} satisfies Meta<CheckboxProps>;

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default = {
  name: 'Default',
  args: {
    children: 'Trumpet',
    name: 'instrument',
  },
} satisfies Story;

export const Indeterminate = {
  name: 'Indeterminate',
  args: {
    children: 'Trumpet',
    name: 'instrument',
    indeterminate: true,
  },
} satisfies Story;

export const Error = {
  name: 'Error',
  args: {
    children: 'Trumpet',
    name: 'instrument',
    error: true,
  },
} satisfies Story;

export const Disabled = {
  name: 'Disabled',
  args: {
    children: 'Trumpet',
    name: 'instrument',
    disabled: true,
  },
} satisfies Story;
