/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffbe33',
        secondary: '#222831',
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
