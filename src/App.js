import React, { useState, Suspense, lazy } from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import { HomeProfile, HomePractices, HomeBoundaries, HomeMethod, HomeEngagement, HomePerspectives, HomeStandard } from './components/HomeSections';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import RouteSeo from './components/RouteSeo';
import PageFurniture from './components/PageFurniture';
import { RosetteDefs } from './components/brand/Heritage';
const SectionPage = lazy(() => import('./pages/SectionPage'));
const Briefing = lazy(() => import('./pages/Briefing'));

function Home() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <a href="#main" className="nk2-skip">Skip to content</a>
      <Header navOpen={navOpen} onOpenNav={() => setNavOpen(true)} onCloseNav={() => setNavOpen(false)} />
      <main id="main">
        <Hero />
        <HomeProfile />
        <HomePractices />
        <HomeBoundaries />
        <HomeMethod />
        <HomeEngagement />
        <HomePerspectives />
        <HomeStandard />
        <CTA />
      </main>
      <Footer />
      <SideNav open={navOpen} onClose={() => setNavOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RosetteDefs />
      <RouteSeo />
      <PageFurniture />
      <Suspense fallback={<div style={{ minHeight: '100vh', background: '#14161a' }} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* NK&CO Briefing — nested under Intelligence */}
        <Route path="/intelligence/nk-co-briefing" element={<Briefing />} />
        <Route path="/intelligence/nk-co-briefing/*" element={<Briefing />} />
        {/* Section pages */}
        <Route path="/:section" element={<SectionPage />} />
        <Route path="/:section/:category" element={<SectionPage />} />
        <Route path="/:section/:category/:item" element={<SectionPage />} />
        <Route path="/:section/:category/:item/:child" element={<SectionPage />} />
        <Route path="/:section/:category/:item/:child/:piece" element={<SectionPage />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
