/** @type {import('tailwindcss').Config} */

const plugin=require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      fontSize:{
        base:"200px"
      },
      colors:{
        ankit:{
          100:"#49e659",
          200:"#434254"
        }
      },
      padding:{
        a1:"10%",
        a2:"20%",
        a3:"30%",
        a4:"40%",
        a5:"50%",
        a6:"60%",
        a7:"70%",
        a8:"80%",
      },
      fontFamily:{
        my:"'Concert One', cursive",
        my2:"'Noto Sans TC', sans-serif"
      }
    },
  },
  plugins: [
  //   plugin(function({addBase,theme}){
  //   addBase({
  //     'h1':{
  //       fontSize:theme('fontSize.4xl')
  //     }
  //   })
  // })
],
}

