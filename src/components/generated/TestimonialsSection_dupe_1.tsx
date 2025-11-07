"use client";

import React from 'react';
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}
export interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}
export default function TestimonialsSection({
  title = "Loved by Businesses",
  subtitle = "See what our customers have to say about their experience",
  testimonials = [{
    quote: "This platform has completely transformed how we manage company spending. The automation saves us hours every week.",
    author: "Sarah Johnson",
    role: "CFO",
    company: "TechCorp Inc.",
    avatar: "https://i.pravatar.cc/150?img=1"
  }, {
    quote: "The real-time insights and controls give us confidence that every pound is spent wisely. It's a game-changer.",
    author: "Michael Chen",
    role: "Finance Director",
    company: "Growth Ventures",
    avatar: "https://i.pravatar.cc/150?img=2"
  }, {
    quote: "Finally, a spend management solution that our entire team actually enjoys using. The UX is outstanding.",
    author: "Emma Williams",
    role: "Operations Manager",
    company: "Creative Studios",
    avatar: "https://i.pravatar.cc/150?img=3"
  }]
}: TestimonialsSectionProps) {
  return <section id="testimonials" className="w-full bg-gray-900 text-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg lg:text-xl text-gray-400">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors">
              {/* Quote */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-gray-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-gray-300 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                {testimonial.avatar && <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full" />}
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}