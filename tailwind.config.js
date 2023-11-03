/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./lib/**/*.{js,jsx,tsx}'],
   darkMode: 'class',
   theme: {
      extend: {
         fontFamily: {
            satoshi: 'Satoshi-Bold'
         },
         colors: {
            main: { 500: '#6E3FFE' },
            stone: {
               350: '#cecbc9'
            }
         }
      }
   },
   plugins: []
};

