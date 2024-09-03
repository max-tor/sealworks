import { Link, Script } from 'gatsby';
import React from 'react';

import { Dot } from '@/components/common/Dot';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';

interface SocialLink {
  name: string;
  url: string;
  ariaLabel?: string;
}

export const BottomInformation = () => {
  const siteMetadata = useSiteMetadata();

  const {
    title,
    description,
    siteUrl,
    copy,
    address,
    contactPhone,
    contactType,
    email,
  } = siteMetadata;
  const social: SocialLink[] = siteMetadata.social || [];
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Set([2024, currentYear])).join(' — ');
  const sameAs = social.length > 0 && social.map((item) => item.url);

  return (
    <>
      <div className="my-5 flex justify-between gap-10 rounded-none font-roboto text-sm lg:my-14">
        <div className="basis-auto max-md:max-w-full">
          <span>
            ©{years} {copy}
          </span>
          <Dot />
          <span>{address}</span> <Dot />
          <a className="font-bold text-blue" href={`tel:${contactPhone}`}>
            {contactPhone}
          </a>
          <Dot />
          <span className="font-bold text-blue">{email}</span>
        </div>
        <nav className="basis-auto" aria-label="Footer navigation">
          {social.map(({ url, name, ariaLabel }, index) => (
            <React.Fragment key={url}>
              {index > 0 && <Dot />}
              <Link
                to={url}
                className="font-bold text-blue hover:underline"
                aria-label={ariaLabel}
              >
                {name}
              </Link>
            </React.Fragment>
          ))}
        </nav>
      </div>
      <Script id="LocalBusiness" type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "${title}",
          "description": "${description}",
          "url": "${siteUrl}",
          "logo": "${siteUrl}/images/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "${contactPhone}",
            "contactType": "${contactType}"
          },
          ${sameAs && JSON.stringify({ sameAs }, null, 2)}
        }
      `}</Script>
    </>
  );
};
