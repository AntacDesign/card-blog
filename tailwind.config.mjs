/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				background: '#F2F5F9',
				bgCard:'#FFFFFF',
				tColor: '#111729',
				pColor: '#677489'
			}
		},
	},
	plugins: [],
}
