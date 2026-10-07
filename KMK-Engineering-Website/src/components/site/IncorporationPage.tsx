import { ArrowRight, Check } from 'lucide-react';
import { businessContent } from '../../businessContent';
import { siteContent } from '../../content';
import { useScrollReveal, type RevealProfile } from '../../hooks/useScrollReveal';
import './incorporation-page.css';
import { getServiceImage } from '../../serviceImage';
import './service-image.css';

const profiles: readonly RevealProfile[] = [
  { selector: '.inc-page-first .inc-page-image', motion: 'left' },
  { selector: '.inc-page-first .inc-page-copy', motion: 'right' },
  { selector: '.inc-page-second .inc-page-copy', motion: 'left' },
  { selector: '.inc-page-second .inc-page-image', motion: 'right' },
  { selector: '.inc-page-benefit,.inc-page-service', motion: 'up', stagger: .1 },
];
const benefits = ['End-to-End consultant solution', 'High standards in networks', 'Competently architect market', 'Collaboration and idea-sharing'];
export function IncorporationPage() {
  useScrollReveal(profiles);
  const item = businessContent.find(item => item.id === 'incorporation')!;
  const company = siteContent.company;
  const contacts = [company.phone, company.email, company.address].filter(value => !value.includes('['));
  const image = <img className="shared-service-image" src={getServiceImage('/incorporation').src} alt={getServiceImage('/incorporation').alt} width="1024" height="1024" />;
  return <div className="incorporation-page" id="incorporation">
    <div className="container">
      <section className="inc-page-block inc-page-first" aria-labelledby="inc-page-title">
        <div className="inc-page-image">{image}</div>
        <div className="inc-page-copy">
          <span className="eyebrow">Company Incorporation</span>
          <h1 id="inc-page-title">We make <strong>Business Incorporation</strong><br />and best business <strong>consulting</strong></h1>
          <p>KMK Engineering supports entrepreneurs, startups and established businesses with company incorporation and business setup in Singapore. We help organise registration preparation, documentation and the practical steps needed to start with confidence.</p>
          <div className="inc-page-benefits">{benefits.map(benefit => <div className="inc-page-benefit" key={benefit}><Check size={20} aria-hidden="true" /><span>{benefit}</span></div>)}</div>
          <div className="inc-page-contact"><a className="button-primary" href="/contact">Contact With Us <ArrowRight size={18} /></a>{contacts.map(contact => <span key={contact}>{contact}</span>)}</div>
        </div>
      </section>
      <section className="inc-page-block inc-page-second" aria-labelledby="inc-page-services-title">
        <div className="inc-page-copy">
          <span className="eyebrow">Company Incorporation</span>
          <h2 id="inc-page-services-title">Introducing our dedicated<br />expert <strong>Business Incorporation</strong></h2>
          <p>Incorporating a business in Singapore can be a smooth and hassle-free process when you choose the right partner.</p>
          <div className="inc-page-services">{item.services.map(service => <div className="inc-page-service" key={service.title}><span className="inc-page-check"><Check size={22} aria-hidden="true" /></span><div><h3>{service.title}</h3><p>{service.text}</p></div></div>)}</div>
        </div>
        <div className="inc-page-image"><img className="shared-service-image" src={getServiceImage('/incorporation-meeting').src} alt={getServiceImage('/incorporation-meeting').alt} width="960" height="720"/></div>
      </section>
      <section className="inc-page-faq" aria-label="Additional incorporation guidance">{item.blocks.map(block => <div key={block.title}><h2>{block.title}</h2>{block.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>)}</section>
      <section className="inc-page-faq" aria-labelledby="inc-faq-title"><span className="eyebrow">Frequently Asked Questions</span><h2 id="inc-faq-title">{item.faqTitle}</h2>{item.faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
    </div>
  </div>;
}
