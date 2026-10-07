import { ArrowRight } from 'lucide-react';
import { ButtonLabel } from './ButtonLabel';
import '../../bca.css';
import { businessContent } from '../../businessContent';

// Original KMK service copy; registration and licensing decisions remain with the authorities.
export function BusinessPlaceholders() {
  return <div className="business-placeholders">
    {businessContent.map(item => <section id={item.id} className="business-placeholder" key={item.id} aria-labelledby={item.id + '-title'}>
      {item.id === 'bca' && <div className="bca-image"><img src="/industry-construction.jpg" alt="Construction site with tower cranes, building work and workers" width="1024" height="1024" loading="lazy" /></div>}
      {item.id === 'bca' ? <div className="bca-content">
        <span className="eyebrow">KMK Engineering · {item.label}</span>
        <h3 id={item.id + '-title'}>{item.title}</h3>
        {item.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        {item.services.map(service => <p key={service.title}><strong>{service.title}</strong><br />{service.text}</p>)}
        <a className="button-primary" href="#contact"><ButtonLabel>Enquire with KMK</ButtonLabel><ArrowRight size={18} /></a>
      </div> : <div className="incorporation-content">
      <span className="eyebrow">KMK Engineering · {item.label}</span>
      <h3 id={item.id + '-title'}>{item.title}</h3>
      {item.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      {item.services.map(service => <p key={service.title}><strong>{service.title}</strong><br />{service.text}</p>)}
      <a className="button-primary" href="#contact"><ButtonLabel>Enquire with KMK</ButtonLabel><ArrowRight size={18} /></a>
      </div>}
      {item.id === 'incorporation' && <div className="incorporation-image"><img src="/incorporation-placeholder.svg" alt="Placeholder illustration for company documentation and business setup" width="1024" height="768" loading="lazy" /></div>}
      <div className="business-details">
        {item.blocks.map(block => <div className="business-detail-block" key={block.title}>
          <h4>{block.title}</h4>
          {block.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {'points' in block && block.points && <ul>{block.points.map(point => <li key={point}><p>{point}</p></li>)}</ul>}
        </div>)}
        <div className="business-faq">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h4>{item.faqTitle}</h4>
          {item.faqs.map(faq => <details key={faq.question}>
            <summary><strong>{faq.question}</strong></summary><p>{faq.answer}</p>
          </details>)}
        </div>
      </div>
    </section>)}
  </div>;
}
