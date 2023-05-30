/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   colors:{
      bg1:"#FFFBE9",
      bg2:"#CEAB93",
      bg3: "#E7E9EF",
      bg4 : "#AD8B73",
      black:{
        900:"#0f172a"
      }
   },
 
   
    extend: {
     
    },
  },
  plugins: [],
}
