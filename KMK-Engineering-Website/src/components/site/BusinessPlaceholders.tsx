import { ArrowRight } from 'lucide-react';
import { ButtonLabel } from './ButtonLabel';
import '../../bca.css';

// Navigation destinations only; no unverified service capabilities are claimed.
export function BusinessPlaceholders() {
  return <div className="business-placeholders">
    {[
      { id: 'incorporation', title: 'Incorporation', description: 'KMK incorporation information is being prepared. Contact the team to confirm availability, scope and next steps.' },
      { id: 'bca', title: 'BCA', description: 'KMK BCA information is being prepared. Contact the team to discuss your requirements and confirm the available scope.' },
    ].map(item => <section id={item.id} className="business-placeholder" key={item.id} aria-labelledby={item.id + '-title'}>
      {item.id === 'bca' && <div className="bca-image"><img src="/industry-construction.jpg" alt="Construction site with tower cranes, building work and workers" width="1024" height="1024" loading="lazy" /></div>}
      {item.id === 'bca' ? <div className="bca-content">
        <span className="eyebrow">KMK Engineering · Information coming soon</span>
        <h3 id={item.id + '-title'}>{item.title}</h3><p>{item.description}</p>
        <a className="button-primary" href="#contact"><ButtonLabel>Enquire with KMK</ButtonLabel><ArrowRight size={18} /></a>
      </div> : <div className="incorporation-content">
      <span className="eyebrow">KMK Engineering · Information coming soon</span>
      <h3 id={item.id + '-title'}>{item.title}</h3><p>{item.description}</p>
      <a className="button-primary" href="#contact"><ButtonLabel>Enquire with KMK</ButtonLabel><ArrowRight size={18} /></a>
      </div>}
      {item.id === 'incorporation' && <div className="incorporation-image"><img src="/incorporation-placeholder.svg" alt="Placeholder illustration for company documentation and business setup" width="1024" height="768" loading="lazy" /></div>}
    </section>)}
  </div>;
}
