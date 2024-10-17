/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/hero-medium.jpg')",
      },
      fontFamily: {
        poppins:['Poppins', 'sans-serif'],
        protest: ["Protest-Strike", 'sans-serif']
      }
    },
  },
  plugins: [],
}

