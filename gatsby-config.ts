import type { GatsbyConfig } from 'gatsby';

const siteMetadata: GatsbyConfig['siteMetadata'] = {
  title: 'Sealworks Interactive Studios',
  description:
    'We create interactive experiences by blending creative and technical expertise to develop amazing solutions.',
  siteUrl: 'https://www.sealworks.com',
  stagingSiteUrl:
    'http://sealworks-st-bucket.s3-website-us-east-1.amazonaws.com',
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
      metaDescription: '',
    },
  ],
};

const config: GatsbyConfig = {
  siteMetadata,
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
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    // "gatsby-plugin-google-gtag",
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: {
          xs: '(min-width: 320px)',
          sm: '(min-width: 640px)',
          md: '(min-width: 768px)',
          lg: '(min-width: 1024px)',
          xl: '(min-width: 1280px)',
          '2xl': '(min-width: 1536px)',
        },
      },
    },
    'gatsby-plugin-sitemap',
    ...(process.env.GATSBY_ACTIVE_ENV ? ['@sentry/gatsby'] : []),
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap-index.xml`,
        resolveEnv: () => process.env.GATSBY_ACTIVE_ENV || 'production',
        env: {
          development: {
            policy: [{ userAgent: '*', allow: '/' }],
            // policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          placeholder: 'none',
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
        name: siteMetadata.title,
        short_name: 'Sealworks',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#0033A0', // This should match your site's primary color
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true, // Print removed selectors and processed file names
        tailwind: true, // Enable tailwindcss support
        whitelist: ['#sentry-feedback'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'json', 'js', 'svg'],
      },
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'sealworks-st-bucket',
        protocol: 'https',
        hostname: 'sealworks-st-bucket.s3.amazonaws.com',
        params: {
          '**/**.gz': {
            ContentEncoding: 'gzip',
            CacheControl: 'max-age=31536000, public',
          },
        },
      },
    },
  ],
};

export default config;
