import type { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout } from '@/components/common/PageLayout/PageLayout';

const WorkPage = ({ location }: PageProps) => {
  return (
    <PageLayout location={location}>
      <hr />
      {/* Add more sections/components here */}
    </PageLayout>
  );
};

export default WorkPage;
