import React, { useState } from 'react';
import { ChevronDown, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
type FooterProps = {
  className?: string;
};
type NavigationSection = {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};
const navigationSections: NavigationSection[] = [{
  title: 'Product',
  links: [{
    label: 'Overview',
    href: '#'
  }, {
    label: 'Pricing',
    href: '#'
  }, {
    label: 'Integrations',
    href: '#'
  }, {
    label: 'Status',
    href: '#'
  }]
}, {
  title: 'Company',
  links: [{
    label: 'About us',
    href: '#'
  }, {
    label: 'Careers',
    href: '#'
  }, {
    label: 'Press',
    href: '#'
  }, {
    label: 'Legal',
    href: '#'
  }, {
    label: 'Brand',
    href: '#'
  }, {
    label: 'Contact us',
    href: '#'
  }]
}, {
  title: 'Partnerships',
  links: [{
    label: 'Pleo partnerships',
    href: '#'
  }, {
    label: 'Consulting partnerships',
    href: '#'
  }, {
    label: 'Accounting partnerships',
    href: '#'
  }, {
    label: 'Partner directory',
    href: '#'
  }]
}, {
  title: 'Resources',
  links: [{
    label: 'Blog',
    href: '#'
  }, {
    label: 'Help centre',
    href: '#'
  }, {
    label: 'FAQ',
    href: '#'
  }, {
    label: 'Webinars and events',
    href: '#'
  }, {
    label: 'Customer stories',
    href: '#'
  }, {
    label: 'Free accounting resources',
    href: '#'
  }, {
    label: 'Reviews',
    href: '#'
  }, {
    label: 'Developers',
    href: '#'
  }]
}, {
  title: 'Solutions',
  links: [{
    label: 'Startups',
    href: '#'
  }, {
    label: 'Small businesses',
    href: '#'
  }, {
    label: 'Larger businesses',
    href: '#'
  }, {
    label: 'Business travel expenses',
    href: '#'
  }, {
    label: 'Software subscriptions',
    href: '#'
  }, {
    label: 'Marketing spend',
    href: '#'
  }]
}, {
  title: 'Legal',
  links: [{
    label: 'Master Service Agreement',
    href: '#'
  }, {
    label: 'Data Processing Agreement',
    href: '#'
  }, {
    label: 'Sub-processors',
    href: '#'
  }, {
    label: 'Privacy policy',
    href: '#'
  }, {
    label: 'GDPR',
    href: '#'
  }, {
    label: 'Fraud awareness',
    href: '#'
  }, {
    label: 'Complaints process',
    href: '#'
  }, {
    label: 'Anti-Modern Slavery Statement',
    href: '#'
  }, {
    label: 'Trust & Security',
    href: '#'
  }, {
    label: 'Vulnerability Disclosure Policy',
    href: '#'
  }, {
    label: 'Code of Conduct',
    href: '#'
  }, {
    label: 'Whistleblowing Policy',
    href: '#'
  }]
}];
const socialLinks = [{
  icon: Linkedin,
  label: 'LinkedIn',
  href: '#'
}, {
  icon: Twitter,
  label: 'Twitter',
  href: '#'
}, {
  icon: Facebook,
  label: 'Facebook',
  href: '#'
}, {
  icon: Instagram,
  label: 'Instagram',
  href: '#'
}, {
  icon: Youtube,
  label: 'YouTube',
  href: '#'
}];

// @component: Footer
export const Footer = ({
  className = ''
}: FooterProps) => {
  const [selectedCountry, setSelectedCountry] = useState('United Kingdom');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // @return
  return <footer className={`w-full bg-white ${className}`}>
      <div className="max-w-[1440px] mx-auto px-[100px] py-20">
        <div className="grid grid-cols-4 gap-x-[100px] gap-y-20">
          {/* Logo and Country Selector */}
          <div className="col-span-1">
            <svg width="79" height="29" viewBox="0 0 79 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[90px] mb-7">
              <path d="M13.9 13.1a4 4 0 0 1-1 2.5 4 4 0 0 1-2.5 1H4.8v-7h5.6q1.5 0 2.5 1a4 4 0 0 1 1 2.5m5 0a8 8 0 0 0-2.5-5.9 8 8 0 0 0-5.8-2.4H0v23.7h4.8v-7h5.8a8 8 0 0 0 5.8-2.5 8 8 0 0 0 2.4-5.9zm17.8 15.4h17.2v-4.8H41.4V21q3.3-.9 6.6-3l2-1.3-2.5-4-2 1.2a24 24 0 0 1-4 2V9.7h12.4V4.8H36.7V17q-3.5 0-5.5-1.3c-2.7-1.5-6-5-6-13.3V0h-4.7v2.4q.2 12.7 8.4 17.5a15 15 0 0 0 7.3 2h.5zm37.6-11.8a10 10 0 0 1-.5 3 7 7 0 0 1-1.3 2.4 6 6 0 0 1-2 1.5 6 6 0 0 1-2.7.6 6 6 0 0 1-2.8-.6 6 6 0 0 1-2-1.5 7 7 0 0 1-1.4-2.4 10 10 0 0 1 0-6 7 7 0 0 1 1.4-2.4 6 6 0 0 1 2-1.6 6 6 0 0 1 2.8-.6 6 6 0 0 1 2.7.6 6 6 0 0 1 2 1.6 7 7 0 0 1 1.3 2.4 10 10 0 0 1 .5 3m4.7 0a15 15 0 0 0-.8-5A12 12 0 0 0 76 7.9a10 10 0 0 0-3.6-2.5 11 11 0 0 0-9.3 0 10 10 0 0 0-3.6 2.5 12 12 0 0 0-2.2 4 16 16 0 0 0 0 9.8 11 11 0 0 0 2.2 4 10 10 0 0 0 3.6 2.5 12 12 0 0 0 9.3-.1 10 10 0 0 0 3.6-2.5 11 11 0 0 0 2.2-3.9q.8-2.4.8-5" fill="#000" />
            </svg>

            <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full min-h-[50px] flex items-center justify-between gap-3.5 px-0 py-2 pr-2 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <span className="flex items-center gap-2">
                <img src="https://www.pleo.io/helios/static/flag-gb-0b4e6af0e6d3903b1d9e6d8757f6a1fb.svg" alt="" width="24" height="16" className="flex-shrink-0" />
                <span className="text-[23px] leading-[36.8px] font-normal text-black truncate">
                  {selectedCountry}
                </span>
              </span>
              <ChevronDown className="w-3 h-3 text-black flex-shrink-0" />
            </button>
          </div>

          {/* Navigation Sections */}
          <div className="col-span-3 grid grid-cols-3 gap-x-20 gap-y-10">
            {navigationSections.map(section => <nav key={section.title} className="flex flex-col gap-2">
                <h3 className="text-[23px] leading-[36.8px] font-normal text-[#333333] mb-0">
                  {section.title}
                </h3>
                {section.links.map(link => <a key={link.label} href={link.href} className="text-base leading-6 font-normal text-[#333333] hover:bg-gray-100 transition-colors inline-block">
                    {link.label}
                  </a>)}
              </nav>)}
          </div>

          {/* Social Links and Company Info */}
          <div className="col-span-1">
            <nav className="flex items-center gap-2 mb-5">
              {socialLinks.map(social => {
              const Icon = social.icon;
              return <a key={social.label} href={social.href} className="flex text-[#333333] hover:text-black transition-colors" aria-label={social.label}>
                    <Icon className="w-6 h-6" />
                  </a>;
            })}
            </nav>

            <div className="space-y-4">
              <p className="text-base leading-6 font-normal text-[#333333] m-0">
                Pleo Technologies A/S (36538686)
              </p>
              <div>
                <p className="text-base leading-6 font-normal text-[#333333] m-0">
                  Ravnsborg Tværgade 5C
                  <br />
                  2200 København N
                  <br />
                  Danmark
                </p>
              </div>
            </div>
          </div>

          {/* Legal Disclaimers */}
          <div className="col-span-3 space-y-5 h-[348px]">
            <p className="text-base leading-6 font-normal text-[#333333] m-0">
              Cards starting with *519159 are issued by Pleo Financial Services UK Ltd pursuant to
              a license from Mastercard International Incorporated. Mastercard and the Mastercard
              Brand Mark are registered trademarks of Mastercard International Incorporated. Pleo
              Financial Services UK Ltd is authorised by the Financial Conduct Authority under the
              Electronic Money Regulations 2011 with firm reference number: 1020730. Pleo Financial
              Services UK Ltd's registered office is: 3rd Floor 11 St John Street, Farringdon,
              London, United Kingdom, EC1M 4AA and company number is: 15842283.
            </p>

            <p className="text-base leading-6 font-normal text-[#333333] m-0">
              Cards starting with *529437 are issued by{' '}
              <a href="#" className="text-[#333333] hover:bg-gray-100 transition-colors">
                B4B Payments
              </a>{' '}
              pursuant to license by Mastercard International Inc. Mastercard is a registered
              trademark, and the circles design is a trademark of Mastercard International
              Incorporated. All communications should be sent to: Europe – PO Box 76256, London,
              SW1P 9NU.
            </p>

            <p className="text-base leading-6 font-normal text-[#333333] m-0">
              Pleo Technologies A/S (36538686), 2025. All rights reserved. The claim "Europe's
              leading business spend solution" is based on the number of customers served by Pleo
              in Europe compared to similar solutions and according to public information.
            </p>

            <p className="text-base leading-6 font-normal text-[#333333] m-0">
              © 2006 – 2025 Payment Card Solutions (UK) Limited trading as B4B Payments is
              authorised by the Financial Conduct Authority to conduct electronic money service
              activities under the Electronic Money Regulations 2011 (Ref: 930619).
            </p>
          </div>
        </div>
      </div>
    </footer>;
};