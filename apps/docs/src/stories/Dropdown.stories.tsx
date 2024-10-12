import { Dropdown, MenuItem, type MenuItemProps } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';
import outdent from 'outdent';

type DropdownProps = typeof Dropdown;

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <Dropdown>Dropdown</Dropdown>
        `,
      },
    },
  },
} satisfies Meta<DropdownProps>;

export default meta;

type Story = StoryObj<DropdownProps>;

const options: MenuItemProps[] = [
  {
    label: 'Audi',
    value: 'Audi',
  },
  {
    label: 'BMW',
    value: 'BMW',
  },
  {
    label: 'Ford',
    value: 'Ford',
  },
  {
    label: 'Honda',
    value: 'Honda',
  },
  {
    label: 'Nissan',
    value: 'Nissan',
  },
];

export const Default = {
  name: 'Default',
  args: {
    label: 'Car',
    name: 'car',
    children: (
      <>
        {options.map((option) => (
          <MenuItem key={option.label} {...option} />
        ))}
      </>
    ),
  },
} satisfies Story;

export const Error = {
  name: 'Error',
  args: {
    label: 'Hint',
    name: 'name',
    error: true,
    errorMessage: 'Supporting Text',
    helperText: 'Required *',
    children: (
      <>
        {options.map((option) => (
          <MenuItem key={option.label} {...option} />
        ))}
      </>
    ),
  },
} satisfies Story;

export const Disabled = {
  name: 'Disabled',
  args: {
    label: 'Hint',
    name: 'name',
    disabled: true,
    helperText: 'Supporting Text',
    children: (
      <>
        {options.map((option) => (
          <MenuItem key={option.label} {...option} />
        ))}
      </>
    ),
  },
} satisfies Story;
