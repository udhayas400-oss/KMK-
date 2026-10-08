import { SponsorPage } from './SponsorPage';
import { ArrowRight } from 'lucide-react';
import { siteContent as c } from '../../content';
import { AboutSection, BlogSection, FeaturedServices, WhySection } from './PremiumSections';
import { BusinessPlaceholders } from './BusinessPlaceholders';
import { IncorporationPage } from './IncorporationPage';
import { ContactSection } from './ContactSection';
import { FaqSection } from './FaqSection';
import './dedicated-pages.css';
import { getServiceImage } from '../../serviceImage';
import './service-image.css';
function Cta(){return <div className="page-cta container"><a className="button-primary" href="/contact">Discuss with KMK<ArrowRight size={18}/></a></div>;}
function Overview({title,items,image=false}:{title:string;image?:boolean;items:readonly {title:string;description:string;href:string}[]}){return <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">KMK Engineering</span><h1>{title}</h1></div>{image && <img className="shared-service-image overview-service-image" src={getServiceImage(window.location.pathname).src} alt={getServiceImage(window.location.pathname).alt} width="1024" height="1024"/>}<div className="services-grid">{items.map(item=><article className="service-card" key={item.href}><h2>{item.title}</h2><p>{item.description}</p><a href={item.href}>Learn More<ArrowRight size={18}/></a></article>)}</div></div></section>;}
function Preparation({title,intro,points,iso=false}:{title:string;intro:string;points:readonly string[];iso?:boolean}){return <section className="section preparation-page"><div className="container"><div className="split-layout"><img className="feature-image shared-service-image" src={getServiceImage(window.location.pathname).src} alt={getServiceImage(window.location.pathname).alt} width="1024" height="1024"/><div><span className="eyebrow">KMK Engineering</span><h1>{title}</h1><p>{intro}</p><h2>{iso?'Benefits and preparation requirements':'Preparation and support'}</h2><ul className="check-list">{points.map(point=><li key={point}>{point}</li>)}</ul></div></div>{iso&&<><h2>Certification preparation process</h2><ol><li>Define the scope and review existing arrangements.</li><li>Identify gaps and organise management-system documentation.</li><li>Implement controls and maintain evidence.</li><li>Prepare internal audits, management review and corrective actions.</li><li>Arrange assessment with an independent certification body.</li></ol><h2>KMK support</h2><p>Discuss your current system and chosen standard with KMK to agree documentation, implementation guidance and readiness-review support.</p><details><summary>Does consultancy itself award certification?</summary><p>No. An independent certification body assesses the management system. Preparation support and certification assessment are separate activities.</p></details></>}</div></section>;}
export function DedicatedPages({route}:{route:string}){
 let content;
 if(route==='/about')content=<><AboutSection dedicated/><WhySection/></>;
 else if(route==='/contact')return <ContactSection dedicated/>;
 else if(route==='/blog')content=<BlogSection/>;
 else if(route==='/faq')content=<FaqSection/>;
 else if(route==='/incorporation')content=<IncorporationPage/>;
 else if(route==='/bca')content=<section className="section dark-section other-services bca-page-section"><div className="container"><h1>BCA Registration Support</h1><BusinessPlaceholders only="bca"/></div></section>;
 else if(route==='/bizsafe')content=<><FeaturedServices only="bizsafe"/><Overview title="Choose your BizSAFE level" items={[1,2,3,4].map(level=>({title:`BizSAFE Level ${level}`,description:'Explore preparation support for your chosen BizSAFE level.',href:`/bizsafe-level-${level}`})).concat([{title:'BizSAFE STAR',description:'Explore safety management-system preparation.',href:'/bizsafe-star'}])}/></>;
 else if(['/bizsafe-level-3','/bizsafe-level-4','/bizsafe-star'].includes(route))content=<FeaturedServices only={route.replace('/bizsafe-','')}/>;
 else if(['/bizsafe-level-1','/bizsafe-level-2'].includes(route))content=<Preparation title={`BizSAFE Level ${route.endsWith('1')?'1':'2'} Preparation`} intro="Discuss the starting point for your workplace safety journey and the training and preparation relevant to your intended level." points={['Review your current workplace safety arrangements and intended level.','Identify relevant training needs with your management and workplace team.','Organise existing safety policies and risk-management documents.','Agree the preparation scope and next steps with KMK.']}/>;
 else if(route==='/iso')content=<Overview image title="ISO Management-System Consultancy" items={c.isoStandards.map(item=>({...item,href:`/${item.id}`}))}/>;
 else if(c.isoStandards.some(item=>`/${item.id}`===route)){const item=c.isoStandards.find(item=>`/${item.id}`===route)!;content=<Preparation title={`${item.title} Consultancy`} intro={item.description} iso points={[`Build a structured approach to the ${item.title} management system.`,item.description,'Clarify scope, responsibilities, objectives and operational controls.','Maintain monitoring, internal audit and management review records.']}/>;}
 else if(route==='/sponsor')return <SponsorPage/>;
 else{const item=c.services.find(item=>item.href===route);content=item?<Preparation title={item.title} intro={item.description} points={['Review your current arrangements.','Organise documentation and practical next steps.','Agree responsibilities and the support scope with KMK.']}/>:<section className="section"><div className="container"><h1>Page not found</h1><a href="/">Return Home</a></div></section>;}
 return <>{content}<Cta/></>;
}
