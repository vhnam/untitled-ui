import localFont from "next/font/local";
import type { Preview } from "@storybook/react";
import React from "react";
import { DocsContainer, Unstyled } from "@storybook/blocks";

import "@repo/ui/styles.css";

const GeistSans = localFont({
  src: "../fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <Unstyled>
        <div className={GeistSans.className}>
          <Story />
        </div>
      </Unstyled>
    ),
  ],
  parameters: {
    docs: {
      container: ({ children, context }) => (
        <DocsContainer context={context}>
          <Unstyled>
            <div className={GeistSans.className}>{children}</div>
          </Unstyled>
        </DocsContainer>
      ),
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Foundations", "Semantics", "Components"],
      },
    },
  },
};

export default preview;
