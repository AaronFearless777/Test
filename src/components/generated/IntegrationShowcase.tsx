import React from 'react';
type Integration = {
  name: string;
  logo: string;
  alt: string;
};
type IntegrationShowcaseProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  integrations?: Integration[];
};
const defaultIntegrations: Integration[] = [{
  name: 'QuickBooks',
  logo: 'https://commercial-helios.cdn.prismic.io/commercial-helios/42561319-d840-4712-828b-5f2897864954_Quickbooks%20simple.svg',
  alt: 'Quick Books Logo'
}, {
  name: 'Xero',
  logo: 'https://commercial-helios.cdn.prismic.io/commercial-helios/a07c912a-ebb8-4153-b4e1-ed44193e8e2c_Xero.svg',
  alt: 'Xero Logo'
}, {
  name: 'Oracle NetSuite',
  logo: 'https://commercial-helios.cdn.prismic.io/commercial-helios/6e0c5932-3d32-4fd5-8604-3519bc136691_oracle-netsuite.svg',
  alt: 'Oracle Netsuite Logo'
}, {
  name: 'Microsoft Dynamics',
  logo: 'https://commercial-helios.cdn.prismic.io/commercial-helios/a6eea5db-4905-41f6-99a1-59a9ad4eb87f_dynamics.svg',
  alt: 'Microsoft Dynamics 365 Business Central Logo'
}, {
  name: 'Zapier',
  logo: 'https://commercial-helios.cdn.prismic.io/commercial-helios/b54d1544-9486-451b-b527-d3bcf4a20451_Zapier.svg',
  alt: 'Zapier Logo'
}, {
  name: 'Gmail',
  logo: 'https://commercial-helios.cdn.prismic.io/commercial-helios/f4e77bce-e172-4195-aba3-a5fee541df4d_Gmail.svg',
  alt: 'Google Mail Logo'
}, {
  name: 'Sage',
  logo: 'https://commercial-helios.cdn.prismic.io/commercial-helios/312f18f6-2eec-4e93-8f16-b75699245458_Sage.svg',
  alt: 'Sage Logo'
}, {
  name: 'TravelPerk',
  logo: 'https://commercial-helios.cdn.prismic.io/commercial-helios/e40cd4f7-b8a5-4ce1-a0ff-1948417cc374_travelperk.svg',
  alt: 'Travelperk Logo'
}, {
  name: 'Outlook',
  logo: 'https://commercial-helios.cdn.prismic.io/commercial-helios/db91f0ae-57da-4c5c-81ab-3b3f38ddf72e_outlook.svg',
  alt: 'Microsoft Outlook Logo'
}];

// @component: IntegrationShowcase
export const IntegrationShowcase = ({
  title = 'Seamlessly integrate to the rest of your business',
  description = 'Connect the tools you use and love to Pleo and simplify your workflow.',
  buttonText = 'Learn more',
  integrations = defaultIntegrations
}: IntegrationShowcaseProps) => {
  // @return
  return <section className="w-full overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-8 md:px-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-7">
              <h2 className="text-[45px] leading-[54px] font-normal text-black" style={{
              fontFamily: '"Neue Haas Grotesk Display", system-ui, "Helvetica Neue", Arial, sans-serif'
            }}>
                {title}
              </h2>
              <p className="text-[23px] leading-[36.8px] font-normal text-[#333333]" style={{
              fontFamily: '"Neue Haas Grotesk Display", system-ui, "Helvetica Neue", Arial, sans-serif'
            }}>
                {description}
              </p>
            </div>
            <a href="#" onClick={e => e.preventDefault()} className="inline-flex items-center justify-center px-7 py-3.5 text-base font-normal text-black border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-200 w-fit" style={{
            fontFamily: '"Spezia Monospace SemiMono", monospace, "Helvetica Neue", Arial, sans-serif'
          }}>
              {buttonText}
            </a>
          </div>

          <div className="relative flex justify-center lg:justify-start">
            <img src="https://commercial-helios.cdn.prismic.io/commercial-helios/8b89f134-485e-45c5-b0e7-7e4c353e4596_Sagan%20illustration%20integrations%20slice%202%201.svg" alt="Integrations illustration" width={600} height={391} loading="lazy" className="w-full max-w-[600px] h-auto" />
          </div>
        </div>
      </div>

      <div className="relative mt-20 h-[155px] overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-[100px] bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-[100px] bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex animate-scroll">
          {[...Array(4)].map((_, setIndex) => <div key={setIndex} className="flex items-center shrink-0">
              {integrations.map((integration, index) => <a key={`${setIndex}-${index}`} href="#" onClick={e => e.preventDefault()} className="flex items-center justify-center w-[150px] h-[150px] mx-[30px] bg-[#F5F5F5] rounded-lg p-8 hover:border-black border border-transparent transition-colors duration-200" tabIndex={setIndex > 0 ? -1 : 0} aria-hidden={setIndex > 0}>
                  <img src={integration.logo} alt={integration.alt} width={85} height={85} loading="lazy" className="w-[85px] h-[85px]" />
                </a>)}
            </div>)}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>;
};