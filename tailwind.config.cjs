const forms = require('@tailwindcss/forms')
const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('daisyui'),
	],
};

module.exports = config;
