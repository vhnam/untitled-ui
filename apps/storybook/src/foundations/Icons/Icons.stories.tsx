import { Icon, IconName, type IconProps } from "@repo/icons";
import type { Meta } from "@storybook/react";

const meta = {
  title: "Foundations/Icons/All",
  component: Icon,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
} satisfies Meta<IconProps>;

export default meta;

export const All = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "1rem",
    }}
  >
    {IconName.map((iconName) => (
      <div
        key={iconName}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Icon name={iconName} />
        <div>{iconName}</div>
      </div>
    ))}
  </div>
);
