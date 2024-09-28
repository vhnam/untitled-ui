import { Divider, type DividerProps } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';
import outdent from 'outdent';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <Divider />
        `,
      },
    },
  },
} satisfies Meta<DividerProps>;

export default meta;

type Story = StoryObj<DividerProps>;

export const Full = {
  name: 'Default',
  args: {
    width: 'full',
  },
} satisfies Story;

export const Inset = {
  name: 'Inset',
  args: {
    width: 'inset',
  },
} satisfies Story;
