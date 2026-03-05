/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      colors: {
        primary: '#e8ebf3',
        secondary: '#12777D',
        black: '#272D2D',
        white: '#e8ebf3',
        // lightBlue: "#149da3",
        lightBlue: '#12777D',
        transparentLightBlue: '#12777D50',
        purple: '#5C7DC1',
        green: '#9CE37D',
      },
    },
  },
  plugins: [],
};

