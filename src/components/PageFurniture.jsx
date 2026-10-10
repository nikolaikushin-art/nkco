// NK&CO — page furniture (v47): reading-progress hairline + scroll-to-top on route change.
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageFurniture() {
  const [p, setP] = useState(0);
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  useEffect(() => {
    let t = false;
    const on = () => {
      if (t) return; t = true;
      requestAnimationFrame(() => {
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        setP(Math.min(1, window.scrollY / max)); t = false;
      });
    };
    window.addEventListener('scroll', on, { passive: true }); on();
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <>
      <div className="nk-progress" aria-hidden="true"><i style={{ transform: `scaleX(${p})` }} /></div>
    </>
  );
}
