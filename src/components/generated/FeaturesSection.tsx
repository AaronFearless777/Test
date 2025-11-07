"use client";

import React from 'react';
export interface Feature {
  icon?: string;
  title: string;
  description: string;
}
export interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}
export default function FeaturesSection({
  title = "Powerful Features",
  subtitle = "Everything you need to manage your business spending efficiently",
  features = [{
    icon: "💳",
    title: "Smart Cards",
    description: "Issue virtual and physical cards with built-in spending controls and real-time tracking."
  }, {
    icon: "📊",
    title: "Expense Management",
    description: "Automate expense reporting with AI-powered receipt scanning and categorization."
  }, {
    icon: "🔒",
    title: "Secure & Compliant",
    description: "Bank-level security with full compliance and fraud protection built in."
  }, {
    icon: "⚡",
    title: "Real-time Insights",
    description: "Get instant visibility into company spending with powerful analytics."
  }, {
    icon: "🤝",
    title: "Team Collaboration",
    description: "Enable teams to work together with shared budgets and approval workflows."
  }, {
    icon: "🔗",
    title: "Easy Integration",
    description: "Connect seamlessly with your existing accounting and business tools."
  }]
}: FeaturesSectionProps) {
  return <section id="features" className="w-full bg-gray-50 py-20 lg:py-32">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              {feature.icon && <div className="text-4xl mb-4">{feature.icon}</div>}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}