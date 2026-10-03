import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export function AnimatedValue({ value }: { value: string }) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const numberMatch = value.includes('[') ? null : value.match(/^\d[\d,]*/);
  const target = numberMatch ? Number(numberMatch[0].replace(/,/g, '')) : null;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = valueRef.current;
    const finalValue = target;
    if (finalValue === null || !element) return;

    if (
      reduced ||
      !('IntersectionObserver' in window)
    ) {
      setCount(finalValue);
      return;
    }

    let frame = 0;
    let startedAt = 0;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();

      const animate = (timestamp: number) => {
        if (!startedAt) startedAt = timestamp;
        const progress = Math.min((timestamp - startedAt) / 1500, 1);
        setCount(Math.round(finalValue * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = window.requestAnimationFrame(animate);
      };

      frame = window.requestAnimationFrame(animate);
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [target, reduced]);

  if (!numberMatch || target === null) {
    return <span ref={valueRef}>{value}</span>;
  }

  const matchIndex = numberMatch.index ?? 0;
  const prefix = value.slice(0, matchIndex);
  const suffix = value.slice(matchIndex + numberMatch[0].length);

  return (
    <span ref={valueRef} aria-label={value}>
      {prefix}{new Intl.NumberFormat('en-SG').format(reduced ? target : count)}{suffix}
    </span>
  );
}