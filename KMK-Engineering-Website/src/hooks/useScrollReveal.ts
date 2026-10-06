import { useLayoutEffect } from 'react';
export type RevealProfile = { selector: string; motion: 'left' | 'right' | 'up' | 'mask-left'; stagger?: number; trigger?: string };
/** Observe stable layout boxes, never a fully clipped animation surface. */
export function useScrollReveal(profiles: readonly RevealProfile[]) {
  useLayoutEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    if (typeof window.IntersectionObserver !== 'function') return;
    const targets = new Map<Element, HTMLElement[]>();
    const timers = new Set<number>();
    const entered = new Set<HTMLElement>();
    const show = (element: HTMLElement) => {
      if (entered.has(element)) return;
      entered.add(element);
      element.classList.add('motion-entered');
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const elements = targets.get(entry.target) || [];
        elements.forEach(show);
        // Stop observing after the entrance, including its stagger, has completed.
        const timer = window.setTimeout(() => { observer.unobserve(entry.target); timers.delete(timer); }, 2300);
        timers.add(timer);
      });
    }, { threshold: .08, rootMargin: '0px 0px -40px 0px' });
    profiles.forEach(profile => {
      document.querySelectorAll<HTMLElement>(profile.selector).forEach((element, index) => {
        if (element.dataset.motion) return;
        const trigger = profile.trigger ? element.closest(profile.trigger) || element : element;
        const group = targets.get(trigger) || [];
        group.push(element); targets.set(trigger, group);
        element.dataset.motion = profile.motion;
        element.style.setProperty('--reveal-delay', `${Math.min(index * (profile.stagger || 0), .48)}s`);
        if (media.matches) show(element);
      });
    });
    targets.forEach((_, trigger) => { if (!media.matches) observer.observe(trigger); });
    const reduce = () => { if (media.matches) { targets.forEach(elements => elements.forEach(show)); observer.disconnect(); } };
    const focus = (event: FocusEvent) => { targets.forEach(elements => elements.forEach(e => { if (e.contains(event.target as Node)) show(e); })); };
    media.addEventListener('change', reduce); document.addEventListener('focusin', focus);
    return () => {
      observer.disconnect(); timers.forEach(clearTimeout);
      media.removeEventListener('change', reduce); document.removeEventListener('focusin', focus);
      targets.forEach(elements => elements.forEach(e => { delete e.dataset.motion; e.classList.remove('motion-entered'); e.style.removeProperty('--reveal-delay'); }));
    };
  }, [profiles]);
}
