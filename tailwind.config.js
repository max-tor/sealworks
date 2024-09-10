// eslint-disable-next-line @typescript-eslint/no-require-imports
const flowbite = require('flowbite-react/tailwind');

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  safelist: [
    {
      pattern: /bg-(red|yellow|blue)/,
    },
    {
      pattern: /(text|font)-*/,
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
        biorhyme: ['BioRhyme', 'serif'],
        readexpro: ['Readex Pro', 'sans-serif'],
        dmmono: ['DM Mono', 'monospace'],
        b612mono: ['B612 Mono', 'monospace'],
        bethellen: ['Beth Ellen', 'cursive'],
        kalam: ['Kalam', 'cursive'],
        indieflower: ['Indie Flower', 'cursive'],
        craftygirls: ['Crafty Girls', 'cursive'],
        dotgothic16: ['DotGothic16', 'sans-serif'],
        bubblerone: ['Bubbler One', 'sans-serif'],
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
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [flowbite.plugin()],
};
