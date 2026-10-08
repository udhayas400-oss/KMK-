import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { ButtonLabel } from './ButtonLabel';
import './our-services.css';

const services = [
  {
    id: 'consulting', href: '/bizsafe', title: 'BizSAFE Consulting Services',
    image: '/service-photos/home-bizsafe-consulting.jpg',
    alt: 'Safety consultant reviewing workplace risk documentation with an operations manager',
    description: 'KMK Engineering helps you assess your current practices and plan your BizSAFE journey. We support documentation preparation, risk-management guidance and audit readiness around the needs of your workplace.',
    points: ['Initial gap assessment and certification planning', 'Documentation and risk-management support', 'Audit preparation and certification guidance'],
    cta: 'Explore BizSAFE Consulting',
  },
  {
    id: 'level3', href: '/bizsafe-level-3', title: 'BizSAFE Level 3 Consultants',
    image: '/service-photos/home-bizsafe-level3.jpg',
    alt: 'Safety inspector and technician assessing machinery risks on a factory floor',
    description: 'Prepare for Level 3 with practical Risk Management Plan guidance, hazard identification and Risk Assessment support. KMK helps your team organise workplace safety documentation and prepare evidence for the independent audit.',
    points: ['Risk Management Plan and Risk Assessment preparation', 'Hazard identification and workplace documentation', 'Audit-readiness checks and evidence organisation'],
    cta: 'Learn More About Level 3',
  },
  {
    id: 'level4', href: '/bizsafe-level-4', title: 'BizSAFE Level 4 Consultancy',
    image: '/service-photos/home-bizsafe-level4.jpg',
    alt: 'Supervisors reviewing safety management procedures and implementation documents',
    description: 'Build a Workplace Safety & Health Management System that supports your operations. KMK guides safety-management documentation, internal preparation and staff implementation so your team can work towards Level 4 audit readiness.',
    points: ['Workplace Safety & Health Management System preparation', 'Safety procedures and staff implementation support', 'Internal readiness reviews and audit preparation'],
    cta: 'Get Started with Level 4',
  },
  {
    id: 'star', href: '/bizsafe-star', title: 'BizSAFE STAR Certification Support',
    choice: 'BizSAFE STAR Certification',
    image: '/service-photos/home-bizsafe-star.jpg',
    alt: 'Auditor and senior manager reviewing advanced safety compliance evidence',
    description: 'Strengthen your safety-management system as you prepare for BizSAFE STAR. KMK supports ISO 45001 alignment where applicable, internal audit preparation, certification readiness and ongoing compliance planning.',
    points: ['Advanced safety-management and ISO 45001 alignment', 'Internal audit and STAR certification preparation', 'Ongoing compliance and improvement planning'],
    cta: 'Achieve BizSAFE STAR',
  },
];

export function OurServicesOverview() {
  const [active, setActive] = useState('consulting');
  const reduced = useReducedMotion();
  const entrance = (direction: number) => ({
    hidden: { opacity: reduced ? 1 : 0, x: reduced ? 0 : direction * 50 },
    visible: { opacity: 1, x: 0, transition: { duration: reduced ? 0 : .8, ease: [.22, 1, .36, 1] as const, staggerChildren: reduced ? 0 : .09 } },
  });
  const child = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : .7, ease: [.22, 1, .36, 1] as const } },
  };
  return <section id="services" className="section kmk-services-overview" aria-labelledby="services-overview-title">
    <div className="container">
      <div className="kmk-services-heading">
        <span className="eyebrow">OUR SERVICES</span>
        <h2 id="services-overview-title">Professional safety, certification and compliance support for your business</h2>
        <p>Practical BizSAFE guidance from KMK Engineering, from your first assessment to advanced safety-management preparation.</p>
      </div>
      <nav className="kmk-service-choices" aria-label="Explore BizSAFE services">
        {services.map((service, index) => <a key={service.id} href={service.href} className={active === service.id ? 'is-active' : ''}>
          <span className="kmk-choice-number">0{index + 1}</span>
          <span>{service.choice || service.title}</span>
          <ArrowRight size={20} aria-hidden="true" />
        </a>)}
      </nav>
      <div className="kmk-service-previews">
        {services.map((service, index) => <article className={'kmk-service-preview' + (index % 2 ? ' is-reversed' : '')} key={service.id} aria-labelledby={'home-service-' + service.id}>
          <motion.div className="kmk-preview-image" variants={entrance(index % 2 ? 1 : -1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }}>
            <img src={service.image} alt={service.alt} width="1200" height="900" loading="lazy" />
          </motion.div>
          <motion.div className="kmk-preview-copy" variants={entrance(index % 2 ? -1 : 1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} onViewportEnter={() => setActive(service.id)}>
            <motion.span className="eyebrow" variants={child}>KMK Engineering · BizSAFE Support</motion.span>
            <motion.h3 id={'home-service-' + service.id} variants={child}>{service.title}</motion.h3>
            <motion.p variants={child}>{service.description}</motion.p>
            <ul className="check-list">{service.points.map(point => <motion.li variants={child} key={point}><Check size={18} aria-hidden="true" /><span>{point}</span></motion.li>)}</ul>
            <motion.div variants={child}><a className="button-primary" href={service.href}><ButtonLabel>{service.cta}</ButtonLabel><ArrowRight size={18} aria-hidden="true" /></a></motion.div>
          </motion.div>
        </article>)}
      </div>
    </div>
  </section>;
}
