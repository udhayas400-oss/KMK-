import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Bot, Cloud, Globe, Smartphone, TrendingUp, Palette, Video, Users } from 'lucide-react';
import './sponsor-page.css';

const services = [
  { title: 'AI & Intelligent Automation', tagline: 'Smarter Technology. Smarter Business.', description: 'AI assistants, voice automation, intelligent workflows, business analytics, and custom AI-powered solutions.', icon: Bot },
  { title: 'ERP, CRM & SaaS Solutions', tagline: 'Simplify Operations. Accelerate Growth.', description: 'Custom ERP, CRM, HRMS, inventory, billing, accounting, and cloud-based business management platforms.', icon: Cloud },
  { title: 'Website Design & Development', tagline: 'Websites That Make an Impression.', description: 'Professional business websites, e-commerce platforms, landing pages, and high-performance web applications.', icon: Globe },
  { title: 'Mobile App Development', tagline: 'Your Business. In Every Pocket.', description: 'Android and iOS applications, intuitive UI/UX design, and scalable mobile solutions.', icon: Smartphone },
  { title: 'Digital Marketing & Performance Advertising', tagline: 'More Visibility. Better Leads. Real Growth.', description: 'Meta Ads, Google Ads, lead generation, SEO, conversion optimization, and results-focused marketing campaigns.', icon: TrendingUp },
  { title: 'Branding & Creative Design', tagline: 'Create an Identity People Remember.', description: 'Brand strategy, logo design, visual identity, social media creatives, promotional campaigns, and brand storytelling.', icon: Palette },
  { title: 'Content Creation & Video Marketing', tagline: 'Stories That Capture Attention.', description: 'Promotional videos, reels, ad creatives, motion graphics, product explainers, and engaging social media content.', icon: Video },
  { title: 'Social Media Management', tagline: 'Build Communities. Strengthen Brands.', description: 'Content planning, account management, audience engagement, social media campaigns, and performance reporting.', icon: Users },
];
export function SponsorPage() {
  const reduced = useReducedMotion();
  const reveal = (delay = 0) => ({ initial: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 35 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .12 }, transition: { duration: reduced ? 0 : .75, delay: reduced ? 0 : delay, ease: [.22, 1, .36, 1] as const } });
  return <section className="section sponsor-page"><div className="container">
    <div className="sponsor-intro">
      <div><motion.span className="eyebrow" {...reveal()}>Sponsor · Digital Business Solutions</motion.span><motion.h2 {...reveal()}>We Build. We Innovate. We Grow Brands.</motion.h2><motion.p {...reveal(.1)}>From intelligent software solutions to powerful digital marketing strategies, we help businesses transform ideas into technology, visibility into opportunities, and opportunities into growth.</motion.p></div>
      <motion.img {...reveal(.15)} src="/service-photos/sponsor-technology.jpg" alt="Technology and digital-business professionals collaborating with laptops and analytics dashboards in a modern office" width="1200" height="900" className="sponsor-image" />
    </div>
    <motion.h2 className="sponsor-services-heading" {...reveal()}>Our Services</motion.h2>
    <div className="sponsor-grid">{services.map((service, index) => { const Icon = service.icon; return <motion.article {...reveal((index % 4) * .1)} key={service.title} className="sponsor-card"><div className="sponsor-card-surface"><div className="sponsor-card-top"><span className="sponsor-number">{String(index + 1).padStart(2, '0')}</span><Icon size={32} aria-hidden="true" /></div><h3>{service.title}</h3><p className="sponsor-tagline">{service.tagline}</p><p>{service.description}</p></div></motion.article>; })}</div>
    <motion.div className="sponsor-cta" {...reveal()}><h2>Ready to Build, Innovate and Grow?</h2><p>Let’s turn your ideas into technology, visibility and measurable business growth.</p><a className="button-primary" href="/contact">Start Your Project<ArrowRight size={18} aria-hidden="true" /></a></motion.div>
  </div></section>;
}
