import { Banner, Button, type BannerProps } from '@repo/ui';
import { Icon } from '@repo/icons';
import type { Meta, StoryObj } from '@storybook/react';
import outdent from 'outdent';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <Banner>Banner</Banner>
        `,
      },
    },
  },
} satisfies Meta<BannerProps>;

export default meta;

type Story = StoryObj<BannerProps>;

export const Negative = {
  name: 'Negative',
  args: {
    title: 'Text',
    subtitle: 'Subtext',
    color: 'negative',
    leadingIcon: <Icon name="Warning" />,
    action: (
      <Button size="small" color="inherit">
        Action
      </Button>
    ),
  },
} satisfies Story;

export const Positive = {
  name: 'Positive',
  args: {
    title: 'Text',
    subtitle: 'Subtext',
    color: 'positive',
    leadingIcon: <Icon name="Warning" />,
    action: (
      <Button size="small" color="inherit">
        Action
      </Button>
    ),
  },
} satisfies Story;

export const Attention = {
  name: 'Attention',
  args: {
    title: 'Text',
    subtitle: 'Subtext',
    color: 'attention',
    leadingIcon: <Icon name="Warning" />,
    action: (
      <Button size="small" color="inherit">
        Action
      </Button>
    ),
  },
} satisfies Story;

export const Information = {
  name: 'Information',
  args: {
    title: 'Text',
    subtitle: 'Subtext',
    color: 'information',
    leadingIcon: <Icon name="Warning" />,
    action: (
      <Button size="small" color="inherit">
        Action
      </Button>
    ),
  },
} satisfies Story;

export const Neutral = {
  name: 'Neutral',
  args: {
    title: 'Text',
    subtitle: 'Subtext',
    color: 'neutral',
    leadingIcon: <Icon name="Warning" />,
    action: (
      <Button size="small" color="inherit">
        Action
      </Button>
    ),
  },
} satisfies Story;
