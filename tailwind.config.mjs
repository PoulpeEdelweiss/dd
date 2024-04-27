
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{md,astro,vue,js}'],
	theme: {
		screens: {
			'sm': '576px',
			'md': '960px',
      		'lg': '1440px',
      
			
		  },
		extend: {
			fontFamily: {
				body: ['Montserrat', ...defaultTheme.fontFamily.sans],
				"second": ['Monoton', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				sm: ['14px', '20px'],
				base: ['16px', '24px'],
				lg: ['20px', '28px'],
				xl: ['24px', '32px'],
			  },
		},
	},
	plugins: [],
}
