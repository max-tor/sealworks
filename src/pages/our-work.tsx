import type { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout } from '@/components/common/PageLayout/PageLayout';
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
  <>
    <title>Our Work - SealWorks</title>
    <meta
      name="description"
      content="SealWorks offers innovative digital solutions tailored to meet your business needs. Explore our work and see how we transform ideas into impactful projects."
    />
  </>
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
