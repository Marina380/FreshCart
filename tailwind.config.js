/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {


    extend: {
      screens: {
        'lsm': '300px',
      },
      colors :{
       'main' : '#0AAD0A',
       "logo" : '#B72E76'
      }
    },
  },
  plugins: [],
};
