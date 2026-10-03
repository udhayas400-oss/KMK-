import { useState } from 'react';
import { Plus } from 'lucide-react';
import { siteContent } from '../../content';
import { motion, useReducedMotion } from 'framer-motion';
import { RevealHeading } from './RevealHeading';
import { entryViewport, useReveal, useVisualReveal } from './PremiumSections';

export function FaqSection() {
  const reduced = useReducedMotion();
  const reveal = useReveal();
  const visualReveal = useVisualReveal();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section className="faq-section faq-premium" id="faqs">
      <div className="container faq-layout">
        <motion.div className="faq-heading" initial="hidden" whileInView="show" viewport={entryViewport}>
          <motion.div className="eyebrow" variants={reveal}>FAQs</motion.div>
          <RevealHeading html="Clarity starts<br />with a question." />
          <motion.p variants={reveal} custom={.24}>Explore BizSAFE levels, risk assessments, ISO systems and audit preparation. Start with the questions relevant to your workplace.</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={entryViewport} variants={visualReveal} className="faq-list" data-testid="accordion-faq">
          {siteContent.faqs.map((faq, index) => {
            const expanded = activeFaq === index;
            return (
              <div className="faq-item" key={faq.question}>
                <button
                  className="faq-question"
                  id={`faq-question-${index}`}
                  aria-expanded={expanded}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setActiveFaq((current) => current === index ? null : index)}
                  data-testid={`button-faq-${index}`}
                >
                  {faq.question}<Plus size={17} aria-hidden="true" />
                </button>
                <motion.div
                    className="faq-answer-motion"
                    initial={false}
                    animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
                    transition={{ duration: reduced ? 0 : .3, ease: 'easeOut' }}
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    data-testid={`text-faq-answer-${index}`}
                    aria-hidden={!expanded}
                    inert={!expanded}
                  >
                    <div className="faq-answer">{faq.answer}</div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}