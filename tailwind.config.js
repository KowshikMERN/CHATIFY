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
        'praimary' : '#5F35F5',
        'border' : 'rgba(17, 23, 93, 0.3)',
        'loginBorder' : 'rgba(3, 1, 76, 0.3)',
        'loginEmail' : 'rgba(3, 1, 76, 0.5)',
        'shadow' : '0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
        'wide' : 'rgba(77, 77, 77, 0.75)',
        'overlay' : 'rgba(0, 0, 0, 0.41)'

      }
    },
  },
  plugins: [],
}
