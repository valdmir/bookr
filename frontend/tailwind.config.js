/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0d7ff2",
        "background-light": "#f5f7f8",
        "background-dark": "#101922",
        "foreground-light": "#ffffff",
        "foreground-dark": "#182431",
        "text-light-primary": "#111418",
        "text-dark-primary": "#f0f2f5",
        "text-light-secondary": "#60758a",
        "text-dark-secondary": "#a0aec0",
        "border-light": "#f0f2f5",
        "border-dark": "#2c3e50"
      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"]
      },
      borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
    },
  },
  plugins: [],
}
