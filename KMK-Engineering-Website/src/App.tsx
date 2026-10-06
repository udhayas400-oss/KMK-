import { AboutSection, BlogSection, FeaturedServices, HeroSection, MetricsSection, PartnersSection, SafetyStatement, ScrollProgress, ServicesSection, TestimonialSection, TrustStrip, WhySection } from './components/site/PremiumSections';
import { ContactSection } from './components/site/ContactSection';
import { FaqSection } from './components/site/FaqSection';
import { Footer } from './components/site/Footer';
import { Header } from './components/site/Header';
import { SiteEffects } from './components/site/SiteEffects';
function App() { return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteEffects /><ScrollProgress /><Header /><main id="main-content"><HeroSection /><TrustStrip /><AboutSection /><FeaturedServices /><MetricsSection /><ServicesSection /><WhySection /><SafetyStatement /><BlogSection /><TestimonialSection /><PartnersSection /><FaqSection /><ContactSection /></main><Footer /></div>; }
export default App;
