import React from 'react';
import { NavigationHeader } from './NavigationHeader';
import { HeroSection } from './HeroSection';
import { CustomerLogosCarousel } from './CustomerLogosCarousel';
import { IntegrationShowcase } from './IntegrationShowcase';
import { PleoBuyerSpend } from './PleoBuyerSpend';
import { CustomerStoriesHero } from './CustomerStoriesHero';
import { EmailSignupForm } from './EmailSignupForm';
import Footer from './Footer';
type CombinedLandingPageProps = {
  className?: string;
};

/**
 * CombinedLandingPage - A complete landing page combining:
 * 1. Navigation Header
 * 2. Hero Section
 * 3. Customer Logos Carousel
 * 4. Integration Showcase
 * 5. Pleo Buyer Spend
 * 6. Customer Stories Hero
 * 7. Email Signup Form
 * 8. Footer
 */
export const CombinedLandingPage = ({
  className
}: CombinedLandingPageProps) => {
  return <div className={className}>
      <NavigationHeader />
      <main>
        <HeroSection />
        <CustomerLogosCarousel />
        <IntegrationShowcase />
        <PleoBuyerSpend />
        <CustomerStoriesHero />
        <EmailSignupForm />
      </main>
      <Footer />
    </div>;
};