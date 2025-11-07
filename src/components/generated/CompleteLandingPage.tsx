"use client";

/**
 * Complete Landing Page Component
 * 
 * This is a fully self-contained landing page with all sections.
 * You can use this as a standalone component or copy sections individually.
 * 
 * Sections included:
 * - Header (sticky navigation)
 * - Hero Section (with video background)
 * - Features Section (6 key features)
 * - How It Works (4-step process)
 * - Testimonials (customer reviews)
 * - Pricing (3 pricing tiers)
 * - FAQ (accordion-style)
 * - CTA Section (call-to-action)
 * - Footer (links and social)
 */
import React from 'react';
import AnnouncementBanner from './AnnouncementBanner';
import Header from './Header';
import { HeroSection } from './HeroSection';
import FeaturesSection from './FeaturesSection';
import HowItWorksSection from './HowItWorksSection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import Footer from './Footer';
export interface CompleteLandingPageProps {
  // Brand customization
  brandName?: string;

  // Announcement banner
  announcementMessage?: string;
  announcementHighlight?: string;
  announcementCTA?: string;
  announcementHref?: string;
  showAnnouncement?: boolean;

  // Hero section
  heroTitle?: string;
  heroDescription?: string;

  // Features section
  featuresTitle?: string;
  featuresSubtitle?: string;

  // Pricing section
  pricingTitle?: string;
  pricingSubtitle?: string;

  // Customize any section by passing props
  announcementProps?: any;
  headerProps?: any;
  heroProps?: any;
  featuresProps?: any;
  howItWorksProps?: any;
  testimonialsProps?: any;
  pricingProps?: any;
  faqProps?: any;
  ctaProps?: any;
  footerProps?: any;
}
export default function CompleteLandingPage({
  brandName = "YourBrand",
  announcementMessage,
  announcementHighlight,
  announcementCTA,
  announcementHref,
  showAnnouncement = true,
  heroTitle,
  heroDescription,
  featuresTitle,
  featuresSubtitle,
  pricingTitle,
  pricingSubtitle,
  announcementProps = {},
  headerProps = {},
  heroProps = {},
  featuresProps = {},
  howItWorksProps = {},
  testimonialsProps = {},
  pricingProps = {},
  faqProps = {},
  ctaProps = {},
  footerProps = {}
}: CompleteLandingPageProps) {
  return <div className="w-full min-h-screen bg-white">
      {/* Announcement Banner */}
      {showAnnouncement && <AnnouncementBanner message={announcementMessage} highlightText={announcementHighlight} ctaText={announcementCTA} ctaHref={announcementHref} {...announcementProps} />}
      
      {/* Sticky Navigation Header */}
      <Header logoText={brandName} {...headerProps} />
      
      {/* Hero Section with Video */}
      <HeroSection title={heroTitle} description={heroDescription} {...heroProps} />
      
      {/* Features Grid Section */}
      <FeaturesSection title={featuresTitle} subtitle={featuresSubtitle} {...featuresProps} />
      
      {/* How It Works Process */}
      <HowItWorksSection {...howItWorksProps} />
      
      {/* Customer Testimonials */}
      <TestimonialsSection {...testimonialsProps} />
      
      {/* Pricing Plans */}
      <PricingSection title={pricingTitle} subtitle={pricingSubtitle} {...pricingProps} />
      
      {/* FAQ Accordion */}
      <FAQSection {...faqProps} />
      
      {/* Final Call-to-Action */}
      <CTASection {...ctaProps} />
      
      {/* Footer with Links */}
      <Footer logoText={brandName} {...footerProps} />
    </div>;
}

// Export individual sections for modular use
export { AnnouncementBanner, Header, HeroSection, FeaturesSection, HowItWorksSection, TestimonialsSection, PricingSection, FAQSection, CTASection, Footer };