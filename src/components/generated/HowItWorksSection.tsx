"use client";

import React from 'react';
export interface Step {
  number: number;
  title: string;
  description: string;
}
export interface HowItWorksSectionProps {
  title?: string;
  subtitle?: string;
  steps?: Step[];
}
export default function HowItWorksSection({
  title = "How It Works",
  subtitle = "Get started in minutes with our simple onboarding process",
  steps = [{
    number: 1,
    title: "Sign Up",
    description: "Create your account in seconds. No credit card required to get started."
  }, {
    number: 2,
    title: "Set Up Your Team",
    description: "Invite team members and set spending limits with custom approval workflows."
  }, {
    number: 3,
    title: "Issue Cards",
    description: "Generate virtual or physical cards instantly with built-in controls."
  }, {
    number: 4,
    title: "Track & Optimize",
    description: "Monitor spending in real-time and gain insights to optimize your budget."
  }]
}: HowItWorksSectionProps) {
  return <section id="how-it-works" className="w-full bg-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            {subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" style={{
          top: '80px',
          left: '12.5%',
          right: '12.5%',
          width: '75%'
        }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => <div key={index} className="relative flex flex-col items-center text-center">
                {/* Number Circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}