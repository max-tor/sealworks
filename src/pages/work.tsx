import type { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout } from '@/components/common/PageLayout/PageLayout';
import { TailoredWorkBanner } from '@/components/work/TailoredWorkBanner';
import { Experience } from '@/components/work/Experience';
import { UniqueRecipeSection } from '@/components/work/UniqueRecipeSection';

const WorkPage = ({ location }: PageProps) => {
  return (
    <PageLayout location={location}>
      <TailoredWorkBanner />
      <Experience />
      <UniqueRecipeSection />
    </PageLayout>
  );
};

export default WorkPage;
