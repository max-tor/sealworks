import type { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { PageLayout } from '@/components/common/PageLayout/PageLayout';
import { SEO } from '@/components/common/SEO';

export const Head = () => (
  <SEO
    title="404"
    description=""
    keywords="Sealworks, connect, digital experience, brainstorming workshops, project jam sessions, design and development, digital solutions, interactive studios, scale digital projects, workshops, project consultation, digital innovation, Sealworks Interactive Studios"
  />
);

const NoPage = ({ location }: PageProps) => {
  return (
    <PageLayout location={location} footer="lite">
      <div className="relative mb-8 mt-4 flex flex-col-reverse items-center gap-10 lg:h-[62vh] lg:flex-row lg:justify-between">
        <div className="max-w-[512px] lg:w-1/2">
          <StaticImage src="../images/robot.png" alt="Robot" />
        </div>

        <div className="lg:w-[41%]">
          <p className="font-roboto text-base text-red">page not found</p>
          <h1 className="mb-8 font-roboto text-[66px] leading-[70px] text-blue">
            404
          </h1>
          <h2 className="font-roboto text-[40px] leading-[54px]">
            sorry about that! press the back button in your browser to return to
            the site.
          </h2>
        </div>
      </div>
    </PageLayout>
  );
};

export default NoPage;
