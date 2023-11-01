/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./lib/**/*.{js,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				satoshi: 'Satoshi-Bold'
			},
			colors: {
				main: { 500: '#6E3FFE' }
			}
		}
	},
	plugins: []
};

