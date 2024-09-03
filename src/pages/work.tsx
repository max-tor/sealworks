import type { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout } from '@/components/common/PageLayout/PageLayout';
import { TailoredWorkBanner } from '@/components/work/TailoredWorkBanner';

const WorkPage = ({ location }: PageProps) => {
  return (
    <PageLayout location={location}>
      <TailoredWorkBanner />
      {/* Add more sections/components here */}
    </PageLayout>
  );
};

export default WorkPage;
