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
    title="Connect"
    description="Connect with Sealworks Interactive Studios to take your project from concept to launch. From brainstorming workshops to project jam sessions, we help you scale and enhance your digital experience through expert design and development. Book a session today to discuss your needs."
    keywords="Sealworks, connect, digital experience, brainstorming workshops, project jam sessions, design and development, digital solutions, interactive studios, scale digital projects, workshops, project consultation, digital innovation, Sealworks Interactive Studios"
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
