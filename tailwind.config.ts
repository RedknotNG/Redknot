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
          700: "#6941C6",
        },
        secondary_red: {
          0: "#FEEFF2",
          25: "#FADAE1",
          50: "#ED8296",
          100: "#DF1C41",
          200: "#95122B",
          300: "#710E21",
        },
        text: {
          white: "#FFFFFF",
          disabled: "#A4ABB8",
          subdued: "#808897",
          normal: "#666D80",
          muted: "#353849",
          loud: "#0D0D12",
        },
        background: {
          white: "#FFFFFF",
          disabled: "#F8F9FB",
          normal: "#F6F8FA",
          hover: "#ECEFF3",
          pressed: "#DFE1E6",
          loud: "#0D0D12",
        },

        border: {
          white: "#FFFFFF",
          disabled: "#F6F8FA",
          normal: "#ECEFF3",
          hover: "#DFE1E6",
          pressed: "#C1C7CF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
