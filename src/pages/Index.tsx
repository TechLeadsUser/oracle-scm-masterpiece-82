import React from 'react';
import HeroSection from '@/components/HeroSection';
import TrainerProfile from '@/components/TrainerProfile';
import ScheduleSection from '@/components/ScheduleSection';
import AudienceSection from '@/components/AudienceSection';
import BenefitsSection from '@/components/BenefitsSection';
import PricingSection from '@/components/PricingSection';
import MobileAppSection from '@/components/MobileAppSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import LeadFormSection from '@/components/LeadFormSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags would be handled by helmet or similar in a real app */}
      <main>
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Trainer Profile Section */}
        <section id="trainer">
          <TrainerProfile />
        </section>

        {/* Schedule Section */}
        <section id="schedule">
          <ScheduleSection />
        </section>

        {/* Target Audience Section */}
        <section id="audience">
          <AudienceSection />
        </section>

        {/* Benefits Section */}
        <section id="benefits">
          <BenefitsSection />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <PricingSection />
        </section>

        {/* Mobile App Section */}
        <section id="mobile-app">
          <MobileAppSection />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQSection />
        </section>

        {/* Lead Form Section */}
        <section id="demo">
          <LeadFormSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
