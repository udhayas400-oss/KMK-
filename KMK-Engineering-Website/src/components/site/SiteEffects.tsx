import { useEffect } from 'react';

export function SiteEffects() {
  useEffect(() => {
    document.title = 'KMK Engineering & Consultancy Pte Ltd | Safety & Engineering Support';
    const description = 'Practical BizSAFE, WSH, risk assessment, safety documentation, ISO and engineering consultancy support for Singapore businesses.';

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]')
      || document.head.appendChild(Object.assign(document.createElement('meta'), { property: 'og:title' }));
    ogTitle.setAttribute('content', document.title);
    const ogDescription = document.querySelector('meta[property="og:description"]')
      || document.head.appendChild(Object.assign(document.createElement('meta'), { property: 'og:description' }));
    ogDescription.setAttribute('content', description);

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window)) return;
    const targets = new Set<HTMLElement>();
    const prepare = (element: HTMLElement, delay = 0, x = 0, y = 24) => {
      element.classList.add('motion-reveal');
      element.style.setProperty('--reveal-delay', delay + 's');
      element.style.setProperty('--reveal-x', x + 'px');
      element.style.setProperty('--reveal-y', y + 'px');
      targets.add(element);
    };
    document.querySelectorAll<HTMLElement>('main > section:not(.hero)').forEach(section => {
      section.classList.add('section-animated');
      targets.add(section);
    });
    document.querySelectorAll<HTMLElement>('.section-heading').forEach(heading => {
      Array.from(heading.children).forEach((child, index) => {
        if (!child.classList.contains('line-reveal-heading')) prepare(child as HTMLElement, index * .14, 0, 20);
      });
    });
    ['.services-grid', '.industries-grid', '.why-grid', '.projects-grid', '.metrics-grid', '.footer-grid', '.trust-strip .container'].forEach(selector => {
      document.querySelectorAll<HTMLElement>(selector).forEach(group => {
        Array.from(group.children).forEach((child, index) => prepare(child as HTMLElement, selector === '.footer-grid' || selector === '.trust-strip .container' ? index * .1 : .35 + index * .09, 0, selector === '.metrics-grid' ? 15 : 24));
      });
    });
    document.querySelectorAll<HTMLElement>('.about-image > img').forEach(image => {
      image.classList.add('section-image-reveal', 'wipe-from-left');
      prepare(image, 0, 0, 0);
    });
    document.querySelectorAll<HTMLElement>('.about-image + div').forEach(copy => {
      // Reveal text independently so headings lead the supporting content.
      const button = copy.querySelector<HTMLElement>('.button-primary');
      if (button) prepare(button, .4);

    });
    document.querySelectorAll<HTMLElement>('.feature-row').forEach(row => {
      const reverse = row.classList.contains('reverse');
      const image = row.querySelector<HTMLElement>('.feature-image');
      const copy = row.querySelector<HTMLElement>(':scope > div');
      if (image) {
        image.classList.add('section-image-reveal', reverse ? 'wipe-from-right' : 'wipe-from-left');
        prepare(image, 0, 0, 0);
      }
      const button = copy?.querySelector<HTMLElement>('.button-quiet');
      if (button) prepare(button, .4);
    });
    // Images enter independently from the rest of their section, alternating sides.
    const sectionImages = document.querySelectorAll<HTMLElement>('.industry-card img, .project-card img');
    sectionImages.forEach((image, index) => {
      image.classList.add('section-image-reveal', index % 2 === 0 ? 'wipe-from-left' : 'wipe-from-right');
      prepare(image, .08 + (index % 4) * .06, 0, 0);
    });
    document.querySelectorAll<HTMLElement>('.check-list').forEach(list => {
      Array.from(list.children).forEach((item, index) => prepare(item as HTMLElement, .12 + index * .08, 0, 16));
    });
    document.querySelectorAll<HTMLElement>('.compliance-list, .partner-window, .testimonial-card').forEach(element => prepare(element, .35));
    document.querySelectorAll<HTMLElement>('.faq-item').forEach((element, index) => prepare(element, .25 + index * .08, 0, 16));
    const risingCards = document.querySelectorAll<HTMLElement>('.service-card, .why-grid article, .project-card, .testimonial-card, .faq-item, .compliance-list');
    risingCards.forEach((card, index) => {
      card.classList.add('card-rise');
      prepare(card, .1 + (index % 6) * .09, 0, 52);
    });
    document.querySelectorAll<HTMLElement>('.compliance-section .safety-principle, .compliance-section .button-primary').forEach((element, index) => prepare(element, .3 + index * .12));
    const processes = Array.from(document.querySelectorAll<HTMLElement>('.workflow'));
    processes.forEach(process => {
      process.classList.add('motion-sequence');
      Array.from(process.children).forEach((step, index) => prepare(step as HTMLElement, .25 + index * .15, 0, 16));
      targets.add(process);
    });
    const show = (element: HTMLElement) => {
      element.classList.add('is-visible');
      if (element.classList.contains('motion-sequence')) Array.from(element.children).forEach(step => step.classList.add('is-visible'));
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        show(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    }, { threshold: .01, rootMargin: '0px 0px -6% 0px' });
    targets.forEach(element => {
      if (media.matches) show(element);
      else if (!element.parentElement?.classList.contains('motion-sequence')) observer.observe(element);
    });
    const reduce = () => { if (media.matches) { targets.forEach(show); observer.disconnect(); } };
    const focus = (event: FocusEvent) => {
      let element = event.target instanceof HTMLElement ? event.target : null;
      while (element) { if (targets.has(element)) show(element); element = element.parentElement; }
    };
    media.addEventListener('change', reduce);
    document.addEventListener('focusin', focus);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', reduce);
      document.removeEventListener('focusin', focus);
      document.querySelectorAll('.section-image-reveal').forEach(image => image.classList.remove('section-image-reveal', 'wipe-from-left', 'wipe-from-right'));
      document.querySelectorAll('.card-rise').forEach(card => card.classList.remove('card-rise'));
      targets.forEach(element => {
        element.classList.remove('motion-reveal', 'motion-sequence', 'section-animated', 'is-visible');
        ['--reveal-delay', '--reveal-x', '--reveal-y'].forEach(property => element.style.removeProperty(property));
      });
    };
  }, []);
  return null;
}
