import { useEffect, useLayoutEffect } from 'react';
import { usePageRoute } from './routing';
import { AboutSection, BlogSection, HeroSection, MetricsSection, PartnersSection, SafetyStatement, ScrollProgress, ServicesSection, TestimonialSection, TrustStrip, WhySection } from './components/site/PremiumSections';
import { ContactSection } from './components/site/ContactSection';
import { FaqSection } from './components/site/FaqSection';
import { Footer } from './components/site/Footer';
import { Header } from './components/site/Header';
import { SiteEffects } from './components/site/SiteEffects';
import { DedicatedPages } from './components/site/DedicatedPages';
import { PageHeaderBanner } from './components/site/PageHeaderBanner';
import { OurServicesOverview } from './components/site/OurServicesOverview';
function RouteContent({route}:{route:string}){
 useLayoutEffect(()=>{window.scrollTo({top:0,left:0,behavior:'instant'});},[]);
 return <><SiteEffects/><main id="main-content" tabIndex={-1}>{route==='/'?<><HeroSection/><TrustStrip/><AboutSection/><OurServicesOverview/><MetricsSection/><ServicesSection/><WhySection/><SafetyStatement/><BlogSection/><TestimonialSection/><PartnersSection/><FaqSection/><ContactSection/></>:<><PageHeaderBanner route={route}/><DedicatedPages route={route}/></>}</main></>;
}
function App(){
 const route=usePageRoute();
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
