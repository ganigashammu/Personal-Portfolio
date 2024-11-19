/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        
          'custom-orange': '#DA7C25',  
          'custom-purple': '#B923E1',
           
      },
      scale: 
      {
         175 : '1.75',
         200:'2',
         250: '2.5',
        300: '3',
      },
    },
  },
  plugins: [],
  }