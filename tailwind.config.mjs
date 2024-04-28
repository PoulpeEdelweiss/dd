
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
				'SemiBold-h1-desc' : ['64px', {
					lineHeight: '77px',
					fontWeight: '600',
				}],
				'Regular-h2-desc' : ['32px',{
					lineHeight: '38px',
					fontWeight: '400',
				}],
				'Regular-h3-desc': ['24px', {
					lineHeight: '29px',
					fontWeight: '400',
				}],
				'Light-h4-desc': ['20px', {
					lineHeight: '24px',
					fontWeight: '300',
				}],
				'ExtraLight-h5-desc': ['16px', {
					lineHeight: '19px',
					fontWeight: '200',
				}],
				'Regular-menu': ['16px', {
					lineHeight: '19px',
					fontWeight: '400',
				}],
				'SemiBold-button' : ['16px', {
					lineHeight: '19px',
					fontWeight: '600',
				}],
				'SemiBold-h1-mob' : ['24px', {
					lineHeight: '29px',
					fontWeight: '600',
				}],
				'Regular-h2-mob' : ['20px',{
					lineHeight: '24px',
					fontWeight: '400',
				}],
				'Regular-h3-mob' : ['16px',{
					lineHeight: '19px',
					fontWeight: '400',
				}],
				'Light-h4-mob': ['14px', {
					lineHeight: '17px',
					fontWeight: '300',
				}],

			  },

		},
	},
	plugins: [],
}
