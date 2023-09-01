import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        primary30: 'rgb(var(--color-primary)/0.30)',
        primary50: 'rgb(var(--color-primary)/0.50)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
        tertiary80: 'rgb(var(--color-tertiary) / 0.80)',
      },
      boxShadow: {
        custom: '0px 0px 30px rgb(var(--color-primary)/0.30)',
      },
    },
  },
  plugins: [],
};
export default config;
