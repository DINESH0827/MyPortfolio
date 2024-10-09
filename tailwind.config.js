/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import { MdBorderColor } from 'react-icons/md'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary' : '#56169E',
        'secondary' : '#230a7a'


      }
    },
    fontFamily: {
      'hero-font': 'Sriracha'
    }
  },
  plugins: [daisyui],
}