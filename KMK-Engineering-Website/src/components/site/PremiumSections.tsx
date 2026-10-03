import { type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, type Variants } from 'framer-motion';
import { ArrowUpRight, Check, ShieldCheck, ClipboardCheck, FileCheck2, Layers3, Compass, BadgeCheck, Quote } from 'lucide-react';
import { siteContent as c } from '../../content';
import { HeroSlider } from './HeroSlider';
import { AnimatedValue } from './AnimatedValue';
import { RevealHeading } from './RevealHeading';
export const entryViewport = { once: true, amount: .2 };
export function useReveal(_direction = 0, _distance = 18, _duration = .5): Variants {
  const reduced = useReducedMotion();
  return { hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }, show: (delay: number = 0) => ({ opacity: 1, y: 0, transition: { duration: reduced ? 0 : .65, delay: reduced ? 0 : delay, ease: [.22, 1, .36, 1] } }) };
}
export function useVisualReveal(_direction = 0) { return useReveal(); }
function Section({ id, tone = '', children }: { id?: string; tone?: string; children: ReactNode }) {
  return <section id={id} className={`section ${tone}`}><div className="container">{children}</div></section>;
}
function Heading({ label, title, text }: { label: string; title: string; text?: string }) {
  return <div className="section-heading"><span className="eyebrow">{label}</span><RevealHeading text={title} />{text && <p>{text}</p>}</div>;
}
function Points({ items }: { items: readonly string[] }) { return <ul className="check-list">{items.map(x => <li key={x}><Check size={18} aria-hidden="true" />{x}</li>)}</ul>; }
export function ScrollProgress() { const { scrollYProgress } = useScroll(); return <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />; }
export function HeroSection() { return <HeroSlider />; }
export function TrustStrip() { return <div className="trust-strip"><div className="container">{c.trustPoints.map(x => <span key={x}><ShieldCheck size={20} />{x}</span>)}</div></div>; }
export function AboutSection() { return <Section id="about"><div className="split-layout"><div className="about-image"><img src={c.about.image} alt={c.about.imageAlt} loading="lazy" /><div className="image-caption"><ShieldCheck size={28} /><div><strong>{c.about.captionTitle}</strong><span>{c.about.captionText}</span></div></div></div><div><Heading label={c.about.eyebrow} title={c.about.title} text={c.about.description} /><Points items={c.about.points} /><a href="#services" className="button-primary">{c.labels.servicesCta}<ArrowUpRight size={17} /></a></div></div></Section>; }
const icons = [ShieldCheck, ClipboardCheck, FileCheck2, Layers3, Compass, BadgeCheck];
export function ServicesSection() { return <Section id="services" tone="light-section"><Heading label={c.servicesIntro.label} title={c.servicesIntro.title} text={c.servicesIntro.text} /><div className="services-grid">{c.services.map((s,i) => { const Icon = icons[i]; return <article className="service-card" key={s.id}><div className="service-icon"><Icon size={27} /></div><h3>{s.title}</h3><p>{s.description}</p><a href={`#feature-${s.id === 'risk' || s.id === 'documentation' ? 'bizsafe' : s.id === 'compliance' ? 'iso' : s.id}`}>{c.labels.learnMore}<ArrowUpRight size={17} /></a></article>; })}</div></Section>; }
export function FeaturedServices() { return <Section tone="featured-services">{c.featuredServices.map((s,i) => <div id={`feature-${s.id}`} className={`split-layout feature-row ${i % 2 ? 'reverse' : ''}`} key={s.id}><img className="feature-image" src={s.image} alt={s.alt} loading="lazy" /><div><Heading label={s.label} title={s.title} text={s.description} /><Points items={s.points} /><a className="button-quiet" href="#contact">{s.cta}<ArrowUpRight size={17} /></a></div></div>)}</Section>; }
export function WhySection() { return <Section id="why-kmk" tone="light-section"><Heading label={c.why.eyebrow} title={c.why.title} text={c.why.description} /><div className="why-grid">{c.why.benefits.map((b,i) => { const Icon = icons[i]; return <article key={b.number}><Icon size={28} /><h3>{b.title}</h3><p>{b.body}</p></article>; })}</div></Section>; }
export function MetricsSection() { return <Section tone="metrics-section"><Heading label={c.metricsIntro.label} title={c.metricsIntro.title} /><div className="metrics-grid">{c.proofPoints.map(x => <div key={x.label}><strong><AnimatedValue value={x.value} /></strong><span>{x.label}</span></div>)}</div><p className="section-note">{c.metricsIntro.note}</p></Section>; }
export function IndustriesSection() { return <Section id="industries"><Heading label={c.industriesIntro.label} title={c.industriesIntro.title} text={c.industriesIntro.text} /><div className="industries-grid" tabIndex={0} role="region" aria-label="Industries; scroll horizontally to explore">{c.industries.map(x => <article className="industry-card" key={x.name}><img src={x.image} alt={x.alt} loading="lazy" /><h3>{x.name}</h3></article>)}</div></Section>; }
export function WorkflowSection() { return <Section tone="light-section"><Heading label={c.processIntro.label} title={c.processIntro.title} text={c.processIntro.text} /><ol className="workflow">{c.workflow.map((x,i) => <li key={x.title}><span className="step-number">0{i+1}</span><h3>{x.title}</h3><p>{x.body}</p></li>)}</ol></Section>; }
export function ProjectsSection() { return <Section id="projects"><Heading label={c.projectsIntro.label} title={c.projectsIntro.title} text={c.projectsIntro.text} /><div className="projects-grid">{c.projects.map((p,i) => <article className="project-card" key={i}><img src={p.image} alt={p.alt} loading="lazy" /><div><span className="eyebrow">{p.category}</span><h3>{p.title}</h3><p>{p.status}</p><a href="#contact">{c.labels.projectCta}<ArrowUpRight size={16} /></a></div></article>)}</div></Section>; }
export function SafetyStatement() { return <Section tone="compliance-section"><div className="split-layout"><div><Heading label={c.compliance.label} title={c.compliance.title} text={c.compliance.description} /><p className="safety-principle">{c.safetyMessage.title}</p><a href="#contact" className="button-primary">{c.compliance.cta}<ArrowUpRight size={17} /></a></div><div className="compliance-list">{c.standardsMarquee.items.slice(0,5).map(x => <div key={x}><BadgeCheck size={24} /><span>{x}</span></div>)}<p>{c.standardsMarquee.note}</p></div></div></Section>; }
export function PartnersSection() { return <Section tone="partners-section"><Heading label={c.partnersIntro.label} title={c.partnersMarquee.heading} /><div className="partner-window" tabIndex={0} aria-label="Client and partner placeholders; focus or hover to pause"><div className="partner-track"><div className="partner-grid">{c.partnersMarquee.items.map(x => <div key={x}>{x}</div>)}</div><div className="partner-grid partner-clone" aria-hidden="true" inert>{c.partnersMarquee.items.map(x => <div key={x}>{x}</div>)}</div></div></div><p className="section-note">{c.partnersMarquee.note}</p></Section>; }
export function TestimonialSection() {
  return <Section tone="light-section">
    <Heading label={c.testimonial.label} title={c.testimonial.heading} />
    {/* <div className="testimonials-grid"> */}
      {c.testimonial.slides.map((item, index) => <article className="testimonial-card" key={index}>
        <Quote size={40} aria-hidden="true" />
        <blockquote>{item.placeholder}</blockquote>
        <p>{item.attribution}</p>
      </article>)}
    </div>
    <p className="testimonial-note">{c.testimonial.note}</p>
  </Section>;
}
