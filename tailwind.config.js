/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				blink: {
				  '0%': { opacity: '1' },
				  '50%': { opacity: '0' },
				  '100%': { opacity: '1' },
				}
			  },	
			  spacing:{
				'34': '8.5rem',
			  },
			
			colors: {

				"dark-layer-1": "rgb(40,40,40)",
				"dark-layer-2": "rgb(26,26,26)",
				"dark-label-2": "rgba(239, 241, 246, 0.75)",
				"dark-divider-border-2": "rgb(61, 61, 61)",
				"dark-fill-2": "hsla(0,0%,100%,.14)",
				"dark-fill-3": "hsla(0,0%,100%,.1)",
				"dark-gray-6": "rgb(138, 138, 138)",
				"dark-gray-7": "rgb(179, 179, 179)",
				"gray-8": "rgb(38, 38, 38)",
				"dark-gray-8": "rgb(219, 219, 219)",
				"brand-orange": "rgb(255 161 22)",
				"brand-orange-s": "rgb(193, 122, 15)",
				"dark-yellow": "rgb(255 192 30)",
				"dark-pink": "rgb(255 55 95)",
				"olive": "rgb(0, 184, 163)",
				"dark-green-s": "rgb(44 187 93)",
				"dark-blue-s": "rgb(10 132 255)",
			},
			backgroundImage: theme => ({
				'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
				'gradient-linear': 'linear-gradient(90deg, var(--tw-gradient-stops))',
			  }),
			  backgroundClip: {
				'text': 'text',
			  },
			},
			animation: {
				blink: 'blink 0.8s infinite',
			  },
		},
	variants: {
		extend: {
			backgroundImage: ['hover', 'focus'],
			backgroundClip: ['hover', 'focus'],
		},
	},
	plugins: [],
};