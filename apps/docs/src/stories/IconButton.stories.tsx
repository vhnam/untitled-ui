import { IconButton, type IconButtonProps } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';
import outdent from 'outdent';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <IconButton iconName="ArrowForward" />
        `,
      },
    },
  },
} satisfies Meta<IconButtonProps>;

export default meta;

type Story = StoryObj<IconButtonProps>;

export const Default = {
  name: 'Default',
  args: {
    iconName: 'ArrowForward',
    color: 'default',
  },
} satisfies Story;

export const Negative = {
  name: 'Negative',
  args: {
    iconName: 'ArrowForward',
    color: 'negative',
  },
} satisfies Story;

export const Inherit = {
  name: 'Inherit',
  args: {
    iconName: 'ArrowForward',
    color: 'inherit',
  },
} satisfies Story;
