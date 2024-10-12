import {
  Badge,
  IconButton,
  TopNavigation,
  type TopNavigationProps,
} from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';
import outdent from 'outdent';
import React from 'react';

const meta = {
  title: 'Components/TopNavigation',
  component: TopNavigation,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <TopNavigation name="name" />
        `,
      },
    },
  },
} satisfies Meta<TopNavigationProps>;

export default meta;

type Story = StoryObj<TopNavigationProps>;

export const Default = {
  name: 'Default',
  args: {
    leading: <IconButton iconName="ArrowBack" />,
    title: 'Top Navigation Bar',
    actions: (
      <div>
        <IconButton iconName="Notifications" />
      </div>
    ),
  },
} satisfies Story;

export const Compressed = {
  name: 'Compressed',
  args: {
    state: 'compressed',
    leading: <IconButton iconName="ArrowBack" />,
    title: 'Top Navigation Bar',
    actions: (
      <div
        style={{
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'center',
        }}
      >
        <Badge badgeContent="9">
          <IconButton iconName="Notifications" />
        </Badge>
        <Badge badgeContent="9">
          <IconButton iconName="Notifications" />
        </Badge>
        <Badge badgeContent="9">
          <IconButton iconName="Notifications" />
        </Badge>
      </div>
    ),
  },
} satisfies Story;
