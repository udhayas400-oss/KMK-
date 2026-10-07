import { useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion, useIsPresent, type Variants } from 'framer-motion';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from 'lucide-react';
import { siteContent } from '../../content';
import { motionTiming } from '../../lib/animation';
import { useCarousel } from '../../hooks/useCarousel';
import { ButtonLabel } from './ButtonLabel';

function SlideContent({children,reduced,label}:{children:ReactNode;reduced:boolean|null;label:string}) {
  const present=useIsPresent();
  return <motion.div className="hero-motion-copy" role="group" aria-roledescription="slide" aria-label={label} aria-hidden={!present} inert={!present} initial="hidden" animate="show" exit={{opacity:0,transition:{duration:reduced?0:motionTiming.hero.transition,ease:motionTiming.ease}}}>{children}</motion.div>;
}

export function HeroSlider() {
  const carousel=useCarousel(siteContent.heroSlides.length,motionTiming.hero.intervalMs);
  const {active,reduced}=carousel, slide=siteContent.heroSlides[active], timing=motionTiming.hero;
  const text=(distance:number,delay:number):Variants=>({hidden:{opacity:reduced?1:0,y:reduced?0:distance},show:{opacity:1,y:0,transition:{duration:reduced?0:timing.transition,delay:reduced?0:delay,ease:motionTiming.ease}}});
  useEffect(()=>{siteContent.heroSlides.forEach(item=>{const image=new Image();image.src=item.image;});},[]);
  const actions=(item:typeof slide,sizing=false)=>sizing?<div className="hero-actions"><span className="button-primary">{item.button}<ArrowUpRight size={15}/></span><span className="button-quiet">{siteContent.labels.servicesCta}<ArrowDown size={14}/></span></div>:<motion.div className="hero-actions" variants={text(timing.distance,timing.ctaDelay)}><a className="button-primary" href="/contact" data-testid="link-hero-primary"><ButtonLabel>{item.button}</ButtonLabel><ArrowUpRight size={15}/></a><a className="button-quiet" href="/bizsafe" data-testid="link-hero-secondary"><ButtonLabel>{siteContent.labels.servicesCta}</ButtonLabel><ArrowDown size={14}/></a></motion.div>;
  return <section className="hero" id="home" aria-label="Introduction" aria-roledescription="carousel" tabIndex={0} {...carousel.interactionProps}>
    <AnimatePresence initial={!reduced}><motion.div key={slide.image} className="hero-photo" style={{backgroundImage:`url("${slide.image}")`}} role="img" aria-label={slide.imageAlt} data-testid={`image-hero-slide-${active}`} initial={{opacity:reduced?1:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduced?0:timing.transition,ease:motionTiming.ease}}/></AnimatePresence>
    <div className="container hero-inner"><div className="hero-copy hero-content hero-motion-stack">
      {siteContent.heroSlides.map(item=><div className="hero-content-sizer" aria-hidden="true" inert key={item.image}><div className="eyebrow">{item.eyebrow}</div><div className="display hero-sizing-title" dangerouslySetInnerHTML={{__html:item.title}}/><p>{item.description}</p>{actions(item,true)}</div>)}
      <AnimatePresence initial={!reduced} mode="sync"><SlideContent key={active} reduced={reduced} label={`Slide ${active+1} of ${siteContent.heroSlides.length}`}>
        <motion.div className="eyebrow" variants={text(-timing.distance,timing.labelDelay)} data-testid="text-hero-eyebrow">{slide.eyebrow}</motion.div>
        <motion.h1 className="display" variants={text(timing.distance,timing.headingDelay)} data-testid="text-hero-heading" dangerouslySetInnerHTML={{__html:slide.title}}/>
        <motion.p variants={text(timing.distance,timing.paragraphDelay)} data-testid="text-hero-description">{slide.description}</motion.p>
        {actions(slide)}
      </SlideContent></AnimatePresence>
    </div><div className="hero-controls" aria-label="Hero carousel controls"><button className="hero-arrow" onClick={()=>carousel.move(-1)} aria-label="Previous slide" data-testid="button-hero-previous"><ArrowLeft size={16}/></button><div className="hero-dots" role="group" aria-label="Choose hero slide">{siteContent.heroSlides.map((item,i)=><button key={item.image} className={`hero-dot ${i===active?'active':''}`} onClick={()=>carousel.change(i)} aria-label={`Show slide ${i+1}`} aria-current={i===active?'true':undefined} data-testid={`button-hero-dot-${i}`}/>)}</div><button className="hero-arrow" onClick={()=>carousel.move(1)} aria-label="Next slide" data-testid="button-hero-next"><ArrowRight size={16}/></button><button className="carousel-pause" onClick={()=>carousel.setPaused(p=>!p)} aria-label={carousel.paused?'Play hero slideshow':'Pause hero slideshow'}>{carousel.paused?<Play size={15}/>:<Pause size={15}/>}</button></div></div>
  </section>;
}
