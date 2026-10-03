import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { siteContent } from '../../content';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const company = siteContent.company;
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setMobileOpen(false); };
    const media = window.matchMedia('(min-width: 1051px)');
    const close = () => { if (media.matches) setMobileOpen(false); };
    document.addEventListener('keydown', onKey);
    media.addEventListener('change', close);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection('#' + entry.target.id); });
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    siteContent.navigation.forEach(item => { const section = document.querySelector(item.href); if (section) observer.observe(section); });
    return () => { document.removeEventListener('keydown', onKey); media.removeEventListener('change', close); observer.disconnect(); };
  }, []);

  return (
      <header className={`navbar navbar-premium ${scrolled ? 'is-scrolled' : ''}`} style={{ zIndex: 50 }}>
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label={`${company.shortName} home`} data-testid="link-brand-home">
            <span className="brand-mark" aria-hidden="true">{company.monogram}<i /></span>
            <span className="brand-name">{company.shortName}<span className="brand-sub">SAFETY / ENGINEERING</span></span>
          </a>
          <nav id="site-navigation" className={`nav-links ${mobileOpen ? 'open' : ''}`} aria-label="Main navigation">
            {siteContent.navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                style={{ '--nav-index': index } as import('react').CSSProperties}
                aria-current={activeSection === item.href ? 'location' : undefined}
                onClick={() => setMobileOpen(false)}
                data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => setMobileOpen(false)} data-testid="link-nav-consultation">
              Get Consultation <ArrowUpRight size={14} />
            </a>
          </nav>
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
            aria-controls="site-navigation"
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
  );
}
