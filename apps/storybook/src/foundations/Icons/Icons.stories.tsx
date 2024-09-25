import { Icon, type IconProps } from "@repo/icons";
import type { Meta } from "@storybook/react";

import { IconNames } from "./Icons.mock";

const meta = {
  title: "Foundations/Icons/All",
  component: Icon,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
} satisfies Meta<IconProps>;

export default meta;

export const All = () => (
  <div>
    {Object.keys(IconNames).map((iconCategory) => (
      <div
        key={iconCategory}
        style={{
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            paddingBottom: "0.5rem",
            marginBottom: "1rem",
            borderBottom: "1px solid #c3c3c3",
          }}
        >
          {iconCategory}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1rem",
          }}
        >
          {IconNames[iconCategory].map((iconName) => (
            <div
              key={iconName}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Icon name={iconName} />
              <div className="label">{iconName}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
