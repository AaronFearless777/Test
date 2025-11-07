"use client";

import React from 'react';
export interface HeaderProps {
  logo?: string;
  logoText?: string;
  navItems?: {
    label: string;
    href: string;
  }[];
  ctaText?: string;
}
export default function Header({
  logo,
  logoText = "YourBrand",
  navItems = [{
    label: "Features",
    href: "#features"
  }, {
    label: "How it Works",
    href: "#how-it-works"
  }, {
    label: "Pricing",
    href: "#pricing"
  }, {
    label: "FAQ",
    href: "#faq"
  }],
  ctaText = "Get Started"
}: HeaderProps) {
  return <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {logo ? <img src={logo} alt={logoText} className="h-8 w-auto" /> : <div className="text-2xl font-bold text-gray-900">{logoText}</div>}
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => <a key={index} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>)}
          </nav>

          {/* CTA Button */}
          <button className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all shadow-sm">
            {ctaText}
          </button>
        </div>
      </div>
    </header>;
}