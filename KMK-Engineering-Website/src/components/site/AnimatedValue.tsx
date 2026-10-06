import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { motionTiming } from '../../lib/animation';

export function AnimatedValue({ value }: { value: string }) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const numberMatch = value.includes('[') ? null : value.match(/\d[\d,]*(?:\.\d+)?/);
  const target = numberMatch ? Number(numberMatch[0].replace(/,/g, '')) : null;
  const [count, setCount] = useState(0);
  const completed = useRef<string | null>(null);

  useEffect(() => {
    const element = valueRef.current;
    const finalValue = target;
    if (finalValue === null || !element) return;
    if (completed.current === value) { setCount(finalValue); return; }

    if (
      reduced ||
      typeof window.IntersectionObserver !== 'function'
    ) {
      setCount(finalValue);
      completed.current = value;
      return;
    }

    let frame = 0;
    let startedAt = 0;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();

      const animate = (timestamp: number) => {
        if (!startedAt) startedAt = timestamp;
        const progress = Math.min((timestamp - startedAt) / motionTiming.counter.durationMs, 1);
        const decimals = numberMatch?.[0].split('.')[1]?.length ?? 0;
        const multiplier = 10 ** decimals;
        setCount(Math.round(finalValue * (1 - Math.pow(1 - progress, 3)) * multiplier) / multiplier);
        if (progress < 1) frame = window.requestAnimationFrame(animate);
        else completed.current = value;
      };

      frame = window.requestAnimationFrame(animate);
    }, { threshold: 0.01 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [target, reduced, value]);

  if (!numberMatch || target === null) {
    return <span ref={valueRef}>{value}</span>;
  }

  const matchIndex = numberMatch.index ?? 0;
  const prefix = value.slice(0, matchIndex);
  const suffix = value.slice(matchIndex + numberMatch[0].length);

  return (
    <span ref={valueRef} aria-label={value}>
      {prefix}{new Intl.NumberFormat('en-SG', { maximumFractionDigits: numberMatch[0].split('.')[1]?.length ?? 0 }).format(reduced ? target : count)}{suffix}
    </span>
  );
}
