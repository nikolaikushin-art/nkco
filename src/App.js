import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import InsightsBar from './components/InsightsBar';
import ServicesStrip from './components/ServicesStrip';
import Perspectives from './components/Perspectives';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import RouteSeo from './components/RouteSeo';
import PageFurniture from './components/PageFurniture';
import { RosetteDefs } from './components/brand/Heritage';
import SectionPage from './pages/SectionPage';
import PodcastLanding from './pages/PodcastLanding';
import PodcastEpisode from './pages/PodcastEpisode';

function Home() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#e9e8e5]">
      <a href="#main" className="nk2-skip">Skip to content</a>
      <Header navOpen={navOpen} onOpenNav={() => setNavOpen(true)} onCloseNav={() => setNavOpen(false)} />
      <main id="main">
        <Hero />
        <InsightsBar />
        <ServicesStrip />
        <Perspectives />
        <Stats />
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
        <Route path="/intelligence/nk-co-briefing" element={<PodcastLanding />} />
        <Route path="/intelligence/nk-co-briefing/episode/:slug" element={<PodcastEpisode />} />
        <Route path="/intelligence/nk-co-briefing/series/:slug" element={<PodcastLanding />} />
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
