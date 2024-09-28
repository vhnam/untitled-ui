import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Config = {
  content: ['./src/stories/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  presets: [sharedConfig],
};
export default config;
