import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../../content';
import logoUrl from '../../../logi.jpeg';

export function Footer() {
  const { company, footer } = siteContent;
  const emailHref = company.email.includes('[') ? '#contact' : `mailto:${company.email}`;
  const phoneHref = company.phone.includes('[') ? '#contact' : `tel:${company.phone}`;

  return (
    <footer className="footer footer-premium">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <a className="brand" href="#home" data-testid="link-footer-home">
              <span className="brand-mark brand-logo-wrap" aria-hidden="true"><img src={logoUrl} alt="" /></span>
              <span className="brand-name">
                {company.shortName}
                <span className="brand-sub">SAFETY / ENGINEERING</span>
              </span>
            </a>
            <p>{footer.about}</p>
            <span className="marquee-note">{footer.disclaimer}</span>
          </div>
          <div>
            <h3>Quick Links</h3>
            <div className="footer-links">
              {footer.quickLinks.map((item) => (
                <a href={item.href} key={item.href} data-testid={`link-footer-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</a>
              ))}
            </div>
          </div>
          <div>
            <h3>Services</h3>
            <div className="footer-links">
              {footer.services.map((item) => (
                <a href="#services" key={item} data-testid={`link-footer-service-${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>
              ))}
            </div>
          </div>
          <div>
            <h3>Get in touch</h3>
            <div className="footer-links">
              <a href={emailHref} data-testid="link-footer-email">{company.email}</a>
              <a href={phoneHref} data-testid="link-footer-phone">{company.phone}</a>
              <span>{company.address}</span>
              <a href="#contact" data-testid="link-footer-contact">Send an enquiry <ArrowUpRight size={12} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{company.copyright}</span>
          <span>Safety &amp; engineering consultancy · Singapore</span>
        </div>
      </div>
    </footer>
  );
}
