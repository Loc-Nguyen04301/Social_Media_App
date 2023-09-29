export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-text": 'var(--blue-text)',
        "main-color-text": "var(--main-color-text)",
        "sub-color-text": "var(--sub-color-text)",
        "color-border": "var(--color-border)",
        "color-modal": "var(--color-modal)"
      },

    },
  },
  plugins: [],
}