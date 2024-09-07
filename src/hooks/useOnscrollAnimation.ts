import { useState } from 'react';

export const useOnscrollAnimation = (threshold = 0.3) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    if (entry.isIntersecting && !hasAnimated) {
      setHasAnimated(true);
    }
  };

  const observerOptions = {
    threshold,
  };

  const observe = (element: HTMLElement | null) => {
    if (element && !hasAnimated) {
      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      observer.observe(element);

      return () => observer.disconnect();
    }
  };

  return [hasAnimated, observe] as const;
};
