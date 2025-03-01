import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#111214",
          100: "#4B5057",
          200: "#F0F0F0",
        },
        gray: {
          DEFAULT: "#A1A5B7",
          100: "#7E8299",
          200: "#222529",
          300: "#F1F1F2",
          400: "#D8D8E5",
          500: "#3F4254",
          600: "#181C32",
          700: "#475467",
        },
        red: {
          DEFAULT: "#E9532F",
          100: "#F1416C",
          500: "#FFEDF2",
          10: "rgba(233, 83, 47, 0.10)",
        },
        green: {
          DEFAULT: "#38BA4E",
          100: "#50CD89",
          200: "#E8FFF3",
        },
        blue: {
          DEFAULT: "#0D6EFD",
          100: "#3E97FF",
          200: "#EEF6FF",
        },
        orange: {
          DEFAULT: "#FD7E14",
        },
        white: {
          DEFAULT: "#FFFFFF",
          20: "rgba(255, 255, 255, 0.20)",
        },
      },
      spacing: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "6px": "6px",
        "13px": "13px",
        "18px": "18px",
        "26px": "26px",
      },
      lineHeight: {
        "15": "15px",
        "18": "18px",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
