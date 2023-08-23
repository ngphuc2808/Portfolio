/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgColor: '#202124',
        headerColor: '#3b3b3b',
        primaryColor: '#ffa825',
        headingColor: '#ffbd59',
        smallTextColor: '#cecece',
        darkColor: '#3d3d3d',
      },
      fontFamily: {
        bevietnam: ['Be Vietnam Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
