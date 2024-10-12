import { Tabs, type TabsProps } from '@repo/ui';
import type { Meta, StoryFn } from '@storybook/react';
import outdent from 'outdent';
import { PropsWithChildren, useState } from 'react';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <Tabs>Tabs</Tabs>
        `,
      },
    },
  },
} satisfies Meta<TabsProps>;

export default meta;

const TabPanel = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        padding: '1rem',
      }}
    >
      {children}
    </div>
  );
};

const Template: StoryFn<TabsProps> = () => {
  const [value, setValue] = useState('all');

  return (
    <Tabs
      onChange={setValue}
      value={value}
      items={[
        {
          value: 'all',
          label: 'All',
          leadingIcon: 'Image',
          children: <TabPanel>ALL</TabPanel>,
        },
        {
          value: 'sub-1',
          label: 'Sub cat 1',
          leadingIcon: 'Image',
          disabled: true,
          children: <TabPanel>Sub Category 1</TabPanel>,
        },
        {
          value: 'sub-2',
          label: 'Sub cat 2',
          leadingIcon: 'Image',
          children: <TabPanel>Sub Category 2</TabPanel>,
        },
        {
          value: 'sub-3',
          label: 'Sub cat 3',
          leadingIcon: 'Image',
          children: <TabPanel>Sub Category 3</TabPanel>,
        },
        {
          value: 'sub-4',
          label: 'Sub cat 4',
          leadingIcon: 'Image',
          children: <TabPanel>Sub Category 4</TabPanel>,
        },
      ]}
    />
  );
};

export const Default = Template.bind({});
