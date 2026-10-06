import { useEffect, useRef, type HTMLAttributes, type ReactNode } from 'react';

type Props = HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2';
  text?: string;
  html?: string;
  autoPlay?: boolean;
  delay?: number;
};

// Preserve emphasis and explicit breaks while revealing every visible letter.
function letters(text: string, html?: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let emphasis = false;
  for (const part of (html ?? text).split(/(<\/?em>|<br\s*\/?\s*>)/i)) {
    if (/^<em>$/i.test(part)) { emphasis = true; continue; }
    if (/^<\/em>$/i.test(part)) { emphasis = false; continue; }
    if (/^<br/i.test(part)) { nodes.push(<br key={nodes.length} />); continue; }
    for (const word of part.split(/(\s+)/)) {
      if (!word) continue;
      if (/^\s+$/.test(word)) { nodes.push(word); continue; }
      const characters = Array.from(word).map((character, index) => (
        <span className="heading-letter" aria-hidden="true" key={index}>{character}</span>
      ));
      nodes.push(
        <span className="heading-word" aria-label={word} key={nodes.length}>
          {emphasis ? <em>{characters}</em> : characters}
        </span>
      );
    }
  }
  return nodes;
}

export function RevealHeading({ as: Tag = 'h2', text = '', html, autoPlay = false, delay = .1, className = '', ...props }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const heading = ref.current;
    if (!heading) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let active = true;
    const measure = () => {
      if (!active) return;
      let lastTop = -Infinity;
      let line = -1;
      let characterIndex = 0;
      heading.querySelectorAll<HTMLElement>('.heading-word').forEach(word => {
        const top = word.offsetTop;
        if (Math.abs(top - lastTop) > 2) { line += 1; lastTop = top; }
        word.querySelectorAll<HTMLElement>('.heading-letter').forEach(letter => {
          letter.style.setProperty('--letter-delay', `${delay + line * .08 + characterIndex * .022}s`);
          characterIndex += 1;
        });
      });
    };
    measure();
    const show = () => heading.classList.add('heading-visible');
    const observer = !autoPlay && !media.matches && 'IntersectionObserver' in window
      ? new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) { show(); observer?.disconnect(); }
      }, { threshold: .2 }) : null;
    const resize = 'ResizeObserver' in window ? new ResizeObserver(measure) : null;
    resize?.observe(heading);
    void document.fonts?.ready.then(measure);
    const frame = window.requestAnimationFrame(() => {
      if (autoPlay || media.matches || !observer) show();
      else observer.observe(heading);
    });
    const reduce = () => { if (media.matches) { show(); observer?.disconnect(); } };
    media.addEventListener('change', reduce);
    return () => {
      active = false;
      observer?.disconnect();
      resize?.disconnect();
      window.cancelAnimationFrame(frame);
      media.removeEventListener('change', reduce);
    };
  }, [text, html, autoPlay, delay]);
  return <Tag {...props} ref={ref} className={`line-reveal-heading ${className}`}>{letters(text, html)}</Tag>;
}
