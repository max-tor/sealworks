import type { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout } from '@/components/common/PageLayout/PageLayout';
import { CustomCourses } from '@/components/work/CustomCourses';
import { DigitalHubs } from '@/components/work/DigitalHubs';
import { Experience } from '@/components/work/Experience';
import { LearningPlatforms } from '@/components/work/LearningPlatforms';
import { PrototypeFeedback } from '@/components/work/PrototypeFeedback';
import { TailoredWorkBanner } from '@/components/work/TailoredWorkBanner';
import { UniqueInteractions } from '@/components/work/UniqueInteractions';
import { UniqueRecipeSection } from '@/components/work/UniqueRecipeSection';

const WorkPage = ({ location }: PageProps) => {
  return (
    <PageLayout location={location}>
      <TailoredWorkBanner />
      <UniqueRecipeSection />
      <Experience />
      <CustomCourses />
      <LearningPlatforms />
      <DigitalHubs />
      <PrototypeFeedback />
      <UniqueInteractions />
    </PageLayout>
  );
};

export default WorkPage;
