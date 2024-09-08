import React, { FC, PropsWithChildren } from 'react';

import { useSiteMetadata } from '@/hooks/useSiteMetadata';

interface SEOProps extends PropsWithChildren {
  title?: string;
  description?: string;
  keywords?: string;
}
const defaultTitle = 'SealWorks';

export const SEO: FC<SEOProps> = ({
  children,
  title,
  description,
  keywords,
}) => {
  const siteMetadata = useSiteMetadata();

  if (!siteMetadata) return <></>;

  return (
    <>
      <title id="siteTitle">
        {[title, defaultTitle].filter(Boolean).join(' - ')}
      </title>
      {description && (
        <meta id="desc" name="description" content={description} />
      )}
      {keywords && <meta id="keywr" name="keywords" content={keywords} />}
      <html lang="en" />
      <meta name="language" content="EN" />
      <meta name="copyright" content={siteMetadata.copy} />
      {/*<link rel="canonical" href={siteMetadata.siteUrl} />*/}
      <meta name="robots" content="index,follow" />
      <meta name="author" content={siteMetadata.title} />

      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:url" content={siteMetadata.siteUrl} />

      {children}
    </>
  );
};
