// Replace marked placeholders only with approved KMK company information.
export const siteContent = {
  company: {
    legalName: 'KMK Engineering & Consultancy Pte Ltd', shortName: 'KMK Engineering',
    tagline: 'Engineering clarity. Safer workplaces.', phone: '[Phone Number]',
    email: '[Email Address]', address: '[Office Address]',
    copyright: `© ${new Date().getFullYear()} KMK Engineering. All Rights Reserved.`,
  },
  labels: { servicesCta: 'Explore Our Services', learnMore: 'Learn More', consultationCta: 'Get My Free Consultation' },
  navigation: [
    { label: 'Home', href: '/' }, { label: 'About', href: '/about' },
    { label: 'BizSAFE', href: '/bizsafe', children: [
      { label: 'BizSAFE Level 1', href: '/bizsafe-level-1' },
      { label: 'BizSAFE Level 2', href: '/bizsafe-level-2' },
      { label: 'BizSAFE Level 3', href: '/bizsafe-level-3' },
      { label: 'BizSAFE Level 4', href: '/bizsafe-level-4' },
      { label: 'BizSAFE STAR', href: '/bizsafe-star' },
    ] },
    { label: 'ISO', href: '/iso', children: [
      { label: 'ISO 9001', href: '/iso-9001' }, { label: 'ISO 14001', href: '/iso-14001' }, { label: 'ISO 45001', href: '/iso-45001' }, { label: 'ISO 22000', href: '/iso-22000' }, { label: 'ISO 27001', href: '/iso-27001' },
    ] },
    { label: 'Incorporation', href: '/incorporation' }, { label: 'BCA', href: '/bca' },
    { label: 'Sponsor', href: '/sponsor' }, { label: 'Blog', href: '/blog' }, { label: 'Contact', href: '/contact' },
  ],
  heroSlides: [
    { eyebrow: 'Engineering, Safety & BizSAFE Consultancy', title: 'Engineering Expertise.<br />Safer Workplaces.', description: 'Practical engineering, workplace safety and BizSAFE guidance for Singapore businesses. Build stronger systems with support shaped around your operations.', image: '/kmk-safety-hero.jpg', imageAlt: 'Safety professional reviewing an industrial workplace', button: 'Get Free Consultation' },
    { eyebrow: 'BizSAFE Level 3 & Level 4 Support', title: 'Your Next Step in<br />Workplace Safety.', description: 'Prepare risk assessments, a Risk Management Plan and workplace safety systems with clear documentation and implementation guidance.', image: '/service-photos/bizsafe-level-3-service.jpg', imageAlt: 'Safety officer checking machine guarding with a worker', button: 'Talk to KMK' },
    { eyebrow: 'BizSAFE STAR & ISO Consultancy', title: 'Stronger Systems.<br />Confident Preparation.', description: 'Connect safety management, ISO documentation and audit preparation with the way your business actually works.', image: '/kmk-engineering.jpg', imageAlt: 'Engineer inspecting industrial equipment', button: 'Discuss Your Requirements' },
  ],
  proofPoints: [
    { value: '—', label: 'Years of Experience' }, { value: '—', label: 'Clients Supported' },
    { value: '—', label: 'Project Outcomes' }, { value: '—', label: 'Consultancy Team' },
  ],
  metricsNote: 'KMK company figures are awaiting verification. No performance statistics are claimed.',
  about: {
    eyebrow: 'About KMK Engineering', title: 'Professional Engineering, Safety & Business Consultancy',
    description: 'KMK Engineering & Consultancy Pte Ltd supports Singapore businesses with engineering, workplace safety and compliance preparation. We help translate requirements into practical steps, from risk assessment and safety documentation to BizSAFE and ISO management systems.',
    secondParagraph: 'Our approach starts with your operations. We review existing arrangements, identify documentation gaps and guide preparation for independent assessment, with responsibilities and scope agreed from the outset.',
    points: ['Workplace-specific risk assessment and safety documentation', 'BizSAFE preparation and ISO management-system support'],
    image: '/kmk-consultation.jpg', imageAlt: 'Worksite professionals reviewing a plan', captionTitle: 'Practical advice. Clear next steps.', captionText: 'Support built around your workplace.',
  },
  featuredServices: [
    { id: 'bizsafe', label: 'KMK Engineering', title: 'BizSAFE Consulting Services', description: 'Build a practical approach to workplace safety with guidance matched to your business. KMK reviews your current arrangements, helps identify gaps and supports documentation and implementation as you prepare for your intended BizSAFE level.', image: '/kmk-safety-hero.jpg', alt: 'Safety professional carrying out a workplace review', points: ['Review current safety arrangements and target requirements', 'Prepare workplace-specific documentation and risk controls', 'Organise evidence and follow up readiness gaps'], cta: 'Explore BizSAFE Consulting' },
    { id: 'level-3', label: 'Risk Management', title: 'BizSAFE Level 3 Support', description: 'Turn workplace knowledge into a usable Risk Management Plan. We work with your team to review activities, identify hazards, assess risk and organise controls and records before independent risk management assessment.', image: '/industry-construction.jpg', alt: 'Construction workplace requiring risk management planning', points: ['Hazard identification and risk assessment guidance', 'Risk Management Plan and implementation records', 'Readiness review before independent assessment'], cta: 'Discuss Level 3 Preparation' },
    { id: 'level-4', label: 'Workplace Safety Systems', title: 'BizSAFE Level 4 Consultancy', description: 'Bring policies, responsibilities and workplace controls together in a structured safety management approach. KMK helps your team plan a Workplace Safety and Health Management System and prepare clear, usable documentation.', image: '/industry-manufacturing.jpg', alt: 'Manufacturing operations supported by safety management systems', points: ['WSH management-system planning and documentation', 'Clear procedures and workplace responsibilities', 'Implementation guidance and readiness checks'], cta: 'Get Started with Level 4' },
    { id: 'star', label: 'Safety Management', title: 'BizSAFE STAR Preparation', description: 'Develop a more mature safety management system with a focus on implementation and continual improvement. KMK can review system gaps, management review records and supporting evidence as your business prepares for independent assessment.', image: '/kmk-engineering.jpg', alt: 'Engineer reviewing equipment and safety systems', points: ['Review safety management and ISO 45001 alignment', 'Prepare internal review and management review records', 'Plan audit readiness and continuing improvement'], cta: 'Plan Your STAR Journey' },
  ],
  services: [
    { id: 'iso', title: 'ISO Consultancy', description: 'Practical support for quality, environmental and occupational health and safety management systems.', href: '/iso', icon: 'layers' },
    { id: 'engineering', title: 'Engineering Consultancy', description: 'Review site, equipment and process requirements alongside practical technical and safety considerations.', href: '/engineering', icon: 'compass' },
    { id: 'risk', title: 'Risk Assessment', description: 'Understand workplace hazards, evaluate risks and document controls with your operations team.', href: '/risk-assessment', icon: 'clipboard' },
    { id: 'documentation', title: 'Safety Documentation', description: 'Prepare Safe Work Procedures, safety policies, inspection records and emergency arrangements.', href: '/safety-documentation', icon: 'file' },
    { id: 'compliance', title: 'Audit Readiness', description: 'Review implementation evidence, organise supporting records and plan corrective actions.', href: '/audit-readiness', icon: 'check' },
    { id: 'bizsafe', title: 'WSH Consultancy', description: 'Connect risk controls and management responsibilities with the work carried out at your site.', href: '/wsh-consultancy', icon: 'shield' },
  ],
  isoStandards: [
    { id: 'iso-22000', title: 'ISO 22000', description: 'Food safety management: identify food safety hazards, organise operational controls and prepare implementation records.' },
    { id: 'iso-27001', title: 'ISO 27001', description: 'Information security management: review information risks, select controls and document responsibilities and monitoring.' },
    { id: 'iso-9001', title: 'ISO 9001', description: 'Quality management: consistent processes, customer requirements, internal audit and management review preparation.' },
    { id: 'iso-14001', title: 'ISO 14001', description: 'Environmental management: review environmental aspects, operational controls, monitoring and supporting records.' },
    { id: 'iso-45001', title: 'ISO 45001', description: 'Occupational health and safety: hazards, worker participation, responsibilities and implementation evidence.' },
  ],
  why: { eyebrow: 'Why Choose Us', title: 'Why Choose KMK Engineering?', description: 'A clear process, practical guidance and support that reflects your workplace.', benefits: [
    { title: 'Practical Guidance', body: 'Translate engineering and safety requirements into actions your workplace team can use.' },
    { title: 'Clear Scope', body: 'Agree responsibilities, requirements and the work involved before moving forward.' },
    { title: 'Structured Process', body: 'Track documentation and implementation gaps so you understand the next step.' },
    { title: 'End-to-End Preparation', body: 'Connect workplace review, documentation and readiness for independent assessment.' },
  ] },
  compliance: { label: 'Certification & Compliance Support', title: 'Prepare with confidence. Build lasting improvements.', description: 'From your first risk assessment to audit readiness, KMK can help organise the documents and evidence that reflect your workplace. Your team implements the controls; independent auditors and certification bodies assess the system.', points: ['Documentation shaped around your operations', 'Implementation gaps and corrective actions reviewed', 'Preparation for internal review and independent assessment'], cta: 'Start Your Preparation' },
  blog: [
    { id: 'guide-level-3', title: 'Preparing for BizSAFE Level 3', category: 'Risk Management', image: '/industry-construction.jpg', intro: 'Start with your work activities, hazards and existing controls.', body: 'Bring your workplace team together to review routine and non-routine activities. Record hazards, evaluate risks and agree controls, responsibilities and review actions. Maintain implementation evidence alongside your Risk Management Plan. KMK can review your existing materials and discuss readiness gaps before independent assessment.' },
    { id: 'guide-level-4', title: 'Building a BizSAFE Level 4 Plan', category: 'Safety Systems', image: '/industry-manufacturing.jpg', intro: 'Connect policies, responsibilities and practical workplace controls.', body: 'A safety management approach brings responsibilities, procedures and monitoring together. Review the arrangements already in place and identify what needs to be documented or developed. Your plan should reflect actual work, clarify ownership and support consistent implementation. Discuss your current status and target requirements with KMK.' },
    { id: 'guide-star', title: 'Your Next Step Towards BizSAFE STAR', category: 'Continuous Improvement', image: '/kmk-engineering.jpg', intro: 'Review system maturity and organise your implementation evidence.', body: 'Begin with a review of your safety management system and the evidence supporting it. Consider internal reviews, management review records, corrective actions and alignment with relevant safety management standards. Preparation should also account for ongoing monitoring and improvement. KMK can help identify system gaps and plan the next steps.' },
  ],
  // Illustrative copy only. Replace all sample information with approved real KMK reviews.
  testimonial: { label: 'What Our Clients Say', heading: 'Reviewed by Our Clients on Google', slides: [
    { initials: 'K1', name: 'KMK Client 01', company: 'Client Company · Sample', placeholder: 'KMK Engineering provided professional support and guided our team clearly throughout the certification preparation process.' },
    { initials: 'K2', name: 'KMK Client 02', company: 'Client Company · Sample', placeholder: 'The team helped us organise our safety documentation and understand the next steps. Their clear guidance made preparation easier to manage.' },
    { initials: 'K3', name: 'KMK Client 03', company: 'Client Company · Sample', placeholder: 'We appreciated the practical approach to reviewing our workplace requirements and planning improvements with our operations team.' },
    { initials: 'K4', name: 'KMK Client 04', company: 'Client Company · Sample', placeholder: 'Our questions were explained clearly, and the preparation plan helped our team keep track of responsibilities and supporting records.' },
    { initials: 'K5', name: 'KMK Client 05', company: 'Client Company · Sample', placeholder: 'The structured documentation review helped us identify gaps and prioritise the work needed before independent assessment.' },
  ], note: 'All names, companies, review text and ratings above are placeholders awaiting approved KMK client feedback.' },
  partnersMarquee: { heading: 'Our Clients & Business Partners', note: 'Approved KMK client and partner logos can be added here. No affiliations are claimed.', items: ['Client logo placeholder', 'Partner logo placeholder', 'Client logo placeholder', 'Partner logo placeholder'] },
  faqs: [
    { question: 'What is BizSAFE Level 3?', answer: 'Level 3 focuses on implementing workplace risk management. Preparation includes identifying hazards, assessing risks, documenting controls in a Risk Management Plan and maintaining evidence of implementation before independent assessment.' },
    { question: 'How long does BizSAFE preparation take?', answer: 'Timing depends on your current status, target level, operations, training needs and existing records. Implementation and independent assessment schedules also matter. Share your target date with KMK so a suitable preparation plan can be discussed.' },
    { question: 'What documents should I prepare?', answer: 'Start with existing risk assessments, your Risk Management Plan, Safe Work Procedures, safety policies, training records and inspection records. The documents needed depend on your intended level and agreed scope.' },
    { question: 'What is BizSAFE STAR?', answer: 'STAR is the highest level in the BizSAFE programme. Preparation involves a mature workplace safety management approach, implementation evidence and relevant recognised safety management standards. KMK can discuss system gaps and readiness.' },
    { question: 'How do BizSAFE and ISO 45001 relate?', answer: 'BizSAFE is a Singapore workplace safety capability programme. ISO 45001 is an international occupational health and safety management-system standard. Your existing system can inform preparation, with the applicable recognition requirements reviewed for your target level.' },
    { question: 'How can KMK help with certification preparation?', answer: 'KMK can review workplace arrangements, help develop documentation, discuss implementation gaps and organise evidence for assessment. Consultancy support does not itself award certification; independent auditors or certification bodies carry out assessment.' },
  ],
  contact: { eyebrow: 'Free Consultation', heading: 'Get a Free Consultation', description: 'Tell us about your engineering, safety, BizSAFE or ISO requirements. Share your current position and goals so we can discuss the next steps.', formNotice: 'This form opens an email draft when a KMK email address is configured. Nothing is sent automatically.' },
  footer: { about: 'Engineering, workplace safety and compliance preparation for Singapore businesses. Practical BizSAFE, risk management and ISO guidance, built around your operations.', quickLinks: [ { label: 'Home', href: '/' }, { label: 'About KMK', href: '/about' }, { label: 'Our Services', href: '/bizsafe' }, { label: 'Our Blog', href: '/blog' }, { label: 'FAQ', href: '/faq' }, { label: 'Contact Us', href: '/contact' } ] },
};
