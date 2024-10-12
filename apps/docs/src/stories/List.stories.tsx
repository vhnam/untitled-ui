import { Icon } from '@repo/icons';
import { IconButton, List, ListItem, type ListProps } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';
import outdent from 'outdent';
import React from 'react';

const meta = {
  title: 'Components/List',
  component: List,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <List>List</List>
        `,
      },
    },
  },
} satisfies Meta<ListProps>;

export default meta;

type Story = StoryObj<ListProps>;

export const Default = {
  name: 'Default',
  args: {
    children: (
      <>
        <ListItem
          title="Title"
          trailingAdornment={<Icon name="CreditCard" />}
          leadingAdornment={<IconButton iconName="ArrowForward" />}
        />
      </>
    ),
  },
} satisfies Story;

export const TwoLines = {
  name: '2 Lines',
  args: {
    children: (
      <>
        <ListItem
          title="Title"
          subtitle="Sub title"
          trailingAdornment={<Icon name="CreditCard" />}
          leadingAdornment={
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
              }}
            >
              <IconButton iconName="Edit" />
              <IconButton iconName="Delete" />
            </div>
          }
        />
      </>
    ),
  },
} satisfies Story;
