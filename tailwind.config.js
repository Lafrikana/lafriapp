module.exports = {
	darkMode: 'class',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			'primary': '#8F5919',
			'secondary': '#DED319',
			'blue': '#1fb6ff',
			'purple': '#7e5bef',
			'pink': '#ff49db',
			'orange': '#ff7849',
			'green': '#13ce66',
			'yellow': '#ffc82c',
			'gray-dark': '#273444',
			'gray': '#8492a6',
			'gray-light': '#d3dce6',
			'primary-dark': '#623805',
			'secondary-dark': '#b0a80c',
			'primary-light': '#cb822a',
			'secondary-light': '#f1e836',
			'grayer-light': '#F2F2F2'
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			spacing: {
				'128': '32rem',
				'144': '36rem',
				'150': '40rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			transitionDuration: {
				'0': '0ms',
				'1500': '1500ms',
				'2000': '2000ms',
			}
		}
	},
	plugins: []
}