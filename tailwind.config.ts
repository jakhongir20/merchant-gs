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
          800: "#344054",
          900: "#667085",
          1000: "#F2F4F7",
          1100: "#101828",
          1200: "#E1E3EA",
        },
        red: {
          DEFAULT: "#E9532F",
          100: "#F1416C",
          200: "#B42318",
          300: "#D9214E",
          400: "#FFF5F8",
          500: "#FFEDF2",
          600: "#FEF3F2",
          10: "rgba(233, 83, 47, 0.10)",
        },
        green: {
          DEFAULT: "#38BA4E",
          100: "#50CD89",
          200: "#E8FFF3",
          300: "#ECFDF3",
          400: "#027A48",
          500: "#12B76A",
          600: "#47BE7D",
          700: "#DAFFEC",
        },
        blue: {
          DEFAULT: "#0D6EFD",
          100: "#3E97FF",
          200: "#EEF6FF",
          300: "#2884EF",
        },
        orange: {
          DEFAULT: "#D3A400",
          100: "#F4BE00",
          200: "#FFF8DD",
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
        "30px": "30px",
      },
      lineHeight: {
        "15": "15px",
        "18": "18px",
      },
      display: {
        "d-table": "table",
      },
      boxShadow: {
        card: "0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)",
      },
    },
    // screens: {
    //   // sm: '600px',
    //   // md: '728px',
    //   lg: "980px",
    //   // xl: '1240px',
    // },
  },
  plugins: [tailwindcssAnimate],
};
