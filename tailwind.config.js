/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0033A0',
        secondary: '#E60000',
        accent: '#FFD700',
        background: '#FFFFFF',
        textPrimary: '#333333',
        textSecondary: '#666666',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'outline-yellow': '0 0 0 3px rgba(255, 215, 0, 0.5)', // Example for a yellow outline shadow
      },
    },
  },
  plugins: [],
};
