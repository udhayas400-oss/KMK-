import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play, Star } from 'lucide-react';
import { useInView } from 'framer-motion';
import { siteContent as c } from '../../content';
import { useCarousel } from '../../hooks/useCarousel';
import { motionTiming } from '../../lib/animation';
import { RevealHeading } from './RevealHeading';
import '../../reviews.css';

function Stars() {
  return <span className="review-stars" aria-label="Sample rating: 5 out of 5">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={17} fill="currentColor" aria-hidden="true" />)}</span>;
}

export function TestimonialSlider() {
  const section = useRef<HTMLElement>(null);
  const entered = useInView(section, { once: true, amount: .15 });
  const slides = c.testimonial.slides, count = slides.length;
  const carousel = useCarousel(count, motionTiming.testimonial.intervalMs);
  const previous = useRef(0);
  const [position, setPosition] = useState(count);
  const [animate, setAnimate] = useState(true);
  const [visible, setVisible] = useState(() => window.innerWidth >= 1200 ? 3 : window.innerWidth >= 768 ? 2 : 1);
  useEffect(() => {
    const resize = () => setVisible(window.innerWidth >= 1200 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  useEffect(() => {
    const old = previous.current, next = carousel.active;
    if (old === next) return;
    previous.current = next;
    setAnimate(!carousel.reduced);
    setPosition(old === count - 1 && next === 0 && carousel.direction.current > 0 ? count * 2
      : old === 0 && next === count - 1 && carousel.direction.current < 0 ? count - 1 : count + next);
  }, [carousel.active, carousel.reduced, carousel.direction, count]);
  useEffect(() => {
    if (position >= count && position < count * 2) return;
    const timer = window.setTimeout(() => {
      setAnimate(false);
      setPosition(count + carousel.active);
    }, carousel.reduced ? 0 : motionTiming.testimonial.transition * 1000);
    return () => window.clearTimeout(timer);
  }, [position, carousel.active, carousel.reduced, count]);
  return <section ref={section} data-entered={entered || carousel.reduced} id="testimonials" className="section dark-section testimonials-section" aria-labelledby="reviews-title">
    <div className="container">
      <div className="section-heading review-heading"><span className="eyebrow">{c.testimonial.label}</span><RevealHeading id="reviews-title" text={c.testimonial.heading} />
        <div className="review-summary"><Stars /><span><strong>5.0 out of 5</strong> — sample rating; Google review count awaiting verification</span></div>
        <p className="review-disclosure">Sample preview only. These are placeholder testimonials, not published Google reviews.</p>
      </div>
      <div className="testimonial-slider" tabIndex={0} aria-roledescription="carousel" aria-label="KMK sample testimonials" {...carousel.interactionProps}>
        <div className="review-window"><div className="review-track" style={{ '--visible-reviews': visible, '--review-position': position, transitionDuration: animate ? motionTiming.testimonial.transition + 's' : '0s' } as CSSProperties}>
          {Array.from({ length: count * 3 }, (_, index) => {
            const slide = slides[index % count];
            const shown = index >= position && index < position + visible;
            return <div className="review-slide" key={index} aria-hidden={!shown} inert={!shown}>
              <article className="google-review-card" role="group" aria-label={'Sample testimonial ' + (index % count + 1) + ' of ' + count} style={{ '--card-delay': Math.max(0, index - count) % visible * 120 + 'ms' } as CSSProperties}>
                <div className="review-person"><span className="review-avatar" aria-hidden="true">{slide.initials}</span><div><h3>{slide.name}</h3><span>{slide.company}</span></div></div>
                <span className="review-placeholder">Placeholder testimonial</span>
                <blockquote>“{slide.placeholder}”</blockquote>
                <div className="review-source"><span className="google-mark" aria-hidden="true">G</span><span>Google review placeholder<span className="review-time">Posted time awaiting verification</span></span></div>
                <div className="review-card-rating"><Stars /><span>(5.0 sample)</span></div>
              </article>
            </div>;
          })}
        </div></div>
        <div className="testimonial-controls"><button onClick={() => carousel.move(-1)} aria-label="Previous testimonial"><ArrowLeft size={18} /></button>
          {slides.map((_, i) => <button className={'hero-dot ' + (carousel.active === i ? 'active' : '')} key={i} aria-label={'Show testimonial ' + (i + 1)} aria-current={carousel.active === i ? 'true' : undefined} onClick={() => carousel.change(i)} />)}
          <button onClick={() => carousel.move(1)} aria-label="Next testimonial"><ArrowRight size={18} /></button><button onClick={() => carousel.setPaused(p => !p)} aria-label={carousel.paused ? 'Play testimonials' : 'Pause testimonials'}>{carousel.paused ? <Play size={16} /> : <Pause size={16} />}</button>
        </div>
      </div>
      <p className="section-note">{c.testimonial.note}</p>
    </div>
  </section>;
}
