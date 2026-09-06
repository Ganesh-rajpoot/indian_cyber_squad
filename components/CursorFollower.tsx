'use client';

import { useEffect, useState } from 'react';

export function CursorFollower() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!isMobile) {
      const cursor = document.createElement('div');
      cursor.className = 'cursor-glow';
      cursor.style.position = 'fixed';
      cursor.style.width = '24px';
      cursor.style.height = '24px';
      cursor.style.borderRadius = '50%';
      cursor.style.background = 'radial-gradient(circle, #00ffb4 10%, rgba(0,255,180,0.2) 70%)';
      cursor.style.pointerEvents = 'none';
      cursor.style.transform = 'translate(-50%, -50%)';
      cursor.style.mixBlendMode = 'screen';
      cursor.style.zIndex = '9999';
      cursor.style.transition = 'width 0.2s, height 0.2s';
      document.body.appendChild(cursor);

      let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      document.addEventListener('mousemove', onMouseMove);

      const animate = () => {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animate);
      };

      animate();

      // Hover effect on interactive elements
      const interactiveElements = document.querySelectorAll('a, button, .card-hover, .glass-panel');
      const onMouseEnter = () => {
        cursor.style.width = '48px';
        cursor.style.height = '48px';
        cursor.style.background = 'radial-gradient(circle, #00ffb4 20%, rgba(0,255,180,0.3) 80%)';
      };
      const onMouseLeave = () => {
        cursor.style.width = '24px';
        cursor.style.height = '24px';
        cursor.style.background = 'radial-gradient(circle, #00ffb4 10%, rgba(0,255,180,0.2) 70%)';
      };

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });

      return () => {
        document.removeEventListener('mousemove', onMouseMove);
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', onMouseEnter);
          el.removeEventListener('mouseleave', onMouseLeave);
        });
        document.body.removeChild(cursor);
      };
    }
  }, [isMobile]);

  return null;
}