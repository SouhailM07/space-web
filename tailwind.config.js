/** @type {import(tailwindcss).Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0b",
        secondary: "#161618",
        accent: {
          cyan: "#00f5ff",
          purple: "#9d4edd",
          gold: "#ffb703",
        },
        space: {
          900: "#020205",
          800: "#0a0b1e",
          700: "#1a1c3a",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      }
    },
  },
  plugins: [],
};
