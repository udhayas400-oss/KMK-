import { useEffect, useState } from 'react';

const legacyRoutes: Record<string, string> = {
  '#home': '/', '#about': '/about', '#services': '/bizsafe',
  '#feature-bizsafe': '/bizsafe', '#feature-level-3': '/bizsafe-level-3',
  '#feature-level-4': '/bizsafe-level-4', '#feature-star': '/bizsafe-star',
  '#iso': '/iso', '#incorporation': '/incorporation', '#bca': '/bca',
  '#blog': '/blog', '#contact': '/contact', '#faqs': '/faq',
};
for (const standard of ['9001', '14001', '45001', '22000', '27001']) legacyRoutes[`#iso-${standard}`] = `/iso-${standard}`;

export function currentRoute() {
  const legacy = legacyRoutes[window.location.hash];
  if (legacy) history.replaceState({}, '', legacy);
  return window.location.pathname.replace(/\/$/, '') || '/';
}

export function navigateTo(href: string) {
  const url = new URL(href, window.location.href);
  const legacy = legacyRoutes[url.hash];
  if (url.origin !== window.location.origin || (url.hash && !legacy)) return false;
  const pathname = legacy || url.pathname;
  if (pathname !== window.location.pathname || window.location.hash) {
    history.pushState({}, '', pathname + (legacy ? '' : url.search));
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  return true;
}

export function usePageRoute() {
  const [route, setRoute] = useState(currentRoute);
  useEffect(() => {
    const update = () => setRoute(currentRoute());
    const click = (event: MouseEvent) => {
      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!(anchor instanceof HTMLAnchorElement) || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || anchor.target || anchor.hasAttribute('download')) return;
      if (navigateTo(anchor.href)) event.preventDefault();
    };
    window.addEventListener('popstate', update);
    window.addEventListener('hashchange', update);
    document.addEventListener('click', click);
    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener('hashchange', update);
      document.removeEventListener('click', click);
    };
  }, []);
  return route;
}
