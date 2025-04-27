module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Legacy Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2062F4",
        secondary: "#FF9800",
        dark: "#111827",
        light: "#F9FAFB",
        footer: "#181818",
      },
    },
  },
  plugins: [],
};
