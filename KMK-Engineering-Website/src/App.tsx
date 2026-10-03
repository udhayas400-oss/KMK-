import { AboutSection, FeaturedServices, HeroSection, IndustriesSection, MetricsSection, PartnersSection, ProjectsSection, SafetyStatement, ScrollProgress, ServicesSection, TestimonialSection, TrustStrip, WhySection, WorkflowSection } from './components/site/PremiumSections';
import { ContactSection } from './components/site/ContactSection';
import { FaqSection } from './components/site/FaqSection';
import { Footer } from './components/site/Footer';
import { Header } from './components/site/Header';
import { SiteEffects } from './components/site/SiteEffects';
function App() { return <div className="site-shell"><SiteEffects /><ScrollProgress /><Header /><main><HeroSection /><TrustStrip /><AboutSection /><ServicesSection /><FeaturedServices /><WhySection /><MetricsSection /><IndustriesSection /><WorkflowSection /><ProjectsSection /><SafetyStatement /><PartnersSection /><TestimonialSection /><FaqSection /><ContactSection /></main><Footer /></div>; }
export default App;
