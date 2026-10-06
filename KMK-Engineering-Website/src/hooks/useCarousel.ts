import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { useReducedMotion } from 'framer-motion';

export function useCarousel(count: number, intervalMs: number) {
  const [active, setActive] = useState(0), [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false), [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(!document.hidden);
  const reduced = useReducedMotion();
  const start = useRef<{x:number;y:number} | null>(null);
  const direction = useRef(1);
  const change = (next: number) => { direction.current = next >= active ? 1 : -1; setActive((next+count)%count); };
  const move = (step: number) => { direction.current = step; setActive(a => (a+step+count)%count); };
  useEffect(() => { const update=()=>setVisible(!document.hidden);document.addEventListener('visibilitychange',update);return()=>document.removeEventListener('visibilitychange',update); }, []);
  useEffect(() => {
    if(paused||hovered||focused||!visible||reduced||count<2)return;
    const timer=window.setTimeout(()=>{direction.current=1;setActive(a=>(a+1)%count);},intervalMs);
    return()=>window.clearTimeout(timer);
  },[active,paused,hovered,focused,visible,reduced,count,intervalMs]);
  const onPointerDown=(e:PointerEvent<HTMLElement>)=>{if(e.pointerType==='mouse')return;start.current={x:e.clientX,y:e.clientY};};
  const onPointerUp=(e:PointerEvent<HTMLElement>)=>{const point=start.current;start.current=null;if(!point)return;const dx=e.clientX-point.x,dy=e.clientY-point.y;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.2)move(dx<0?1:-1);};
  return {active,change,move,paused,setPaused,reduced,direction,
    interactionProps:{
      onMouseEnter:()=>setHovered(true),onMouseLeave:()=>setHovered(false),
      onFocus:()=>setFocused(true),onBlur:(e:React.FocusEvent<HTMLElement>)=>{if(!e.currentTarget.contains(e.relatedTarget))setFocused(false);},
      onPointerDown,onPointerUp,onPointerCancel:()=>{start.current=null;},
      onKeyDown:(e:React.KeyboardEvent<HTMLElement>)=>{if(e.key==='ArrowRight'){e.preventDefault();move(1);}else if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}},
    },
  };
}
