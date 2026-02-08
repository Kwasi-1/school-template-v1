module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Legacy Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Components
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color (burgundy) - replaces all #800020, #890c25
        primary: {
          DEFAULT: "#890c25",
          foreground: "#ffffff",
          light: "#890c25/10", // For subtle backgrounds
          hover: "#6d091e", // Darker for hover states
        },
        // Secondary (light backgrounds) - replaces bg-gray-100, bg-gray-50
        secondary: {
          DEFAULT: "#f6f6f6",
          foreground: "#262626",
          hover: "#eeeeee",
        },
        // Dark sections
        dark: {
          DEFAULT: "#262626",
          foreground: "#ffffff",
          muted: "#737477", // For secondary text on dark
        },
        // Light backgrounds
        light: {
          DEFAULT: "#F9FAFB",
          foreground: "#262626",
        },
        // Footer specific
        footer: {
          DEFAULT: "#181818",
          foreground: "#ffffff",
          muted: "#9ca3af", // For secondary text in footer
        },
        // Text colors
        text: {
          primary: "#262626",
          secondary: "#737477",
          muted: "#9ca3af",
        },
      },
    },
  },
  plugins: [],
};
