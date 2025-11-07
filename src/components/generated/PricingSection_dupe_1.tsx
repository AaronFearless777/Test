"use client";

import React from 'react';
export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}
export interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
}
export default function PricingSection({
  title = "Simple, Transparent Pricing",
  subtitle = "Choose the plan that's right for your business",
  plans = [{
    name: "Starter",
    price: "£29",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: ["Up to 10 team members", "5 virtual cards", "Basic expense tracking", "Email support", "Mobile app access"],
    ctaText: "Start Free Trial"
  }, {
    name: "Professional",
    price: "£99",
    period: "/month",
    description: "For growing businesses with advanced needs",
    features: ["Up to 50 team members", "Unlimited virtual cards", "Advanced analytics", "Priority support", "API access", "Custom integrations"],
    highlighted: true,
    ctaText: "Start Free Trial"
  }, {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom requirements",
    features: ["Unlimited team members", "Unlimited cards", "Dedicated account manager", "24/7 phone support", "Custom integrations", "Advanced security", "SLA guarantee"],
    ctaText: "Contact Sales"
  }]
}: PricingSectionProps) {
  return <section id="pricing" className="w-full bg-white py-20 lg:py-32">
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => <div key={index} className={`rounded-2xl p-8 ${plan.highlighted ? 'bg-gray-900 text-white shadow-2xl scale-105 border-2 border-gray-900' : 'bg-gray-50 text-gray-900 shadow-sm hover:shadow-md'} transition-all`}>
              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                {plan.period && <span className={`text-lg ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>}
              </div>

              {/* Description */}
              <p className={`mb-6 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-full font-semibold mb-8 transition-all ${plan.highlighted ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                {plan.ctaText || "Get Started"}
              </button>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? 'text-gray-300' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
}