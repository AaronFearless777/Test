import React from 'react';
type CustomerStoriesHeroProps = {
  className?: string;
};

// @component: CustomerStoriesHero
export const CustomerStoriesHero = (props: CustomerStoriesHeroProps) => {
  // @return
  return <section className={`w-full max-w-[1440px] mx-auto px-[100px] py-20 ${props.className || ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-[540px_1fr] items-center gap-[100px] lg:gap-[100px]">
        <div className="order-2 lg:order-1">
          <p className="text-[#333333] text-[23px] leading-[36.8px] mb-1.5 font-normal" style={{
          fontFamily: '"Neue Haas Grotesk Display", system-ui, "Helvetica Neue", Arial, sans-serif'
        }}>
            Transform your finances
          </p>
          <h2 className="text-black text-[45px] leading-[54px] mb-6 font-normal" style={{
          fontFamily: '"Neue Haas Grotesk Display", system-ui, "Helvetica Neue", Arial, sans-serif'
        }}>
            Spending success stories
          </h2>
          <div className="mb-6">
            <p className="text-[#333333] text-[23px] leading-[36.8px] font-normal" style={{
            fontFamily: '"Neue Haas Grotesk Display", system-ui, "Helvetica Neue", Arial, sans-serif'
          }}>
              Hear from our customers about how Pleo has transformed the way they manage their business spending, for good.
            </p>
          </div>
          <a href="#" className="inline-flex items-center justify-center mt-6 border border-black rounded-full px-7 py-3.5 text-black text-base leading-4 cursor-pointer hover:bg-black hover:text-white transition-colors duration-200" style={{
          fontFamily: '"Spezia Monospace SemiMono", monospace, "Helvetica Neue", Arial, sans-serif',
          whiteSpace: 'nowrap'
        }}>
            Learn more
          </a>
        </div>
        <div className="order-1 lg:order-2 relative w-full" style={{
        aspectRatio: '1.02828 / 1'
      }}>
          <video poster="https://images.prismic.io/commercial-helios/3e603802-6be4-462e-bcbb-45c70c161c59_sagan_feature_panel.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&dpr=2&w=550" loop autoPlay playsInline muted className="absolute top-0 left-0 w-full h-full object-fill rounded-lg" style={{
          aspectRatio: '1.02828 / 1'
        }}>
            <source src="https://commercial-helios.cdn.prismic.io/commercial-helios/6144b348-4655-436a-b6b6-acc6a9209e27_customers_homepage02.webm" type="video/webm" />
            <source src="https://commercial-helios.cdn.prismic.io/commercial-helios/6264d38d-9bd1-4905-a4cb-823b8dd5b5be_afaf2ac7-dc3c-45ce-b3fe-1dde7f35249e.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>;
};