import { useEffect, useLayoutEffect, useState } from 'react';
import { AboutSection, BlogSection, FeaturedServices, HeroSection, MetricsSection, PartnersSection, SafetyStatement, ScrollProgress, ServicesSection, TestimonialSection, TrustStrip, WhySection } from './components/site/PremiumSections';
import { ContactSection } from './components/site/ContactSection';
import { FaqSection } from './components/site/FaqSection';
import { Footer } from './components/site/Footer';
import { Header } from './components/site/Header';
import { SiteEffects } from './components/site/SiteEffects';
import { DedicatedPages } from './components/site/DedicatedPages';
function currentRoute(){return window.location.pathname.replace(/\/$/,'')||'/';}
function RouteContent({route}:{route:string}){
 useLayoutEffect(()=>{window.scrollTo({top:0,behavior:'instant'});},[]);
 return <><SiteEffects/><main id="main-content" tabIndex={-1}>{route==='/'?<><HeroSection/><TrustStrip/><AboutSection/><FeaturedServices preview/><MetricsSection/><ServicesSection/><WhySection/><SafetyStatement/><BlogSection/><TestimonialSection/><PartnersSection/><FaqSection/><ContactSection/></>:<DedicatedPages route={route}/>}</main></>;
}
function App(){
 const [route,setRoute]=useState(currentRoute);
 useEffect(()=>{
  const pop=()=>setRoute(currentRoute());
  const click=(event:MouseEvent)=>{
   const anchor=(event.target as Element).closest?.('a[href]');
   if(!(anchor instanceof HTMLAnchorElement)||event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||anchor.target||anchor.hasAttribute('download'))return;
   const url=new URL(anchor.href);
   if(url.origin!==window.location.origin||url.hash||!['http:','https:'].includes(url.protocol))return;
   event.preventDefault();
   if(url.pathname!==window.location.pathname){history.pushState({},'',url.pathname);setRoute(currentRoute());}else window.scrollTo({top:0,behavior:'instant'});
  };
  window.addEventListener('popstate',pop);document.addEventListener('click',click);
  return()=>{window.removeEventListener('popstate',pop);document.removeEventListener('click',click);};
 },[]);
 useEffect(()=>{
  document.title=(route==='/'?'Home':route.slice(1).replaceAll('-',' '))+' | KMK Engineering';
  document.querySelectorAll<HTMLAnchorElement>('.nav-links a').forEach(anchor=>{
   const active=anchor.pathname===route;
   if(active)anchor.setAttribute('aria-current','page');else anchor.removeAttribute('aria-current');
   anchor.dataset.active=String(active||(anchor.pathname==='/iso'&&route.startsWith('/iso-'))||(anchor.pathname==='/bizsafe'&&route.startsWith('/bizsafe-')));
  });
 },[route]);
 return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><ScrollProgress/><Header/><RouteContent key={route} route={route}/><Footer/></div>;
}
export default App;
