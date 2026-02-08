module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Legacy Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#890c25",
        secondary: "#f6f6f6",
        dark: "#262626",
        light: "#F9FAFB",
        footer: "#181818",
      },
    },
  },
  plugins: [],
};
