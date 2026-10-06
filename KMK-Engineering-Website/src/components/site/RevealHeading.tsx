import { type HTMLAttributes, type ReactNode } from 'react';

type Props = HTMLAttributes<HTMLHeadingElement> & { as?: 'h1' | 'h2'; text?: string; html?: string; autoPlay?: boolean; delay?: number };
// Section headings remain static, as observed in the live reference.
function content(text: string, html?: string): ReactNode[] {
  let emphasis=false;
  return (html??text).split(/(<\/?em>|<br\s*\/?\s*>)/i).map((part,i)=>{
    if(/^<em>$/i.test(part)){emphasis=true;return null;}
    if(/^<\/em>$/i.test(part)){emphasis=false;return null;}
    if(/^<br/i.test(part))return <br key={i}/>;
    return emphasis?<em key={i}>{part}</em>:part;
  });
}
export function RevealHeading({as:Tag='h2',text='',html,autoPlay=false,delay=.1,className='',...props}:Props){
  return <Tag {...props} className={`line-reveal-heading heading-visible ${className}`}>{content(text,html)}</Tag>;
}
