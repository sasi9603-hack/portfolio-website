'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setHidden(false);
      const { clientX: x, clientY: y } = e;
      
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }
      
      if (ringRef.current) {
        ringRef.current.animate({
          left: `${x}px`,
          top: `${y}px`
        }, { duration: 150, fill: "forwards" });
      }
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleHoverStart = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '48px';
        ringRef.current.style.height = '48px';
        ringRef.current.style.borderColor = 'var(--accent-cyan)';
      }
    };
    
    const handleHoverEnd = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '24px';
        ringRef.current.style.height = '24px';
        ringRef.current.style.borderColor = 'rgba(255, 255, 255, 0.4)';
      }
    };

    const addHoverListeners = () => {
      const clickables = document.querySelectorAll('a, button, [role="button"], .interactive-element');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    // Watch for dynamic DOM changes to bind new elements
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    
    addHoverListeners();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div 
        ref={ringRef} 
        className={`custom-cursor ${hidden ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 hidden md:block`} 
      />
      <div 
        ref={dotRef} 
        className={`custom-cursor-dot ${hidden ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 hidden md:block`} 
      />
    </>
  );
}
