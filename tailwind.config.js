module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    {
      pattern: /bg-(red|yellow|blue)/,
    },
    {
      pattern: /(rounded|flex|bottom|translate|text|font)-*/,
    },
    {
      pattern: /(top|left|w|h)-*/,
    },
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
        yellow: '#F7D900',
        yellowLight: '#FFEE73',
        yellowSticky: '#FFF6C8',
        yellowStickyLight: '#FFF4A0',
        black: '#000000',
        blue: '#002D9A',
        blueDark: '#092466',
        blueDusky: '#00206E',
        blueSticky: '#C8F2FF',
        blueStickyBright: '#BCFFF7',
        roseSticky: '#FAD1FE',
        red: '#CC0000',
        redSticky: '#FFC8C8',
        redDark: '#A20000',
        gray: '#F0F0F0',
        grayDark: '#F5F5F5',
        grayLight: '#DBD9D9',
        gainsboro: '#DADADA',
        foreground: 'hsl(0 0 100%)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        annie: ['Annie Use Your Telescope', 'cursive'],
      },
      width: {
        'underlined-text': 'calc(100% + 6px)',
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
        img: '-10px 10px 0px 0px #dadada',
      },
      dropShadow: {
        lxl: '-20px 0 15px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
