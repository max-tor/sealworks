import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Sealworks Interactive Studios',
    siteUrl: 'https://www.yourdomain.tld',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    // "gatsby-plugin-google-gtag",
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-omni-font-loader',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
            file: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
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
            name: 'Annie Use Your Telescope',
            file: 'https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap',
          },
        ],
      },
    },
  ],
};

export default config;
