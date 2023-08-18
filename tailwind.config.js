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
        ArabicIBMPlexSans: ['IBMPlexSansArabic', 'serif'],
        EnglishPoppins: ['English-poppins', 'sans-serif'],
      },
      fontSize: {
        // Headings
        'Heading-1': [
          '3.375rem',
          {
            lineHeight: '4.375rem',
            fontWeight: '700',
          },
        ],
        'Heading-2': [
          '2.625rem',
          {
            lineHeight: '3.75rem',
            fontWeight: '700',
          },
        ],
        'Heading-3': [
          '2rem',
          {
            lineHeight: '3rem',
            fontWeight: '700',
          },
        ],
        'Heading-4': [
          '1.5rem',
          {
            lineHeight: '2rem',
            fontWeight: '700',
          },
        ],
        'Heading-5': [
          '1.25rem',
          {
            lineHeight: '2rem',
            fontWeight: '700',
          },
        ],
        'Heading-6': [
          '1.125rem',
          {
            lineHeight: '2rem',
            fontWeight: '700',
          },
        ],
        // Body
        'Body-L': [
          '1.125rem',
          {
            lineHeight: '2.125rem',
            fontWeight: '400',
          },
        ],
        'Body-M': [
          '1rem',
          {
            lineHeight: '2rem',
            fontWeight: '400',
          },
        ],
        'Body-S': [
          '0.875rem',
          {
            lineHeight: '1.875rem',
            fontWeight: '400',
          },
        ],
        'Body-XS': [
          '0.75rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '400',
          },
        ],
        'Body-XXS': [
          '0.625rem',
          {
            lineHeight: '1.625rem',
            fontWeight: '400',
          },
        ],
        // Subtitle
        'Subtitile-M': [
          '1rem',
          {
            lineHeight: '2rem',
            fontWeight: '500',
          },
        ],
        'Subtitile-S': [
          '0.875rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '500',
          },
        ],
        // Button
        'Button-L': [
          '1.25rem',
          {
            lineHeight: '2.25rem',
            fontWeight: '500',
          },
        ],
        'Button-M': [
          '1rem',
          {
            lineHeight: '2rem',
            fontWeight: '500',
          },
        ],
        'Button-S': [
          '0.875rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '500',
          },
        ],

        Caption: [
          '1.25rem',
          {
            lineHeight: '2.25rem',
            fontWeight: '700',
          },
        ],
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
};
