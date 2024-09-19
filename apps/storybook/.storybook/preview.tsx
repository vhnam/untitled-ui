import localFont from "next/font/local";
import type { Preview } from "@storybook/react";
import React from "react";
import "@repo/ui/styles.css";

const GeistSans = localFont({
  src: "../fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
});

const GeistMono = localFont({
  src: "../fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${GeistMono.variable} ${GeistSans.variable}`}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Foundations", "Semantics", "Components"],
      },
    },
  },
};

export default preview;
