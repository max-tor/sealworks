import type { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout } from '@/components/common/PageLayout/PageLayout';

const IndexPage = ({ location }: PageProps) => {
  return (
    <PageLayout location={location}>
      <h1>Welcome page</h1>
    </PageLayout>
  );
};

export default IndexPage;
