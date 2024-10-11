import { Icon } from '@repo/icons';
import { Button, type ButtonProps } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';
import outdent from 'outdent';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <Button>Button</Button>
        `,
      },
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default = {
  name: 'Default',
  args: {
    children: 'Button',
    color: 'default',
  },
} satisfies Story;

export const Positive = {
  name: 'Positive',
  args: {
    children: 'Button',
    color: 'positive',
  },
} satisfies Story;

export const Negative = {
  name: 'Negative',
  args: {
    children: 'Button',
    color: 'negative',
  },
} satisfies Story;

export const Inherit = {
  name: 'Inherit',
  args: {
    children: 'Button',
    color: 'inherit',
  },
} satisfies Story;

export const LeadingIcon = {
  name: 'With Leading Icon',
  args: {
    children: 'Button',
    leadingIcon: <Icon name="Image" />,
  },
};

export const TrailingIcon = {
  name: 'With Trailing Icon',
  args: {
    children: 'Button',
    trailingIcon: <Icon name="ArrowForward" />,
  },
};
