/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#42b3e4",
        brandPink: "#ffced7",
        brandWhite: "#ffffff"
      }
    }
  },
  plugins: []
}
