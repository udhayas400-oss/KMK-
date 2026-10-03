import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ClipboardCheck, Compass, FileText, Layers3, ShieldCheck } from 'lucide-react';
import { siteContent } from '../../content';
import { AnimatedValue } from './AnimatedValue';

const iconMap = {
  shield: ShieldCheck,
  clipboard: ClipboardCheck,
  file: FileText,
  layers: Layers3,
  compass: Compass,
  check: Check,
};

export function ProofStrip() {
  return (
    <section className="proof-wrap" aria-label="KMK support at a glance">
      <div className="container proof-strip">
        <div className="proof-intro">Practical support for safer, more confident work.</div>
        {siteContent.proofPoints.map((item, index) => (
          <div className="proof-item reveal" key={item.label} data-testid={`stat-proof-${index}`}>
            <span className="proof-number"><AnimatedValue value={item.value} /></span>
            <span className="proof-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <img src={siteContent.about.image} alt={siteContent.about.imageAlt} data-testid="image-about-consultation" />
          <div className="image-caption"><b>{siteContent.about.captionTitle}</b><span>{siteContent.about.captionText}</span></div>
        </div>
        <div className="about-copy reveal">
          <div className="section-intro">
            <div className="eyebrow">{siteContent.about.eyebrow}</div>
            <h2>{siteContent.about.title}</h2>
            <p>{siteContent.about.description}</p>
          </div>
          <ul className="check-list">
            {siteContent.about.points.map((point) => <li key={point}><Check className="check-icon" size={17} />{point}</li>)}
          </ul>
          <a className="text-link" href="#services" data-testid="link-about-services">See how we can help <ArrowRight size={14} /></a>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-heading reveal">
          <div className="section-intro"><div className="eyebrow">Services</div><h2>Support for the whole picture.</h2></div>
          <p className="section-aside">From a first risk assessment to ongoing compliance support, bring your questions to one practical conversation.</p>
        </div>
        <div className="service-grid">
          {siteContent.services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <article className="service-card reveal" key={service.id} data-testid={`card-service-${service.id}`}>
                <span className="service-number">{service.number}</span>
                <div className="service-icon"><Icon size={20} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.href} data-testid={`link-service-${service.id}`}>Discuss this service <ArrowRight size={13} /></a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="feature-band" id="why-kmk">
      <div className="container feature-layout">
        <div className="section-intro reveal">
          <div className="eyebrow">{siteContent.why.eyebrow}</div>
          <h2>{siteContent.why.title}</h2>
          <p>{siteContent.why.description}</p>
        </div>
        <div className="feature-bullets">
          {siteContent.why.benefits.map((benefit) => (
            <article className="feature reveal" key={benefit.number}>
              <span>{benefit.number}</span><h3>{benefit.title}</h3><p>{benefit.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EngineeringFeature() {
  return (
    <section className="split-feature">
      <div className="split-photo">
        <img src={siteContent.engineeringFeature.image} alt={siteContent.engineeringFeature.imageAlt} data-testid="image-engineering-feature" />
      </div>
      <div className="split-copy reveal">
        <div className="eyebrow">{siteContent.engineeringFeature.eyebrow}</div>
        <h2>{siteContent.engineeringFeature.title}</h2>
        <p>{siteContent.engineeringFeature.description}</p>
        <a className="text-link" href="#contact" data-testid="link-engineering-contact">{siteContent.engineeringFeature.linkLabel} <ArrowRight size={14} /></a>
      </div>
    </section>
  );
}

export function Milestones() {
  return (
    <section className="milestones" aria-label="Editable company milestones">
      <div className="container milestone-row">
        <div className="milestone-title"><div className="eyebrow">KMK at a glance</div><h2>{siteContent.milestones.heading}</h2></div>
        {siteContent.milestones.items.map((item, index) => (
          <div className="milestone reveal" key={item.label} data-testid={`stat-milestone-${index}`}>
            <strong><AnimatedValue value={item.value} /></strong><span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FrameworksMarquee() {
  const items = siteContent.standardsMarquee.items;
  return (
    <section className="marquee-section">
      <div className="container marquee-head">
        <div><div className="eyebrow">Areas of focus</div><h2>{siteContent.standardsMarquee.heading}</h2></div>
        <span className="marquee-note">{siteContent.standardsMarquee.note}</span>
      </div>
      <div className="marquee" aria-label="Framework and service areas">
        <div className="marquee-track" data-testid="marquee-frameworks">
          {[...items, ...items].map((item, index) => <span className="framework-chip" key={`${item}-${index}`}><i />{item}</span>)}
        </div>
      </div>
    </section>
  );
}

export function PartnersMarquee() {
  const items = siteContent.partnersMarquee.items;
  return (
    <section className="partners-section" aria-label="Client and partner logo placeholders">
      <div className="container marquee-head">
        <div><div className="eyebrow">Client &amp; partner recognition</div><h2>{siteContent.partnersMarquee.heading}</h2></div>
        <span className="marquee-note">{siteContent.partnersMarquee.note}</span>
      </div>
      <div className="marquee" aria-label="Editable client and partner logo placeholders">
        <div className="marquee-track" data-testid="marquee-client-partners">
          {[...items, ...items].map((item, index) => <span className="partner-placeholder" key={`${item}-${index}`}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}

export function TestimonialSlider() {
  const [page, setPage] = useState(0);
  const slide = siteContent.testimonial.slides[page];
  const changeSlide = () => setPage((current) => current === 0 ? 1 : 0);

  return (
    <section className="quote-section" aria-label="Testimonial placeholder">
      <div className="container quote-grid">
        <div className="quote-label"><div className="eyebrow">{siteContent.testimonial.label}</div><p>{siteContent.testimonial.note}</p></div>
        <div className="quote-card" aria-live="polite" data-testid="carousel-testimonial">
          <blockquote>{slide.placeholder}</blockquote>
          <p>{slide.attribution}</p>
          <div className="quote-controls">
            <button className="small-arrow" onClick={changeSlide} aria-label="Previous testimonial placeholder" data-testid="button-testimonial-previous"><ArrowLeft size={15} /></button>
            <button className="small-arrow" onClick={changeSlide} aria-label="Next testimonial placeholder" data-testid="button-testimonial-next"><ArrowRight size={15} /></button>
            <span className="marquee-note" data-testid="text-testimonial-state">{page === 0 ? 'Editable placeholder · 01' : 'Editable placeholder · 02'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}