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
import { ProjectInquiry } from '@/components/our-work/ProjectInquiry';
import { PrototypeFeedback } from '@/components/our-work/PrototypeFeedback';
import { TailoredWorkBanner } from '@/components/our-work/TailoredWorkBanner';
import { UniqueInteractions } from '@/components/our-work/UniqueInteractions';
import { UniqueRecipeSection } from '@/components/our-work/UniqueRecipeSection';

export const Head = () => (
  <SEO
    title="our work"
    description="Explore our portfolio of innovative digital experiences at Sealworks Interactive Studios. From custom learning platforms to engaging digital solutions, see how our creative and technical expertise brings client visions to life. Discover the impactful work we've done for leading brands and learn how we can elevate your digital presence."
    keywords="Sealworks Interactive Studios, digital solutions, custom learning platforms, web development, creative technology, digital experiences, client portfolio, interactive design, digital projects, innovative solutions, our work, digital transformation"
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
      <ProjectInquiry />
    </PageLayout>
  );
};

export default WorkPage;
