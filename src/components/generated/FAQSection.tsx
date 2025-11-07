"use client";

import React, { useState } from 'react';
export interface FAQ {
  question: string;
  answer: string;
}
export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQ[];
}
export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our platform",
  faqs = [{
    question: "How quickly can I get started?",
    answer: "You can create an account and start issuing cards in minutes. Our onboarding process is designed to be quick and straightforward, with no lengthy approval process."
  }, {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial."
  }, {
    question: "Can I cancel my subscription at any time?",
    answer: "Absolutely. You can cancel your subscription at any time with no penalties or hidden fees. Your access will continue until the end of your billing period."
  }, {
    question: "How secure is the platform?",
    answer: "We use bank-level encryption and security measures. All data is encrypted in transit and at rest. We're fully compliant with financial regulations and undergo regular security audits."
  }, {
    question: "What integrations do you support?",
    answer: "We integrate with popular accounting software like Xero, QuickBooks, and Sage, as well as other business tools. Enterprise plans include custom integration support."
  }, {
    question: "Do you offer customer support?",
    answer: "Yes! All plans include email support. Professional plans get priority support, and Enterprise customers receive 24/7 phone support with a dedicated account manager."
  }]
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section id="faq" className="w-full bg-gray-50 py-20 lg:py-32">
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

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all">
              <button onClick={() => toggleFAQ(index)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors">
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>}
            </div>)}
        </div>
      </div>
    </section>;
}