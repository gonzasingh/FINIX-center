import { useEffect, useRef, useState } from 'react';

// Animación de entrada al hacer scroll (equivale al IntersectionObserver del HTML original).
const VARIANTS = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
  zoom: 'reveal-zoom',
};

export default function Reveal({ as: Tag = 'div', variant = 'up', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setActive(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = [className, VARIANTS[variant], active ? 'active' : ''].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
