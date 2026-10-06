import type { ReactNode } from 'react';
export function ButtonLabel({children}:{children:ReactNode}){return <span className="button-label"><span>{children}</span><span aria-hidden="true">{children}</span></span>;}
