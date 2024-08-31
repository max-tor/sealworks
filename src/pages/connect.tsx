import type { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout } from '@/components/common/PageLayout/PageLayout';
import { CapabilitiesPresentation } from '@/components/contact/CapabilitiesPresentation';
import { ConnectBanner } from '@/components/contact/ConnectBanner';
import { ContactDetails } from '@/components/contact/ContactDetails';
import { DiscussChallengeSection } from '@/components/contact/DiscussChallengeSection';

const ConnectPage = ({ location }: PageProps) => {
  return (
    <PageLayout location={location}>
      <ConnectBanner />
      <CapabilitiesPresentation />
      <DiscussChallengeSection />
      <ContactDetails />
    </PageLayout>
  );
};

export default ConnectPage;
