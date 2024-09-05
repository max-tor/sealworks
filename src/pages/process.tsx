import type { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout } from '@/components/common/PageLayout/PageLayout';
import { ProcessHead } from '@/components/process/ProcessHead/ProcessHead';

const ProcessPage = ({ location }: PageProps) => {
  return (
    <PageLayout location={location}>
      <ProcessHead />
    </PageLayout>
  );
};

export default ProcessPage;
