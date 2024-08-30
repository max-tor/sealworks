import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const metaData = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
          siteUrl
          copy
          address
          contactPhone
          contactType
          email
          social {
            name
            url
            ariaLabel
          }
        }
      }
    }
  `);

  return metaData.site?.siteMetadata;
};
