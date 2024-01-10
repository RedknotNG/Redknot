import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: {
          0: "#F0EFFF",
          25: "#E5E4FB",
          50: "#A19CF0",
          100: "#5E56FF",
          200: "#312BA0",
          300: "#201C6C",
        },
        text: {
          white: "#FFFFFF",
          disabled: "#A4ABB8",
          subdued: "#808897",
          normal: "#666D80",
          muted: "#353849",
          loud: "#0D0D12",
        },
      },
    },
  },
  plugins: [],
};
export default config;
