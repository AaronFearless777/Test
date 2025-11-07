import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
type SectionId = 'pay' | 'manage' | 'optimise';
type CardData = {
  title: string;
  description: string;
  media: {
    type: 'video' | 'image';
    src: string;
    poster?: string;
  };
};
type SectionData = {
  id: SectionId;
  title: string;
  description: string;
  cards: CardData[];
};
const sectionsData: SectionData[] = [{
  id: 'pay',
  title: 'Pay',
  description: 'Teams spend with cards, reimbursements, or invoices. Pleo keeps it flexible and compliant.',
  cards: [{
    title: 'Smart company cards',
    description: "Pleo's various types of cards mean safer spending, for every team.",
    media: {
      type: 'video',
      src: 'https://commercial-helios.cdn.prismic.io/commercial-helios/218edbcb-98ad-4454-9e1a-c860f5d0c895_Cards.mp4',
      poster: 'https://images.prismic.io/commercial-helios/885c936c-e2b6-4a05-a195-292c37990aae_Cards.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&dpr=2&w=600'
    }
  }, {
    title: 'Accounts Payable',
    description: 'Automate everything, from purchase orders to payments, for fast processing and full control.',
    media: {
      type: 'image',
      src: 'https://images.prismic.io/commercial-helios/be554ccb-972a-4b7d-aed0-84ff70d52cad_invoices.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&dpr=2'
    }
  }, {
    title: 'Reimbursements',
    description: 'Track, review and manage reimbursements, all in one place.',
    media: {
      type: 'image',
      src: 'https://images.prismic.io/commercial-helios/ZuxQLbVsGrYSvmN8_reimbursements-en.png?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&dpr=2'
    }
  }]
}, {
  id: 'manage',
  title: 'Manage',
  description: 'Centralise and automate all business spend, giving finance full visibility and control, with less manual work.',
  cards: [{
    title: 'Spend controls',
    description: 'Take control of company spending with custom spending limits, multi-step approvals, budgets and more.',
    media: {
      type: 'video',
      src: 'https://commercial-helios.cdn.prismic.io/commercial-helios/0ed00150-2653-447f-971d-bede2f3942ae_Budgets.mp4',
      poster: 'https://images.prismic.io/commercial-helios/0874d7e1-e693-445a-b940-2624e69c8b52_Budgets.png?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&dpr=2&w=600'
    }
  }, {
    title: 'Accounting automation',
    description: 'Automate everything from expenses and receipts to VAT and reconciliation. Save hours for your team and report with confidence.',
    media: {
      type: 'image',
      src: 'https://images.prismic.io/commercial-helios/d9bdc7f7-99b1-478d-8e55-bcf2c0baee6a_integrations-illo.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&dpr=2'
    }
  }, {
    title: 'Multi-entity',
    description: 'One solution, one account, for every expense in every entity. Let no spend go unnoticed.',
    media: {
      type: 'image',
      src: 'https://images.prismic.io/commercial-helios/efc2d8a4-bf32-4fc2-b43a-82b1431687a5_multi-entity-uk.png?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&dpr=2'
    }
  }]
}, {
  id: 'optimise',
  title: 'Optimise',
  description: 'Spend with full oversight and AI-powered optimisation insights.',
  cards: [{
    title: 'Analytics',
    description: 'Stay in the know with detailed spending insights all in one dashboard.',
    media: {
      type: 'image',
      src: 'https://images.prismic.io/commercial-helios/aNuHGJ5xUNkB1QMr_Analytics-1-.png?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&dpr=2'
    }
  }, {
    title: 'Vendor management',
    description: 'Track and optimise spend, prevent missed renewals, and ensure compliance.',
    media: {
      type: 'image',
      src: 'https://images.prismic.io/commercial-helios/aNuHIp5xUNkB1QMt_Vendors-1-.png?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&dpr=2'
    }
  }, {
    title: 'Spend Insights',
    description: 'Spot duplicate subscriptions, overpaying, and more with AI-powered insights.',
    media: {
      type: 'image',
      src: 'https://images.prismic.io/commercial-helios/aNuHK55xUNkB1QMw_Insights-1-.png?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&dpr=2'
    }
  }]
}];
type PleoBuyerSpendProps = Record<string, never>;

// @component: PleoBuyerSpend
export const PleoBuyerSpend = (_props: PleoBuyerSpendProps) => {
  const [activeSection, setActiveSection] = useState<SectionId>('pay');
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<SectionId, HTMLElement | null>>({
    pay: null,
    manage: null,
    optimise: null
  });
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.entries(sectionRefs.current);
      let currentSection: SectionId = 'pay';
      sections.forEach(([id, ref]) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            currentSection = id as SectionId;
          }
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleTabClick = (sectionId: SectionId) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      const offset = 200;
      const top = section.offsetTop - offset;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  // @return
  return <div ref={containerRef} className="w-full bg-white font-['Neue_Haas_Grotesk_Display',system-ui,'Helvetica_Neue',Arial,sans-serif]">
      <div className="sticky top-0 z-10 bg-white py-4 px-10 mb-20 border-b border-transparent">
        <div className="max-w-[1440px] mx-auto flex items-center gap-5">
          <p className="text-[23px] leading-[36.8px] font-normal whitespace-nowrap">
            All business spend in one place <span>→</span>
          </p>
          
          <nav className="relative inline-grid grid-cols-3 border border-black rounded-full overflow-hidden">
            <motion.span className="absolute top-0 left-0 h-full bg-white mix-blend-difference rounded-full" initial={false} animate={{
            x: activeSection === 'pay' ? 0 : activeSection === 'manage' ? '100%' : '200%'
          }} transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }} style={{
            width: '33.333%'
          }} />
            
            {(['pay', 'manage', 'optimise'] as const).map(section => <button key={section} onClick={() => handleTabClick(section)} className="relative z-10 px-7 py-3.5 text-base leading-4 font-['Spezia_Monospace_SemiMono',monospace,'Helvetica_Neue',Arial,sans-serif] capitalize transition-colors">
                {section}
              </button>)}
          </nav>
        </div>
      </div>

      <div className="w-full">
        {sectionsData.map(section => <section key={section.id} id={section.id} ref={el => {
        sectionRefs.current[section.id] = el;
      }} className="max-w-[1440px] mx-auto px-[100px] py-20">
            <div className="text-center mb-[60px]">
              <h2 className="text-[64px] leading-[70.4px] font-normal mb-10">
                {section.title}
              </h2>
              <p className="text-[23px] leading-[36.8px] font-normal max-w-[840px] mx-auto">
                {section.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-[60px]">
              {section.cards.map((card, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-[#f5f5f5] rounded-[20px] overflow-hidden">
                  <div className="p-10 space-y-2">
                    <p className="text-[32px] leading-[44.8px] font-normal">
                      {card.title}
                    </p>
                    <p className="text-base leading-[25.6px] font-normal">
                      {card.description}
                    </p>
                  </div>
                  
                  <div className="relative w-full aspect-[1.57143/1]">
                    {card.media.type === 'video' ? <video autoPlay loop muted playsInline poster={card.media.poster} className="w-full h-full object-cover">
                        <source src={card.media.src} type="video/mp4" />
                      </video> : <img src={card.media.src} alt={card.title} className="w-full h-full object-cover" />}
                  </div>
                </motion.div>)}
            </div>
          </section>)}
      </div>
    </div>;
};