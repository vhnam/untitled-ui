import { Chip, type ChipProps } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';
import outdent from 'outdent';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <Chip>Chip</Chip>
        `,
      },
    },
  },
} satisfies Meta<ChipProps>;

export default meta;

type Story = StoryObj<ChipProps>;

export const Default = {
  name: 'Default',
  args: {
    children: 'Chip',
  },
} satisfies Story;

export const WithIcon = {
  name: 'With Icon',
  args: {
    children: 'Chip',
    leadingIcon: 'Location',
    trailingIcon: 'ArrowDropDown',
  },
} satisfies Story;

export const Active = {
  name: 'Active',
  args: {
    children: 'Chip',
    leadingIcon: 'Location',
    trailingIcon: 'ArrowDropDown',
    state: 'active',
  },
} satisfies Story;
