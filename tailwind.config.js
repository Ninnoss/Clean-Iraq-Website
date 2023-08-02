/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#548C67',
        primaryOrange: '#E4AA58',
        lightPeach: '#FDF8F2',
        highlightBlack: '#202020',
        highlightGrey: '#FAFBFA',
      },
      fontFamily: {
        arabicRegular: ['arabic-regular', 'serif'],
        arabicMedium: ['arabic-medium', 'sans-serif'],
        arabicThin: ['arabic-thin', 'sans-serif'],
        arabicLight: ['arabic-light', 'sans-serif'],
        arabicExtraLight: ['arabic-extra-light', 'sans-serif'],
        arabicSemibold: ['arabic-semibold', 'sans-serif'],
        arabicBold: ['arabic-bold', 'sans-serif'],
        EnglishPoppins: ['English-poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
