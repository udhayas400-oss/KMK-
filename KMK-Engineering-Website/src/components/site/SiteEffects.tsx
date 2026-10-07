import { useScrollReveal, type RevealProfile } from '../../hooks/useScrollReveal';
const profiles: readonly RevealProfile[] = [
  { selector: '.preparation-page .feature-image', motion: 'left' },
  { selector: '.preparation-page .split-layout > div', motion: 'right' },
  { selector: '#bca .bca-benefit-grid > article,#bca .bca-grading-grid > article,#bca .bca-requirement-list > article', motion: 'up', stagger: .1 },
  { selector: '.about-image > img', motion: 'mask-left', trigger: '.about-image' },
  { selector: '#about .split-layout > div:last-child', motion: 'right' },
  { selector: '.feature-row:not(.reverse) > .feature-image,.feature-row.reverse > div', motion: 'left' },
  { selector: '.feature-row:not(.reverse) > div,.feature-row.reverse > .feature-image', motion: 'right' },
  { selector: '.stats-box,.metrics-section .split-layout > div:first-child', motion: 'up' },
  { selector: '.achievement-image,.certification-image', motion: 'left' },
  { selector: '#certification .split-layout > div:last-child', motion: 'right' },
  // The BCA introduction is visible on mount; observing the entire long page
  // can leave its first image and copy hidden until the user scrolls.
  { selector: '#incorporation .incorporation-content', motion: 'left', trigger: '#incorporation' },
  { selector: '#incorporation .incorporation-image', motion: 'right', trigger: '#incorporation' },
  { selector: '.service-card,.iso-grid article', motion: 'up', stagger: .12 },
  { selector: '.why-grid article', motion: 'up', stagger: .12 },
  { selector: '.blog-card', motion: 'up', stagger: .12 },
  { selector: '.contact-form,.footer-grid > div', motion: 'up', stagger: .1 },
  { selector: '.section > .container > .section-heading,.faq-heading,.contact-copy', motion: 'up' },
];
export function SiteEffects() { useScrollReveal(profiles); return null; }
