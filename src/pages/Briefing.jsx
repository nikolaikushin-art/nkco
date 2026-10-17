import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';

// The NK&CO Briefing. No episodes, guests or audience figures are shown until real ones exist (framework s.23.7, s.28.2).
export default function Briefing() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#e9e8e5]">
      <Header onOpenNav={() => setNavOpen(true)} />
      <main className="nk-container pt-[160px] pb-32" style={{ maxWidth: 820 }}>
        <div className="nk2-eyebrow">Intelligence</div>
        <h1 className="font-serif-display text-[52px] leading-[1.05] text-[#1b1d21]">NK&amp;CO Briefing</h1>
        <p className="nk2-lede" style={{ marginTop: 24 }}>
          The Briefing will carry executive conversations and practical analysis on enterprise development, business performance, operating models, commercial growth, financial visibility, capital readiness and strategic development.
        </p>
        <p className="nk2-lede">
          No episodes have been published yet. Material will appear here once it exists, with named speakers, dated observations and reliable sources.
        </p>
        <Link to="/" className="nk2-link" style={{ marginTop: 24, display: 'inline-flex' }}>Back to home</Link>
      </main>
      <Footer />
      <SideNav open={navOpen} onClose={() => setNavOpen(false)} />
    </div>
  );
}
