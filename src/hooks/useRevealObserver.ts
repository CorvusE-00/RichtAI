import { useEffect } from 'react';

export function useRevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion-ready');

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('reveal-visible'));
      return () => root.classList.remove('motion-ready');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    );

    const revealInViewport = () => {
      const viewportHeight = window.innerHeight || 800;
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < viewportHeight * 1.08 && rect.bottom > 0) {
          element.classList.add('reveal-visible');
          observer.unobserve(element);
        }
      });
    };

    elements.forEach((element) => observer.observe(element));
    requestAnimationFrame(revealInViewport);
    window.addEventListener('scroll', revealInViewport, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', revealInViewport);
      root.classList.remove('motion-ready');
    };
  }, []);
}
