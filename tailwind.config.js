/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['Nunito', ' sans-serif'],
        'sans': ['Open Sans', ' sans-serif'],
        'Poppins': ['Poppins', ' sans-serif']       
      },
      colors:{
        'praimary':'#5F35F5',
        'border':'rgba(17, 23, 93, 0.3)',
        'loginBorder':'rgba(3, 1, 76, 0.3)',
        'loginEmail':'rgba(3, 1, 76, 0.5)',

      }
    },
  },
  plugins: [],
}
