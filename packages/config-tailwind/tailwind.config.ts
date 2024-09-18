import type { Config } from "tailwindcss";
import tokens from "@repo/design-tokens";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: tokens.color,
    },
  },
  plugins: [],
};
export default config;
