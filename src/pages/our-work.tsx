import type { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout } from '@/components/common/PageLayout/PageLayout';
import { SEO } from '@/components/common/SEO';
import { AdaptiveLearning } from '@/components/our-work/AdaptiveLearning';
import { CustomCourses } from '@/components/our-work/CustomCourses';
import { DigitalHubs } from '@/components/our-work/DigitalHubs';
import { Experience } from '@/components/our-work/Experience';
import { LearningPlatforms } from '@/components/our-work/LearningPlatforms';
import { Onboarding } from '@/components/our-work/Onboarding';
import { PrototypeFeedback } from '@/components/our-work/PrototypeFeedback';
import { TailoredWorkBanner } from '@/components/our-work/TailoredWorkBanner';
import { UniqueInteractions } from '@/components/our-work/UniqueInteractions';
import { UniqueRecipeSection } from '@/components/our-work/UniqueRecipeSection';

export const Head = () => (
  <SEO
    title="Our Work"
    description="ealWorks offers innovative digital solutions tailored to meet your business needs. Explore our work and see how we transform ideas into impactful projects"
    keywords="creative projects, digital solutions, web development, mobile applications, branding services, design portfolio, client projects, SealWorks portfolio, custom software, digital transformation, creative agency, IT solutions, app development, graphic design, branding strategy"
  />
);

const WorkPage = ({ location }: PageProps) => {
  return (
    <PageLayout location={location}>
      <TailoredWorkBanner />
      <UniqueRecipeSection />
      <Experience />
      <CustomCourses />
      <LearningPlatforms />
      <DigitalHubs />
      <Onboarding />
      <PrototypeFeedback />
      <AdaptiveLearning />
      <UniqueInteractions />
    </PageLayout>
  );
};

export default WorkPage;
