import { useState } from 'react';
import { Plus } from 'lucide-react';
import { siteContent } from '../../content';
import { motion, useReducedMotion } from 'framer-motion';
import { RevealHeading } from './RevealHeading';
import { motionTiming } from '../../lib/animation';

export function FaqSection() {
  const reduced = useReducedMotion();


  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section className="faq-section faq-premium" id="faqs">
      <div className="container faq-layout">
        <div className="faq-heading">
          <div className="eyebrow">FAQs</div>
          <RevealHeading text="Frequently Asked Questions" />
          <p>Explore BizSAFE levels, risk assessments, ISO systems and audit preparation. Start with the questions relevant to your workplace.</p>
        </div>
        <div className="faq-list" data-testid="accordion-faq">
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
                    transition={{ duration: reduced ? 0 : motionTiming.faq.duration, ease: motionTiming.ease }}
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
        </div>
      </div>
    </section>
  );
}
