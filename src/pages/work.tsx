import type { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout } from '@/components/common/PageLayout/PageLayout';
import { Experience } from '@/components/work/Experience';
import { TailoredWorkBanner } from '@/components/work/TailoredWorkBanner';

const WorkPage = ({ location }: PageProps) => {
  return (
    <PageLayout location={location}>
      <Experience />
      <TailoredWorkBanner />
    </PageLayout>
  );
};

export default WorkPage;
