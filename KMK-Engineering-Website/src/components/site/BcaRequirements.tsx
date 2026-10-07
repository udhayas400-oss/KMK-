import { BadgeCheck, BriefcaseBusiness, ShieldCheck, Check } from 'lucide-react';

const crRows = [
  ['L1', 'Up to S$1 million', 'S$50,000', 'S$300,000'],
  ['L2', 'Up to S$4 million', 'S$50,000', 'S$1 million'],
  ['L3', 'Higher threshold', 'S$150,000', 'S$3 million'],
  ['L4', 'Higher threshold', 'S$250,000', 'S$5 million'],
  ['L5', 'Higher threshold', 'S$500,000', 'S$10 million'],
  ['L6', 'Unlimited', 'S$1.5 million', 'S$30 million'],
];
const cwRows = [['C3', 'Entry level'], ['C2–C1', 'Mid-tier'], ['B2–B1', 'Upper mid-tier'], ['A2–A1', 'Unlimited']];
const personnel = [
  ['L1', 'Minimum 1 Technician.'],
  ['L2', 'Minimum 1 Technician with 3 years of relevant experience.'],
  ['L3', 'Minimum 2 Technicians.'],
  ['L4', 'Minimum 2 Technicians, including 1 with at least 5 years of relevant experience.'],
  ['L5', 'Minimum 1 Professional, or 2 Technicians including 1 with at least 8 years of relevant experience.'],
  ['L6', 'Minimum 2 Professionals with at least 5 years of relevant experience, including 1 with the Specialist Diploma in Construction Productivity (SDCP).'],
];
function Table({ headers, rows, label }: { headers: string[]; rows: string[][]; label: string }) {
  return <div className="bca-table-window" tabIndex={0} role="region" aria-label={label + ' — scroll horizontally on smaller screens'}><table>
    <caption>{label}</caption><thead><tr>{headers.map(h => <th scope="col" key={h}>{h}</th>)}</tr></thead>
    <tbody>{rows.map(row => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={index}>{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
  </table></div>;
}
export function BcaRequirements() {
  return <div className="bca-complete-content">
    <section className="bca-content-section" aria-labelledby="bca-mandatory-title">
      <span className="eyebrow">Construction Sector Standards</span>
      <h3 id="bca-mandatory-title">Why is BCA Registration Mandatory?</h3>
      <p>BCA registration helps construction businesses demonstrate the capability required for their workhead and grade. Understanding when registration or builder licensing is required supports regulatory compliance, tender planning and consistent construction-sector standards.</p>
      <div className="bca-benefit-grid">
        <article className="bca-info-card"><ShieldCheck className="bca-card-icon" size={38} aria-hidden="true"/><h4>1. Legal Compliance</h4>
          <p>Registration is more than an administrative formality where it is required for a company’s activities.</p>
          <p><strong>Government Tenders:</strong> Appropriate CRS registration is required for applicable public-sector construction tenders and first-level subcontracting on public construction projects.</p>
          <p><strong>Foreign Workers:</strong> Since 1 June 2025, firms wishing to hire construction-sector S Pass or Work Permit holders must register with CRS.</p>
          <p><strong>Consequences:</strong> Missing registration or licensing requirements can cause permit issues, operational disruption and project delays. Breaching applicable laws may also lead to enforcement or penalties.</p>
        </article>
        <article className="bca-info-card"><BadgeCheck className="bca-card-icon" size={38} aria-hidden="true"/><h4>2. Credibility &amp; Trust</h4>
          <p>Registration provides a verifiable indication that a contractor has met the criteria for its registered category.</p>
          <p><strong>Financial Stability:</strong> Evidence of financial capacity, including applicable paid-up capital and net worth requirements.</p>
          <p><strong>Track Record:</strong> Documentation of relevant projects and completed work where required.</p>
          <p><strong>Technical Proof:</strong> Qualified full-time technical personnel, such as professionals or technicians, appropriate to the workhead and grade.</p>
          <p><strong>Consumer Protection:</strong> Registration supports accountability and compliance checks; clients should still review the contract, project history and current registration status.</p>
        </article>
        <article className="bca-info-card"><BriefcaseBusiness className="bca-card-icon" size={38} aria-hidden="true"/><h4>3. Business Advantage</h4>
          <p>A suitable registration can support a contractor’s development in Singapore’s construction market.</p>
          <p><strong>Access to Larger Projects:</strong> The registered grade determines applicable public-sector tendering limits, subject to tender conditions.</p>
          <p><strong>Private Sector Preference:</strong> Registration can help a firm demonstrate its capability when clients compare prospective contractors.</p>
          <p><strong>Homeowner / Client Trust:</strong> A recognised workhead and current registration can provide a professional credibility signal, alongside references and relevant experience.</p>
        </article>
      </div>
    </section>
    <section className="bca-content-section" aria-label="BCA grading systems">
      <div className="bca-grading-grid">
        <article className="bca-info-card"><h4>Grading System (CR)</h4><p>Construction-related workheads use financial grades with corresponding public-sector tendering limits. The requested reference examples are reproduced below.</p>
          <Table label="CR reference grading examples" headers={['Grade', 'Max Tender Value', 'Min Paid-Up Capital', '3-Year Track Record']} rows={crRows}/>
        </article>
        <article className="bca-info-card"><h4>Grading System (CW)</h4><p>The reference groups Construction Workhead grades into the following broad financial tiers.</p>
          <Table label="CW reference grading examples" headers={['Grade', 'Maximum Tender Value']} rows={cwRows}/>
        </article>
      </div>
      <p className="bca-reference-note">These are reference examples, not a current eligibility schedule. BCA’s published 1 July 2026–30 June 2027 limits include CR/ME L1 at S$0.8 million and L2 at S$1.6 million; CW A2 is S$105 million and A1 is unlimited. Capital, track-record and personnel criteria depend on the specific workhead. <a href="https://www1.bca.gov.sg/growth-and-transformation/procurement/registration-of-built-environment-firms/tendering-limits/crs-fm-and-sy-registries-tendering-limits/" target="_blank" rel="noreferrer">Check current BCA tendering limits</a>.</p>
    </section>
    <section className="bca-content-section" aria-labelledby="bca-requirements-title">
      <span className="eyebrow">Application Preparation</span><h3 id="bca-requirements-title">BCA Registration Requirements</h3>
      <p>Companies must meet the operational, financial and personnel criteria for their chosen workhead and grade. KMK Engineering helps organise evidence and identify documentation gaps before application.</p>
      <div className="bca-requirement-list">
        <article className="bca-requirement-card"><div className="bca-number" aria-hidden="true">1</div><div><h4>Financial Requirements</h4><p>Companies must demonstrate adequate financial capacity for the registration they seek.</p>
          <p><strong>Minimum Paid-Up Capital:</strong> The reference example shows S$50,000 for L1/L2 entry grades. Confirm the applicable capital criterion for the specific workhead before relying on this illustration.</p>
          <p><strong>Net Worth:</strong> Meet the applicable financial threshold for the selected workhead and grade.</p>
          <p><strong>Audited Financial Statements:</strong> Prepare the latest audited accounts for grades where BCA requires them, generally no more than 12 months old.</p>
          <p><strong>Management Accounts:</strong> Recent director-signed management accounts may be accepted for applicable lower-grade or single-grade applications where the rules allow.</p>
        </div></article>
        <article className="bca-requirement-card"><div className="bca-number" aria-hidden="true">2</div><div><h4>Track Record Requirements</h4><p>Applicants may need to demonstrate relevant project experience over the preceding three years. The reference includes a S$300,000 entry-grade track-record example; the applicable value, period and exceptions must be checked for the workhead.</p>
          <p>Organise evidence of project scope, value, completion status and your company’s role:</p>
          <ul className="bca-document-list">{['Award letters or work orders', 'Substantial completion or handover certificates', 'Latest payment certificates or final accounts', 'Client endorsements and supporting project records'].map(text => <li key={text}><Check size={18} aria-hidden="true"/>{text}</li>)}</ul>
        </div></article>
        <article className="bca-requirement-card"><div className="bca-number" aria-hidden="true">3</div><div><h4>Personnel Requirements</h4><p>BCA can require qualified full-time technical staff according to the workhead and grade, with suitable experience and employment evidence.</p>
          <p><strong>Professional (P) Category:</strong> Relevant recognised degrees may include Civil / Structural, Mechanical or Electrical Engineering, Architecture, Building or an accepted equivalent discipline.</p>
          <p><strong>Technician (T) Category:</strong> Relevant recognised diplomas or technical qualifications may be accepted, subject to BCA’s qualification and experience criteria.</p>
          <div className="bca-cr06"><h5>Personnel Requirements for CR06 (Interior Decoration):</h5><p>Grade-by-grade personnel overview. Check the current CR06 specific registration requirements and qualification definitions before applying.</p>
            <div className="bca-cr06-grid">{personnel.map(([grade, text]) => <div key={grade}><strong>{grade}:</strong><span>{text}</span></div>)}</div>
            <a href="https://www1.bca.gov.sg/growth-and-transformation/procurement/registration-of-built-environment-firms/contractors-registration-system-crs/" target="_blank" rel="noreferrer">Review BCA workhead requirements</a>
          </div>
        </div></article>
      </div>
    </section>
  </div>;
}
