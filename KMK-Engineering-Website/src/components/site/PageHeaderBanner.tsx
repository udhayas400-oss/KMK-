import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../../content';
import { useScrollReveal, type RevealProfile } from '../../hooks/useScrollReveal';
import './page-header-banner.css';

const pages: Record<string, { title: string; breadcrumb?: string; description: string }> = {
  '/about': { title: 'About Us', description: 'Learn more about KMK Engineering, our professional consultancy services, experience and commitment to supporting businesses in Singapore.' },
  '/bizsafe': { title: 'BizSAFE Services', description: 'Professional BizSAFE consultancy and certification support to help businesses strengthen workplace safety and compliance.' },
  '/bizsafe-level-1': { title: 'BizSAFE Level 1', description: 'Discuss workplace safety awareness, management commitment and preparation for your first BizSAFE step.' },
  '/bizsafe-level-2': { title: 'BizSAFE Level 2', description: 'Guidance on risk management preparation and documentation for businesses progressing towards BizSAFE Level 2.' },
  '/bizsafe-level-3': { title: 'BizSAFE Level 3', description: 'Guidance and documentation support for businesses working towards BizSAFE Level 3 certification.' },
  '/bizsafe-level-4': { title: 'BizSAFE Level 4', description: 'Professional support for developing workplace safety and health management systems for BizSAFE Level 4.' },
  '/bizsafe-star': { title: 'BizSAFE STAR', description: 'End-to-end consultancy support for organizations progressing towards BizSAFE STAR recognition.' },
  '/iso': { title: 'ISO Certification', description: "Professional ISO consultancy and certification support designed around your organization's compliance and management-system needs." },
  '/iso-9001': { title: 'ISO 9001', description: 'Quality management system consultancy and certification support for organizations seeking ISO 9001.' },
  '/iso-14001': { title: 'ISO 14001', description: 'Environmental management system support for organizations working towards ISO 14001 certification.' },
  '/iso-45001': { title: 'ISO 45001', description: 'Occupational health and safety management system support for ISO 45001 certification.' },
  '/iso-22000': { title: 'ISO 22000', description: 'Food safety management system consultancy and certification guidance for ISO 22000.' },
  '/iso-27001': { title: 'ISO 27001', description: 'Information security management system support for organizations preparing for ISO 27001 certification.' },
  '/incorporation': { title: 'Company Incorporation', description: 'Professional company incorporation support to help entrepreneurs and businesses establish their presence in Singapore efficiently.' },
  '/bca': { title: 'BCA Registration', description: 'Professional guidance for BCA registration, contractor classification, workheads, grading and supporting requirements.' },
  '/pr-application': { title: 'PR Application', description: 'Professional guidance and documentation support for individuals preparing their Singapore Permanent Residence application.' },
  '/blog': { title: 'Blog', breadcrumb: 'Blog', description: 'Explore practical insights, updates and guidance on BizSAFE, ISO, BCA, incorporation and business compliance.' },
  '/contact': { title: 'Contact Us', description: 'Get in touch with our team for BizSAFE, ISO, BCA, incorporation and consultancy support.' },
  '/faq': { title: 'Frequently Asked Questions', description: 'Find answers to common questions about workplace safety, certification preparation and KMK consultancy support.' },
};
const profiles: readonly RevealProfile[] = [
  { selector: '.page-header-banner h1', motion: 'up', trigger: '.page-header-banner' },
  { selector: '.page-banner-breadcrumb', motion: 'up', trigger: '.page-header-banner' },
  { selector: '.page-banner-arrow', motion: 'left', trigger: '.page-header-banner' },
  { selector: '.page-banner-description p', motion: 'right', trigger: '.page-header-banner' },
];

export function PageHeaderBanner({ route }: { route: string }) {
  useScrollReveal(profiles);
  const service = siteContent.services.find(service => service.href === route);
  const page = pages[route] || (service ? { title: service.title, description: service.description } : { title: 'Page Not Found', description: 'Return to Home to explore KMK Engineering services and consultancy support.' });
  return <section className="page-header-banner" aria-labelledby="page-banner-title">
    <div className="container page-banner-layout">
      <div className="page-banner-heading">
        <h1 id="page-banner-title">{page.title}</h1>
        <nav className="page-banner-breadcrumb" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li aria-hidden="true"><ArrowRight size={18}/></li><li aria-current="page">{page.breadcrumb || page.title}</li></ol></nav>
      </div>
      <div className="page-banner-description"><ArrowUpRight className="page-banner-arrow" size={38} aria-hidden="true"/><p>{page.description}</p></div>
    </div>
  </section>;
}
