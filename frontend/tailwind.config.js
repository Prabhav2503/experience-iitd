/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alumni: ['"Alumni Sans"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        akatab: ['Akatab', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
