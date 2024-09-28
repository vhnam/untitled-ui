import { Tag, type TagProps } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';
import outdent from 'outdent';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <Tag>Tag</Tag>
        `,
      },
    },
  },
} satisfies Meta<TagProps>;

export default meta;

type Story = StoryObj<TagProps>;

export const Default = {
  name: 'Default',
  args: {
    children: 'Tag',
  },
} satisfies Story;

export const SmallSize = {
  name: 'Small Size',
  args: {
    children: 'Tag',
    size: 'small',
  },
} satisfies Story;

export const WithIcon = {
  name: 'With Icon',
  args: {
    children: 'Tag',
    icon: 'CheckCircle',
  },
} satisfies Story;
