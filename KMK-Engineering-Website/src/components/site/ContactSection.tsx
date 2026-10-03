import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { siteContent } from '../../content';
import { motion } from 'framer-motion';
import { RevealHeading } from './RevealHeading';
import { entryViewport, useReveal, useVisualReveal } from './PremiumSections';

export function ContactSection() {
  const reveal = useReveal();
  const visualReveal = useVisualReveal();
  const [formMessage, setFormMessage] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');
    setFormMessage('');
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const topic = String(data.get('service') || '').trim();
    const company = String(data.get('company') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !company || !email || !phone || !topic || !message) {
      setFormError('Please complete each field before continuing.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Enter a valid email address so we can include it in your draft.');
      return;
    }

    const recipient = siteContent.company.email;
    if (recipient.includes('[') || !recipient.includes('@')) {
      setFormMessage('The enquiry email is still a placeholder. Please ask the site owner to update [Email Address] before using this form. Nothing has been sent.');
      return;
    }

    const subject = encodeURIComponent(`Enquiry for ${siteContent.company.shortName}: ${topic}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nService Required: ${topic}\n\n${message}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setFormMessage('Your email app should open with a draft. Please review it and send it from there.');
  };

  return (
      <section className="contact-section contact-premium" id="contact">
      <div className="container contact-layout">
        <motion.div className="contact-copy" initial="hidden" whileInView="show" viewport={entryViewport}>
          <motion.div className="eyebrow" variants={reveal}>{siteContent.contact.eyebrow}</motion.div>
          <RevealHeading text={siteContent.contact.heading} />
          <motion.p variants={reveal} custom={.24}>{siteContent.contact.description}</motion.p>
          <motion.div className="contact-details" variants={reveal} custom={.34}>
            <div><Mail size={15} /><span>{siteContent.contact.emailLabel}</span></div>
            <div><Phone size={15} /><span>{siteContent.contact.phoneLabel}</span></div>
            <div><MapPin size={15} /><span>{siteContent.contact.addressLabel}</span></div>
          </motion.div>
        </motion.div>
        <motion.form initial="hidden" whileInView="show" viewport={entryViewport} variants={visualReveal} className="contact-form" onSubmit={handleSubmit} noValidate data-testid="form-contact">
          <div className="form-grid">
            <div className="field">
              <label htmlFor="contact-name">Name <i>REQUIRED</i></label>
              <input id="contact-name" name="name" autoComplete="name" required placeholder="Name" data-testid="input-contact-name" />
            </div>
            <div className="field">
              <label htmlFor="contact-company">Company <i>REQUIRED</i></label>
              <input id="contact-company" name="company" autoComplete="organization" required placeholder="Company name" data-testid="input-contact-company" />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Email <i>REQUIRED</i></label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="name@company.com" data-testid="input-contact-email" />
            </div>
            <div className="field">
              <label htmlFor="contact-phone">Phone <i>REQUIRED</i></label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" required placeholder="+65 ..." data-testid="input-contact-phone" />
            </div>
            <div className="field full">
              <label htmlFor="contact-topic">Service Required <i>REQUIRED</i></label>
              <select id="contact-topic" name="service" required defaultValue="" data-testid="select-contact-topic">
                <option value="" disabled>Select a service</option>
                {siteContent.services.map((service) => <option key={service.id} value={service.title}>{service.title}</option>)}
              </select>
            </div>
            <div className="field full">
              <label htmlFor="contact-message">Message <i>REQUIRED</i></label>
              <textarea id="contact-message" name="message" required placeholder="Tell us your workplace, target level or standard, and requirements." data-testid="input-contact-message" />
            </div>
          </div>
          <div className="form-bottom">
            <span className="privacy-note">{siteContent.contact.formNotice}</span>
            <button className="button-primary" type="submit" data-testid="button-contact-submit">{siteContent.labels.consultationCta} <ArrowUpRight size={15} /></button>
          </div>
          <div className={`form-message ${formError ? 'error' : ''}`} role="status" aria-live="polite" data-testid="status-contact-form">
            {formError || formMessage}
          </div>
        </motion.form>
      </div>
    </section>
  );
}