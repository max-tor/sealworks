import type { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout } from '@/components/common/PageLayout/PageLayout';
import { SEO } from '@/components/common/SEO';
import { CapabilitiesPresentation } from '@/components/connect/CapabilitiesPresentation';
import { ConnectBanner } from '@/components/connect/ConnectBanner';
import { ContactDetails } from '@/components/connect/ContactDetails';
import { DiscussChallengeSection } from '@/components/connect/DiscussChallengeSection';

export const Head = () => (
  <SEO
    title="Connect"
    description="Explore interactive and personalized learning experiences with Connect. Enhance your reading and comprehension skills through engaging video scenarios, quizzes, and detailed feedback to achieve academic success."
    keywords="Sealworks, connect, digital experience, brainstorming workshops, project jam sessions, design and development, digital solutions, interactive studios, scale digital projects, workshops, project consultation, digital innovation, Sealworks Interactive Studios"
  />
);

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
