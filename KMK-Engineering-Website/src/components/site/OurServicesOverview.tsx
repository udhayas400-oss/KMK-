import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import './our-services.css';

const services = [
  {
    id: 'consulting', href: '/bizsafe', title: 'BizSAFE Consulting Services', badge: 'KMK BIZSAFE',
    image: '/service-photos/home-bizsafe-consulting.jpg',
    alt: 'Safety consultant reviewing workplace risk documentation with an operations manager',
    description: 'KMK Engineering provides end-to-end BizSAFE consultancy, from an initial assessment to documentation and audit preparation. We help your team plan the next steps and organise workplace-specific evidence for certification.',
    points: ['Gap assessment and certification planning', 'Documentation preparation and submission support', 'Audit guidance through certification'],
    cta: 'Explore BizSAFE Consulting',
  },
  {
    id: 'level3', href: '/bizsafe-level-3', title: 'BizSAFE Level 3 Consultants', badge: 'BIZSAFE LEVEL 3',
    image: '/service-photos/home-bizsafe-level3.jpg',
    alt: 'Safety inspector and technician assessing machinery risks on a factory floor',
    description: 'Prepare your Risk Management Plan with practical risk-assessment and hazard-identification guidance. KMK helps your team organise safety documentation, review risk controls and prepare evidence for the independent audit.',
    points: ['Risk assessment and hazard identification', 'Risk Management Plan and workplace documentation', 'Audit preparation and readiness review'],
    cta: 'Explore BizSAFE Level 3',
  },
  {
    id: 'level4', href: '/bizsafe-level-4', title: 'BizSAFE Level 4 Consultancy', badge: 'BIZSAFE LEVEL 4',
    image: '/service-photos/home-bizsafe-level4.jpg',
    alt: 'Supervisors reviewing safety management procedures and implementation documents',
    description: 'Develop a Workplace Safety & Health Management System suited to your operations. KMK supports safety documentation, implementation guidance and internal preparation so your team can work towards Level 4 audit readiness.',
    points: ['WSH management-system and safety documentation', 'Staff implementation guidance and internal preparation', 'Audit-readiness checks and evidence organisation'],
    cta: 'Explore BizSAFE Level 4',
  },
  {
    id: 'star', href: '/bizsafe-star', title: 'BizSAFE STAR Certification', badge: 'BIZSAFE STAR',
    image: '/service-photos/home-bizsafe-star.jpg',
    alt: 'Auditor and senior manager reviewing advanced safety compliance evidence',
    description: 'Strengthen advanced workplace safety management as you prepare for BizSAFE STAR. KMK supports certification preparation, internal audits and ISO 45001 alignment where relevant, with a focus on practical continual improvement.',
    points: ['Advanced safety-management and ISO 45001 alignment', 'Internal audit support and certification preparation', 'Ongoing compliance and improvement planning'],
    cta: 'Explore BizSAFE STAR',
  },
];

export function OurServicesOverview() {
  const [activeService, setActiveService] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduced = useReducedMotion();
  const service = services[activeService];
  useEffect(() => {
    // Preload the four existing photographs to avoid a blank image on tab changes.
    services.forEach(item => { const image = new Image(); image.src = item.image; });
  }, []);
  const select = (index: number) => {
    setActiveService(index);
    tabs.current[index]?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
  };
  const keyboard = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % services.length;
    else if (event.key === 'ArrowLeft') next = (index + services.length - 1) % services.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = services.length - 1;
    else return;
    event.preventDefault(); select(next); tabs.current[next]?.focus();
  };
  const transition = { duration: reduced ? 0 : .35, ease: [.22, 1, .36, 1] as const };
  return <section id="services" className="section kmk-services-overview" aria-labelledby="services-overview-title">
    <svg className="kmk-services-growth" viewBox="0 0 340 260" fill="none" aria-hidden="true" focusable="false">
      <path d="M25 230h290M55 230v-45h40v45M130 230V125h40v105M205 230V65h40v165M280 230V20h35v210M30 150l90-55 70 10 100-85m-30 0h30v30" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div className="container">
      <div className="kmk-services-heading">
        <span className="kmk-services-label"><Sparkles size={18} aria-hidden="true" />OUR SERVICES</span>
        <h2 id="services-overview-title">Providing Professional<br /><span>BizSAFE Services</span> for Your Business</h2>
      </div>
      <div className="kmk-service-tabs" role="tablist" aria-label="BizSAFE services">
        {services.map((item, index) => <button key={item.id} ref={element => { tabs.current[index] = element; }} id={'service-tab-' + item.id} type="button" role="tab" aria-selected={activeService === index} aria-controls="home-service-panel" tabIndex={activeService === index ? 0 : -1} onClick={() => select(index)} onKeyDown={event => keyboard(event, index)}>{item.title}</button>)}
      </div>
      <div id="home-service-panel" className="kmk-service-panel" role="tabpanel" aria-labelledby={'service-tab-' + service.id} tabIndex={0}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div className="kmk-service-active" key={service.id} initial={{ opacity: 0, y: reduced ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : 8 }} transition={transition}>
            <motion.div className="kmk-preview-image" initial={{ opacity: 0, x: reduced ? 0 : -15 }} animate={{ opacity: 1, x: 0 }} transition={transition}>
              <img src={service.image} alt={service.alt} width="1200" height="900" />
            </motion.div>
            <div className="kmk-preview-copy">
              <span className="kmk-service-badge">{service.badge}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="kmk-service-points">{service.points.map(point => <li key={point}><span className="kmk-service-check"><Check size={14} aria-hidden="true" /></span><span>{point}</span></li>)}</ul>
              <a className="kmk-service-cta" href={service.href}>{service.cta}<ArrowRight size={18} aria-hidden="true" /></a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </section>;
}
