import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Sealworks Interactive Studios',
    description:
      'We create interactive experiences by blending creative and technical expertise to develop amazing solutions.',
    siteUrl: 'https://www.sealworks.com',
    copy: 'Sealworks, Inc',
    address: '31 West Ashland Street, Doylestown, PA 18901',
    contactPhone: '(800) 460-6494', // LocalBusiness schema at the footer
    contactType: 'Customer Service', // LocalBusiness schema at the footer
    email: 'info@sealworks.com',
    social: [
      {
        name: 'Client Area',
        url: 'https://sealworks.launchcycle.com/',
        ariaLabel: 'Client Area Page', //optional parameter
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nickfloro',
        ariaLabel: 'Follow us on LinkedIn',
      },
      {
        name: 'Blog',
        url: 'https://nickfloro.com/',
        ariaLabel: 'Visit our Blog',
      },
      {
        name: 'X (Twitter)',
        url: 'https://x.com/nickfloro',
        ariaLabel: 'Visit our X Twitter',
      },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@': 'src',
        },
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    // "gatsby-plugin-google-gtag",
    'gatsby-plugin-breakpoints',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-omni-font-loader',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          // formats: ['auto', 'webp'],
          placeholder: 'none',
          // quality: 90,
          // breakpoints: [750, 1080, 1366, 1920],
          // backgroundColor: 'transparent',
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sealworks Interactive Studios',
        short_name: 'Sealworks',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#0033A0', // This should match your site's primary color
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: [
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
        ],
        web: [
          {
            name: 'Roboto',
            file: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap',
          },
          {
            name: 'BioRhyme',
            file: 'https://fonts.googleapis.com/css2?family=BioRhyme&display=swap',
          },
          {
            name: 'Readex Pro',
            file: 'https://fonts.googleapis.com/css2?family=Readex+Pro&display=swap',
          },
          {
            name: 'DM Mono',
            file: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&display=swap',
          },
          {
            name: 'DotGothic16',
            file: 'https://fonts.googleapis.com/css2?family=DotGothic16&display=swap',
          },
          {
            name: 'B612 Mono',
            file: 'https://fonts.googleapis.com/css2?family=B612+Mono&display=swap',
          },
          {
            name: 'Beth Ellen',
            file: 'https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap',
          },
          {
            name: 'Kalam',
            file: 'https://fonts.googleapis.com/css2?family=Kalam&display=swap',
          },
          {
            name: 'Indie Flower',
            file: 'https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap',
          },
          {
            name: 'Crafty Girls',
            file: 'https://fonts.googleapis.com/css2?family=Crafty+Girls&display=swap',
          },
          {
            name: 'Bubbler One',
            file: 'https://fonts.googleapis.com/css2?family=Bubbler+One&display=swap',
          },
          {
            name: 'Annie',
            file: 'https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap',
          },
        ],
      },
    },
  ],
};

export default config;
