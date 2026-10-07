import { AboutSection, BlogSection, FeaturedServices, HeroSection, MetricsSection, PartnersSection, SafetyStatement, ScrollProgress, ServicesSection, TestimonialSection, TrustStrip, WhySection } from './components/site/PremiumSections';
import { ContactSection } from './components/site/ContactSection';
import { FaqSection } from './components/site/FaqSection';
import { Footer } from './components/site/Footer';
import { Header } from './components/site/Header';
import { SiteEffects } from './components/site/SiteEffects';
import { useEffect, useState } from 'react';
import { IncorporationPage } from './components/site/IncorporationPage';
function App() {
  const [incorporation, setIncorporation] = useState(() => window.location.hash === '#incorporation');
  useEffect(() => {
    const navigate = () => setIncorporation(window.location.hash === '#incorporation');
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  }, []);
  useEffect(() => {
    if (incorporation) window.scrollTo({ top: 0, behavior: 'instant' });
    else if (window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
  }, [incorporation]);
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteEffects key={String(incorporation)} /><ScrollProgress /><Header /><main id="main-content">{incorporation ? <IncorporationPage /> : <><HeroSection /><TrustStrip /><AboutSection /><FeaturedServices /><MetricsSection /><ServicesSection /><WhySection /><SafetyStatement /><BlogSection /><TestimonialSection /><PartnersSection /><FaqSection /><ContactSection /></>}</main><Footer /></div>;
}
export default App;
