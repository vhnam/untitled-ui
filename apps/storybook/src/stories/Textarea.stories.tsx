import { Icon } from '@repo/icons';
import { Textarea, type TextareaProps } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';
import outdent from 'outdent';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    chromatic: { disableSnapshot: false },
    docs: {
      source: {
        code: outdent`
          <Textarea name="name" />
        `,
      },
    },
  },
} satisfies Meta<TextareaProps>;

export default meta;

type Story = StoryObj<TextareaProps>;

export const Default = {
  name: 'Default',
  args: {
    label: 'Hint',
    name: 'name',
    helperText: 'Supporting Text',
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
    value: 'Input',
  },
} satisfies Story;

export const Disabled = {
  name: 'Disabled',
  args: {
    label: 'Hint',
    name: 'name',
    disabled: true,
    helperText: 'Supporting Text',
  },
} satisfies Story;

export const CharacterCount = {
  name: 'Character Count',
  args: {
    label: 'Hint',
    name: 'name',
    helperText: 'Supporting Text',
    showCount: true,
    maxLength: 100,
  },
} satisfies Story;
