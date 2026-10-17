import React, { useState } from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import { Profile, Positioning, Practices, Separation, Approach, Governance, Principles, Scope, ControlRegister, LicenceRegister, TheFirm, ServiceArchitecture, Deliverables, Accountability, MandateSchedule, TransactionClassification, Lifecycle, Transition, Acceptance, Commercial, GoverningStandard, ScopeMap, ScopeDetailFull } from './components/Institutional';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import RouteSeo from './components/RouteSeo';
import PageFurniture from './components/PageFurniture';
import { RosetteDefs } from './components/brand/Heritage';
import SectionPage from './pages/SectionPage';
import Briefing from './pages/Briefing';

function Home() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#e9e8e5]">
      <a href="#main" className="nk2-skip">Skip to content</a>
      <Header navOpen={navOpen} onOpenNav={() => setNavOpen(true)} onCloseNav={() => setNavOpen(false)} />
      <main id="main">
        <Hero />
        <Profile />
        <Positioning />
        <Practices />
        <ServiceArchitecture />
        <ScopeMap />
        <ScopeDetailFull />
        <Deliverables />
        <Accountability />
        <MandateSchedule />
        <TransactionClassification />
        <Separation />
        <Approach />
        <Lifecycle />
        <Transition />
        <Acceptance />
        <Governance />
        <Commercial />
        <Principles />
        <Scope />
        <ControlRegister />
        <LicenceRegister />
        <GoverningStandard />
        <TheFirm />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
