import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../../content';
import { RevealHeading } from './RevealHeading';

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const reduced = useReducedMotion();
  const slide = siteContent.heroSlides[activeSlide];
  const slideCount = siteContent.heroSlides.length;
  const duration = reduced ? 0 : .75;
  const textVariants: Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 },
    show: (delay: number = 0) => ({ opacity: 1, y: 0, transition: { duration, delay: reduced ? 0 : delay, ease: [.22, 1, .36, 1] } }),
  };

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);
  useEffect(() => {
    const preloads = siteContent.heroSlides.map(item => { const image = new Image(); image.src = item.image; return image; });
    return () => { preloads.forEach(image => { image.onload = image.onerror = null; }); };
  }, []);
  useEffect(() => {
    if (interacting || !pageVisible || reduced) return;
    const timer = window.setInterval(() => setActiveSlide(current => (current + 1) % slideCount), 6500);
    return () => window.clearInterval(timer);
  }, [slideCount, interacting, pageVisible, reduced]);

  const changeSlide = (direction: number) => setActiveSlide(current => (current + direction + slideCount) % slideCount);
  // Sizers reserve the tallest slide's space; they contain no hooks or interactive content.
  const sizingContent = (item: typeof slide) => <>
    <div className="eyebrow">{item.eyebrow}</div>
    <div className="display hero-sizing-title" dangerouslySetInnerHTML={{ __html: item.title }} />
    <p>{item.description}</p>
    <div className="hero-actions"><span className="button-primary">{item.button}<ArrowUpRight size={15} /></span><span className="button-quiet">{siteContent.labels.servicesCta}<ArrowDown size={14} /></span></div>
  </>;

  return <section className="hero" id="home" aria-label="Introduction" aria-roledescription="carousel"
    onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)}
    onFocus={() => setInteracting(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
    <AnimatePresence initial={!reduced}>
      <motion.div key={slide.image} className="hero-photo" style={{ backgroundImage: `url("${slide.image}")` }} role="img" aria-label={slide.imageAlt}
        data-testid={`image-hero-slide-${activeSlide}`} initial={{ opacity: reduced ? 1 : 0, scale: reduced ? 1 : 1.025 }}
        animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .85, ease: 'easeOut' }} />
    </AnimatePresence>
    <div className="container hero-inner">
      <div className="hero-copy hero-content hero-motion-stack">
        {siteContent.heroSlides.map(item => <div className="hero-content-sizer" aria-hidden="true" inert key={item.image}>{sizingContent(item)}</div>)}
        <AnimatePresence initial={!reduced} mode="wait">
          <motion.div className="hero-motion-copy" key={activeSlide} role="group" aria-roledescription="slide" aria-label={`Slide ${activeSlide + 1} of ${slideCount}`}
            initial="hidden" animate="show" exit={{ opacity: 0, y: reduced ? 0 : -8, transition: { duration: reduced ? 0 : .3 } }}>
            <motion.div className="eyebrow" variants={textVariants} custom={0} data-testid="text-hero-eyebrow">{slide.eyebrow}</motion.div>
            <RevealHeading as="h1" className="display" html={slide.title} autoPlay delay={.1} data-testid="text-hero-heading" />
            <motion.p variants={textVariants} custom={.35} data-testid="text-hero-description">{slide.description}</motion.p>
            <motion.div className="hero-actions" variants={textVariants} custom={.45}>
              <a className="button-primary" href="#contact" data-testid="link-hero-primary">{slide.button}<ArrowUpRight size={15} /></a>
              <a className="button-quiet" href="#services" data-testid="link-hero-secondary">{siteContent.labels.servicesCta}<ArrowDown size={14} /></a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="hero-controls" aria-label="Hero carousel controls">
        <button className="hero-arrow" onClick={() => changeSlide(-1)} aria-label="Previous slide" data-testid="button-hero-previous"><ArrowLeft size={16} /></button>
        <div className="hero-dots" role="group" aria-label="Choose hero slide">
          {siteContent.heroSlides.map((item, index) => <button key={item.eyebrow} className={`hero-dot ${index === activeSlide ? 'active' : ''}`} onClick={() => setActiveSlide(index)} aria-label={`Show slide ${index + 1}`} aria-current={index === activeSlide ? 'true' : undefined} data-testid={`button-hero-dot-${index}`} />)}
        </div>
        <button className="hero-arrow" onClick={() => changeSlide(1)} aria-label="Next slide" data-testid="button-hero-next"><ArrowRight size={16} /></button>
      </div>
    </div>
  </section>;
}
