import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Building2, HardHat, UserRoundCheck } from 'lucide-react';
import { getServiceImage } from '../../serviceImage';
import { siteContent } from '../../content';
import './other-services.css';

const services = [
  { title: 'ISO Consulting', href: '/iso', icon: BadgeCheck, cta: 'Explore ISO Consulting', description: 'End-to-end ISO consultancy and certification preparation for quality, environmental, workplace safety, food-safety and information-security management systems.', detail: 'ISO 9001 · ISO 14001 · ISO 45001 · ISO 22000 · ISO 27001' },
  { title: 'Company Incorporation', href: '/incorporation', icon: Building2, cta: 'Start Incorporation Process', description: 'Start your business in Singapore with KMK guidance on company setup, supporting documentation and incorporation preparation.' },
  { title: 'BCA Registration', href: '/bca', icon: HardHat, cta: 'Explore BCA Registration', description: 'Prepare for contractor registration with guidance on workheads, grading, documentation and the BCA requirements relevant to your business.' },
  { title: 'PR Application Support', href: '/pr-application', icon: UserRoundCheck, cta: 'Explore PR Application', description: 'Review your eligibility and organise supporting documents with KMK guidance for Singapore PR application preparation.' },
];

export function OtherServicesOverview() {
  const reduced = useReducedMotion();
  const rise = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 35 },
    visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : .75, ease: [.22, 1, .36, 1] as const } },
  };
  return <section id="other-services" className="section kmk-other-services" aria-labelledby="other-services-title">
    <div className="container">
      <motion.div className="kmk-other-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={{ visible: { transition: { staggerChildren: reduced ? 0 : .12 } } }}>
        <motion.span className="eyebrow" variants={rise}>OTHER SERVICES</motion.span>
        <motion.h2 id="other-services-title" variants={rise}>Beyond BizSAFE, business and compliance support from KMK Engineering</motion.h2>
      </motion.div>
      <motion.div className="kmk-other-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .08 }} variants={{ visible: { transition: { staggerChildren: reduced ? 0 : .12 } } }}>
        {services.map(service => {
          const visual = getServiceImage(service.href);
          const Icon = service.icon;
          return <motion.article key={service.href} variants={rise} className="kmk-other-card">
            <div className="kmk-other-panel">
              <div className="kmk-other-photo"><img src={visual.src} alt={visual.alt} width="1024" height="768" loading="lazy" /></div>
              <div className="kmk-other-copy">
                <div className="kmk-other-icon"><Icon size={28} aria-hidden="true" /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.detail && <p className="kmk-other-standards">{service.detail}</p>}
                <a href={service.href}>{service.cta}<ArrowRight size={19} aria-hidden="true" /></a>
              </div>
            </div>
          </motion.article>;
        })}
      </motion.div>
      <div className="kmk-other-additional" aria-label="Additional KMK support">
        <span>Additional workplace support</span>
        <div>{siteContent.services.filter(service => service.id !== 'iso').map(service => <a key={service.id} href={service.href}>{service.title}<ArrowRight size={15} aria-hidden="true" /></a>)}</div>
      </div>
    </div>
  </section>;
}
