import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Mail, Phone, ShieldCheck, X } from 'lucide-react';
import { siteContent } from '../../content';
import logoUrl from '../../../logi.jpeg';
import { ButtonLabel } from './ButtonLabel';

function Brand(){return <><span className="brand-logo"><img src={logoUrl} alt="KMK Engineering logo" width="58" height="58"/></span><span className="brand-name">KMK Engineering<span className="brand-sub">& CONSULTANCY</span></span></>;}
export function Header(){
  const [mobileOpen,setMobileOpen]=useState(false),[dropdown,setDropdown]=useState<string|null>(null),[scrolled,setScrolled]=useState(false);
  const [isMobile,setIsMobile]=useState(()=>window.matchMedia('(max-width:1199px)').matches);
  const header=useRef<HTMLElement>(null),navigation=useRef<HTMLElement>(null),toggle=useRef<HTMLButtonElement>(null),closeButton=useRef<HTMLButtonElement>(null);
  const company=siteContent.company;
  const close=()=>{setMobileOpen(false);setDropdown(null);};
  useEffect(()=>{const scroll=()=>setScrolled(window.scrollY>205);scroll();window.addEventListener('scroll',scroll,{passive:true});const media=window.matchMedia('(max-width:1199px)');const resize=()=>{setIsMobile(media.matches);close();};media.addEventListener('change',resize);return()=>{window.removeEventListener('scroll',scroll);media.removeEventListener('change',resize);};},[]);
  useEffect(()=>{
    const key=(e:KeyboardEvent)=>{
      if(e.key==='Escape'&&(mobileOpen||dropdown)){e.preventDefault();close();if(mobileOpen)toggle.current?.focus({preventScroll:true});}
      if(e.key==='Tab'&&mobileOpen){const items=Array.from(navigation.current?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])')||[]).filter(e=>getComputedStyle(e).visibility!=='hidden'&&e.getBoundingClientRect().height>0);const first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}}
    };
    const outside=(e:PointerEvent)=>{if(!header.current?.contains(e.target as Node))close();};
    document.addEventListener('keydown',key);document.addEventListener('pointerdown',outside);return()=>{document.removeEventListener('keydown',key);document.removeEventListener('pointerdown',outside);};
  },[mobileOpen,dropdown]);
  useEffect(()=>{
    if(!mobileOpen||!isMobile)return;
    const overflow=document.body.style.overflow;document.body.style.overflow='hidden';
    const backgrounds=Array.from(document.querySelectorAll<HTMLElement>('main,footer,.top-bar')).map(e=>({e,inert:e.inert}));backgrounds.forEach(({e})=>{e.inert=true;});
    const frame=requestAnimationFrame(()=>closeButton.current?.focus({preventScroll:true}));
    const focusTimer=window.setTimeout(()=>closeButton.current?.focus({preventScroll:true}),410);
    return()=>{cancelAnimationFrame(frame);window.clearTimeout(focusTimer);document.body.style.overflow=overflow;backgrounds.forEach(({e,inert})=>{e.inert=inert;});if(window.matchMedia('(max-width:1199px)').matches)toggle.current?.focus({preventScroll:true});};
  },[mobileOpen,isMobile]);
  return <><div className="top-bar"><div className="top-bar-inner"><span><ShieldCheck size={17} aria-hidden="true"/>{company.tagline}</span><a href={company.email.includes('[')?'#contact':`mailto:${company.email}`}><Mail size={17} aria-hidden="true"/>{company.email}</a><a className="top-phone" href={company.phone.includes('[')?'#contact':`tel:${company.phone}`}><Phone size={17} aria-hidden="true"/>{company.phone}</a></div></div><div className="nav-height"><header ref={header} className={`navbar ${scrolled?'is-scrolled':''}`}><div className="nav-inner"><a className="brand" href="#home" onClick={close} aria-label="KMK Engineering home"><Brand/></a><button className={`nav-overlay ${mobileOpen?'open':''}`} onClick={close} aria-label="Close navigation overlay" tabIndex={-1} aria-hidden="true"/>
    <nav ref={navigation} id="site-navigation" className={`nav-links ${mobileOpen?'open':''}`} aria-label="Main navigation" role={isMobile&&mobileOpen?'dialog':undefined} aria-modal={isMobile&&mobileOpen?true:undefined} aria-hidden={isMobile&&!mobileOpen?true:undefined} inert={isMobile&&!mobileOpen}>
      <div className="drawer-header"><a className="brand" href="#home" onClick={close}><Brand/></a><button ref={closeButton} onClick={close} aria-label="Close navigation"><X size={22}/></button></div>
      {siteContent.navigation.map(item=><div className={`nav-item ${dropdown===item.label?'expanded':''}`} key={item.label} onMouseEnter={()=>{if(!isMobile&&'children' in item)setDropdown(item.label);}} onMouseLeave={()=>{if(!isMobile)setDropdown(null);}}><div className="nav-label"><a href={item.href} onClick={close}>{item.label}</a>{'children' in item&&item.children&&<button className="dropdown-toggle" aria-label={`${item.label} submenu`} aria-expanded={dropdown===item.label} aria-controls={`nav-${item.label.toLowerCase()}`} onClick={()=>setDropdown(d=>d===item.label?null:item.label)}><ChevronDown size={14}/></button>}</div>{'children' in item&&item.children&&<div className="nav-dropdown" id={`nav-${item.label.toLowerCase()}`} inert={dropdown!==item.label}><div>{item.children.map(child=><a key={child.href} href={child.href} onClick={close}>{child.label}</a>)}</div></div>}</div>)}
      <a className="nav-cta" href="#contact" onClick={close}><ButtonLabel>Get a Quote</ButtonLabel><ArrowRight size={18}/></a>
      <div className="drawer-contact"><span>{company.phone}</span><span>{company.email}</span><span>{company.address}</span></div>
    </nav><button ref={toggle} className={`mobile-toggle ${mobileOpen?'active':''}`} onClick={()=>{setMobileOpen(o=>!o);setDropdown(null);}} aria-label="Open navigation" aria-expanded={mobileOpen} aria-controls="site-navigation" data-testid="button-mobile-menu"><span/><span/><span/></button></div></header></div></>;
}
