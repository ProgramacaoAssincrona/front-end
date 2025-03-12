import type { Config } from "tailwindcss";

export const colors = {
  primary: "#083365",
  secondary: "#FF9800",
  text: "#5D5D5F",
  title: "#10284A",
  white: "#FFFFFF",
  "white-2": "#F4F4F6",
  "dark-blue": "#001489",
  "dark-blue-2": "#083365",
  "light-blue": "#1976D2",
  footer: "#2F3245",
  cyan: "#00C7C0",
  darkDisabled: "rgb(0,0,0, 0.26)",
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: "#root",
  theme: {
    extend: {
      colors,
      //   screens: {
      //     '2xl': '1600px'
      //   },
      //   boxShadow: {
      //     card: '0px 1px 5px 0px #00000033',
      //     dialog: '0px 4px 4px 0px #00000040',
      //     'printed-material': '0px 0px 3px 0px #00000040'
      //   },
      //   letterSpacing: {
      //     title: '0.313rem'
      //   }
    },
  },
  plugins: [],
} satisfies Config;
