import React from 'react';
type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
type CustomerLogosCarouselProps = {
  title?: string;
  logos?: Logo[];
  stats?: Array<{
    value: string;
    description: string;
  }>;
};
const defaultLogos: Logo[] = [{
  src: 'https://commercial-helios.cdn.prismic.io/commercial-helios/d9d3b3b6-c45c-4823-9205-f463ab248f32_soho%20house%20logo-02.svg',
  alt: 'Soho House Logo',
  width: 250,
  height: 150
}, {
  src: 'https://commercial-helios.cdn.prismic.io/commercial-helios/ef470c53-8f56-4448-b1e1-4080cf075bfc_Blinkist.svg',
  alt: 'Blinkist Logo',
  width: 250,
  height: 150
}, {
  src: 'https://commercial-helios.cdn.prismic.io/commercial-helios/729c0a9d-23d6-426a-9973-d67c024ec6e1_hello%20fresh%20logo.svg',
  alt: 'Hello Fresh Logo',
  width: 666,
  height: 320
}, {
  src: 'https://commercial-helios.cdn.prismic.io/commercial-helios/71f2f2a3-9db8-4131-98ed-1c05f5dbf52a_lyst%20logo.svg',
  alt: 'Lyst Logo',
  width: 692,
  height: 217
}, {
  src: 'https://commercial-helios.cdn.prismic.io/commercial-helios/0a6becfd-44ed-4e7b-970f-be70e7a2dd51_Unity_black.svg',
  alt: 'Unity Logo',
  width: 1156,
  height: 403
}, {
  src: 'https://commercial-helios.cdn.prismic.io/commercial-helios/dd165de9-a212-4240-a7bc-e64706b6e4ed_Clean%20up%20Ocean.svg',
  alt: 'The Ocean Cleanup Logo',
  width: 100,
  height: 60
}, {
  src: 'https://commercial-helios.cdn.prismic.io/commercial-helios/43f2efb8-854d-4c34-a205-dfdd50df13c9_Trade%20Republic.svg',
  alt: 'Trade Republic Logo',
  width: 100,
  height: 60
}, {
  src: 'https://commercial-helios.cdn.prismic.io/commercial-helios/a76dc2c7-05dd-4161-a7f9-2e3683a721d6_too-good-to-go%20(1).svg',
  alt: 'Too Good To Go Logo',
  width: 100,
  height: 60
}];
const defaultStats = [{
  value: '99%',
  description: 'of users feel secure using Pleo'
}, {
  value: '138',
  description: 'hours saved by admins every year'
}, {
  value: '90%',
  description: 'of users are satisfied with Pleo'
}];

// @component: CustomerLogosCarousel
export const CustomerLogosCarousel = (props: CustomerLogosCarouselProps) => {
  const title = props.title ?? 'Trusted by 40,000+ customers';
  const logos = props.logos ?? defaultLogos;
  const stats = props.stats ?? defaultStats;
  const tripleLogos = [...logos, ...logos, ...logos];

  // @return
  return <section className="w-full py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-[100px] mb-8">
        <p className="text-center text-[32px] leading-[44.8px] font-normal text-black m-0">
          {title}
        </p>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-0">
        <div className="bg-white">
          <div className="relative w-full h-[60px] overflow-hidden isolate">
            <span className="absolute w-[100px] h-[60px] top-0 left-0 z-[1] bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none" />

            <ul className="flex absolute overflow-hidden h-[60px] items-center p-0 m-0 animate-[scroll_30s_linear_infinite]">
              {tripleLogos.map((logo, index) => <li key={index} className="flex-[1_1_0%] list-none mx-10 flex items-center justify-center">
                  <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} loading="lazy" className="block max-w-full h-[60px] w-[100px] min-w-[100px] object-contain" tabIndex={index >= logos.length ? -1 : undefined} aria-hidden={index >= logos.length ? true : undefined} />
                </li>)}
            </ul>

            <span className="absolute w-[100px] h-[60px] top-0 right-0 bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-[100px] flex justify-center gap-10 mt-20">
        {stats.map((stat, index) => <div key={index} className="flex-[1_1_0%] grid items-center text-center bg-[#F5F5F5] rounded-[20px] p-10 px-14 transition-all duration-[0.000001s] ease-in hover:opacity-90 hover:transform">
            <p className="text-[90px] leading-[90px] font-normal text-black m-0">
              {stat.value}
            </p>
            <p className="text-[23px] leading-[36.8px] font-normal text-[#333333] m-0">
              {stat.description}
            </p>
          </div>)}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>;
};