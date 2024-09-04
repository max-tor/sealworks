import type { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout } from '@/components/common/PageLayout/PageLayout';
import { CustomCourses } from '@/components/work/CustomCourses';
import { Experience } from '@/components/work/Experience';
import { TailoredWorkBanner } from '@/components/work/TailoredWorkBanner';
import { UniqueRecipeSection } from '@/components/work/UniqueRecipeSection';

const WorkPage = ({ location }: PageProps) => {
  return (
    <PageLayout location={location}>
      <TailoredWorkBanner />
      <Experience />
      <UniqueRecipeSection />
      <CustomCourses />
    </PageLayout>
  );
};

export default WorkPage;
