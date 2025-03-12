/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2062F4", // Adjust based on the Theme's Primary Color
        secondary: "#FF9800",
        dark: "#111827",
        light: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
