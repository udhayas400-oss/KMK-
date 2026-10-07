import { useLayoutEffect, useRef } from 'react';

/** Mount-driven introduction and one-time reveals scoped to the rendered BCA block. */
export function useBcaAnimations() {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const section = root.current?.querySelector('#bca');
    if (!section) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const elements: HTMLElement[] = [];
    const prepare = (selector: string, motion: string, stagger = 0) =>
      Array.from(section.querySelectorAll<HTMLElement>(selector)).map((element, index) => {
        element.dataset.bcaMotion = motion;
        element.style.setProperty('--bca-delay', `${index * stagger}ms`);
        elements.push(element);
        return element;
      });
    const introduction = [
      ...prepare('.bca-image', 'left'),
      ...prepare('.bca-content', 'right'),
    ];
    introduction[1]?.style.setProperty('--bca-delay', '120ms');
    const later = [
      ...prepare('#bca-mandatory-title', 'up'),
      ...prepare('#bca-mandatory-title + p', 'up'),
      ...prepare('.bca-benefit-grid > article', 'up', 120),
      ...prepare('.bca-grading-grid > article:first-child', 'left'),
      ...prepare('.bca-grading-grid > article:last-child', 'right'),
      ...prepare('.bca-requirement-list > article', 'up', 120),
    ];
    section.querySelector<HTMLElement>('#bca-mandatory-title + p')?.style.setProperty('--bca-delay', '120ms');
    const show = (element: HTMLElement) => element.classList.add('bca-entered');
    const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        show(entry.target as HTMLElement);
        observer?.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -60px 0px' }) : null;
    later.forEach(element => reduced.matches || !observer ? show(element) : observer.observe(element));
    // Two frames ensure the initial position is painted before the mount entrance.
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => introduction.forEach(show));
    });
    const reduce = () => { if (reduced.matches) { elements.forEach(show); observer?.disconnect(); } };
    const focus = (event: FocusEvent) => elements.forEach(element => {
      if (element.contains(event.target as Node)) show(element);
    });
    reduced.addEventListener('change', reduce);
    section.addEventListener('focusin', focus);
    return () => {
      cancelAnimationFrame(firstFrame); cancelAnimationFrame(secondFrame);
      observer?.disconnect();
      reduced.removeEventListener('change', reduce);
      section.removeEventListener('focusin', focus);
      elements.forEach(element => {
        delete element.dataset.bcaMotion;
        element.classList.remove('bca-entered');
        element.style.removeProperty('--bca-delay');
      });
    };
  }, []);
  return root;
}
