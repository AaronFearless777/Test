import React from 'react';
type HeroSectionProps = {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  videoSrc?: string;
  videoPoster?: string;
};

// @component: HeroSection
export const HeroSection = ({
  title = "Smart spending decisions, every time",
  description = "Pleo brings built-in controls and automation to all business spend, helping finance lead with confidence while employees spend every pound wisely. Join Europe's most loved and trusted spend management platform.",
  primaryButtonText = "Get started",
  secondaryButtonText = "Contact sales",
  videoSrc = "https://commercial-helios.cdn.prismic.io/commercial-helios/aJGxXKTt2nPbZ1pd_Web_Hero_Decisions_Desktop_2-1-.mp4",
  videoPoster = "https://images.prismic.io/commercial-helios/aJCfTKTt2nPbZ0NA_Website_Stillshot_Desktop_1920x1080.png?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&dpr=2&w=1440"
}: HeroSectionProps) => {
  // @return
  return <section className="w-full max-w-[1440px] mx-auto px-[100px] py-[80px]">
      <div className="flex flex-col items-center">
        <div className="pb-[40px] m-0">
          <h1 className="text-[64px] leading-[70.4px] font-normal text-black text-center m-0 break-words" style={{
          fontFamily: '"Neue Haas Grotesk Display", system-ui, "Helvetica Neue", Arial, sans-serif'
        }}>
            {title}
          </h1>
          <div className="max-w-[840px] text-center mt-[20px] mx-[200px]">
            <p className="text-[23px] leading-[36.8px] font-normal text-black text-center mt-[20px] m-0 break-words" style={{
            fontFamily: '"Neue Haas Grotesk Display", system-ui, "Helvetica Neue", Arial, sans-serif'
          }}>
              {description}
            </p>
          </div>
          <div className="flex justify-center flex-nowrap gap-[20px] py-[40px] px-0">
            <button className="relative flex items-center justify-center text-white bg-[rgb(34,34,34)] border border-[rgb(34,34,34)] rounded-[159984px] px-[28px] py-[14px] cursor-pointer whitespace-nowrap text-[16px] leading-[16px] font-normal transition-all hover:bg-[rgb(50,50,50)]" style={{
            fontFamily: '"Spezia Monospace SemiMono", monospace, "Helvetica Neue", Arial, sans-serif'
          }}>
              <span>{primaryButtonText}</span>
            </button>
            <a href="#" onClick={e => e.preventDefault()} className="relative flex items-center justify-center text-black bg-transparent border border-black rounded-[159984px] px-[28px] py-[14px] cursor-pointer whitespace-nowrap text-[16px] leading-[16px] font-normal transition-all hover:bg-gray-50" style={{
            fontFamily: '"Spezia Monospace SemiMono", monospace, "Helvetica Neue", Arial, sans-serif'
          }}>
              <span>{secondaryButtonText}</span>
            </a>
          </div>
        </div>
        <div className="relative w-[1240px] max-w-full mt-[40px]" style={{
        aspectRatio: '1.77778 / 1'
      }}>
          <video poster={videoPoster} loop autoPlay playsInline muted className="absolute top-0 left-0 w-full h-full object-fill" style={{
          aspectRatio: '1.77778 / 1',
          maskImage: 'radial-gradient(circle, rgb(255, 255, 255), rgb(0, 0, 0))',
          WebkitMaskImage: 'radial-gradient(circle, rgb(255, 255, 255), rgb(0, 0, 0))',
          backfaceVisibility: 'hidden'
        }}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>;
};