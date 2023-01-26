/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xsm: "360px",
			sm: "428px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
    },
    container: {
      center: true,
    },
		extend: {},
	},
	plugins: [],
};
