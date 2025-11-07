"use client";

import React from 'react';
export interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  bgColor?: string;
}
export default function CTASection({
  title = "Ready to transform your business spending?",
  description = "Join thousands of businesses that trust us with their spend management. Start your free trial today.",
  primaryButtonText = "Start Free Trial",
  secondaryButtonText = "Schedule Demo",
  bgColor = "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
}: CTASectionProps) {
  return <section className={`w-full ${bgColor} text-white py-20 lg:py-32`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 mb-10">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              {primaryButtonText}
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all">
              {secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>;
}