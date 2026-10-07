import { ArrowRight } from 'lucide-react';
import { ButtonLabel } from './ButtonLabel';
import '../../bca.css';

// Original KMK service copy; registration and licensing decisions remain with the authorities.
export function BusinessPlaceholders() {
  return <div className="business-placeholders">
    {[
      { id: 'incorporation', title: 'Incorporation', label: 'Company Setup Support', paragraphs: [
        'KMK Engineering supports entrepreneurs, startups and established businesses setting up a company in Singapore, from initial preparation through the incorporation process.',
        'We help you choose an appropriate business structure and organise ACRA-related registration requirements, with clear application steps and documentation guidance.',
      ], points: [
        { title: 'Business Name Registration', text: 'Guidance on selecting, checking and applying to register a suitable company name.' },
        { title: 'Preparation of Documents', text: 'Assistance preparing incorporation documents, company particulars and the required legal documentation.' },
        { title: 'Registration & Approval Support', text: 'Guidance on ACRA submission requirements and relevant government approvals, where applicable, through an organised process.' },
      ] },
      { id: 'bca', title: 'BCA', label: 'Construction Registration Support', paragraphs: [
        'KMK Engineering helps companies in Singapore’s construction and built-environment sector prepare for BCA registration, review eligibility and organise application documents.',
        'The Contractors Registration System (CRS) covers contractor registration by workhead and grade. The Builder Licensing Scheme (BLS) separately licenses builders undertaking regulated general or specialist building works.',
      ], points: [
        { title: 'Registration & Workhead Guidance', text: 'Identify relevant workheads, registration categories and grades for your company’s activities.' },
        { title: 'Documentation & Eligibility Review', text: 'Review financial requirements, project track records and technical personnel qualifications, and prepare supporting records.' },
        { title: 'Application & Compliance Support', text: 'Guidance through application steps, documentation queries and applicable registration or licensing requirements.' },
      ] },
    ].map(item => <section id={item.id} className="business-placeholder" key={item.id} aria-labelledby={item.id + '-title'}>
      {item.id === 'bca' && <div className="bca-image"><img src="/industry-construction.jpg" alt="Construction site with tower cranes, building work and workers" width="1024" height="1024" loading="lazy" /></div>}
      {item.id === 'bca' ? <div className="bca-content">
        <span className="eyebrow">KMK Engineering · {item.label}</span>
        <h3 id={item.id + '-title'}>{item.title}</h3>
        {item.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        {item.points.map(point => <p key={point.title}><strong>{point.title}</strong><br />{point.text}</p>)}
        <a className="button-primary" href="#contact"><ButtonLabel>Enquire with KMK</ButtonLabel><ArrowRight size={18} /></a>
      </div> : <div className="incorporation-content">
      <span className="eyebrow">KMK Engineering · {item.label}</span>
      <h3 id={item.id + '-title'}>{item.title}</h3>
      {item.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      {item.points.map(point => <p key={point.title}><strong>{point.title}</strong><br />{point.text}</p>)}
      <a className="button-primary" href="#contact"><ButtonLabel>Enquire with KMK</ButtonLabel><ArrowRight size={18} /></a>
      </div>}
      {item.id === 'incorporation' && <div className="incorporation-image"><img src="/incorporation-placeholder.svg" alt="Placeholder illustration for company documentation and business setup" width="1024" height="768" loading="lazy" /></div>}
    </section>)}
  </div>;
}
