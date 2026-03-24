/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Tambahkan ini agar folder pages terbaca
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
