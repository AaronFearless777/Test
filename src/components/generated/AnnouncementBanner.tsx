"use client";

import React from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export interface AnnouncementBannerProps {
  message?: string;
  highlightText?: string;
  ctaText?: string;
  ctaHref?: string;
  icon?: 'sparkles' | 'arrow' | 'none';
  backgroundColor?: string;
  textColor?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}
export default function AnnouncementBanner({
  message = "Introducing our new AI-powered features",
  highlightText = "50% off",
  ctaText = "Learn more",
  ctaHref = "#features",
  icon = 'sparkles',
  backgroundColor = 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600',
  textColor = 'text-white',
  dismissible = true,
  onDismiss
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };
  const renderIcon = () => {
    switch (icon) {
      case 'sparkles':
        return <Sparkles className="w-4 h-4 mr-2 animate-pulse" />;
      case 'arrow':
        return <ArrowRight className="w-4 h-4 mr-2" />;
      default:
        return null;
    }
  };
  return <AnimatePresence>
      {isVisible && <motion.div initial={{
      height: 0,
      opacity: 0
    }} animate={{
      height: 'auto',
      opacity: 1
    }} exit={{
      height: 0,
      opacity: 0
    }} transition={{
      duration: 0.3
    }} className={`w-full ${backgroundColor} ${textColor} relative overflow-hidden`}>
          {/* Animated background gradient */}
          <div className="absolute inset-0 opacity-30">
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent" animate={{
          x: ['-100%', '100%']
        }} transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }} />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-[48px] py-2 gap-2">
              <div className="flex items-center justify-center flex-wrap gap-2 text-sm sm:text-base">
                {icon !== 'none' && <span className="flex items-center">
                    {renderIcon()}
                  </span>}
                
                <span className="font-medium">
                  {message}
                  {highlightText && <span className="mx-2 px-2 py-0.5 bg-white/20 rounded-full text-xs sm:text-sm font-bold backdrop-blur-sm">
                      {highlightText}
                    </span>}
                </span>

                {ctaText && <a href={ctaHref} className="inline-flex items-center gap-1 font-semibold underline underline-offset-4 hover:underline-offset-2 transition-all group">
                    {ctaText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>}
              </div>

              {dismissible && <button onClick={handleDismiss} className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50" aria-label="Dismiss announcement">
                  <X className="w-4 h-4" />
                </button>}
            </div>
          </div>
        </motion.div>}
    </AnimatePresence>;
}