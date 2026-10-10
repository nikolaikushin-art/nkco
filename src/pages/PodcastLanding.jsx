import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Headphones, ArrowRight, ArrowUpRight, Clock, Mic, Search, Radio } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import { BRIEFING } from '../data/briefing';
import { GridOverlay, SkylineLines, ConnectorLine, NumberMark } from '../components/brand/Visuals';

function EpisodeCard({ ep, size = 'md' }) {
  const isLg = size === 'lg';
  return (
    <Link to={`/intelligence/nk-co-briefing/episode/${ep.slug}`} className="group block">
      <div className={`relative overflow-hidden ${isLg ? 'aspect-[16/10]' : 'aspect-[4/3]'} bg-[#1b1d21]`}>
        <img src={ep.image} alt={ep.title} className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="bg-white text-[#1b1d21] text-[10px] uppercase tracking-[0.14em] px-2 py-1 inline-flex items-center gap-1"><Radio size={11} /> {ep.series}</span>
        </div>
        <button aria-label="Play episode" className="absolute inset-0 flex items-center justify-center">
          <span className="w-12 h-12 rounded-full bg-white/95 text-[#1b1d21] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play size={16} className="ml-0.5" />
          </span>
        </button>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/95 text-[11px]">
          <span className="inline-flex items-center gap-1"><Clock size={11} /> {ep.duration}</span>
          <span>{ep.date}</span>
        </div>
      </div>
      <div className="mt-3">
        <h3 className={`font-serif-display leading-[1.2] text-[#1b1d21] group-hover:text-[#646a73] transition-colors ${isLg ? 'text-[22px]' : 'text-[16px]'}`}>{ep.title}</h3>
        <div className="mt-1.5 text-[12.5px] text-[#686b70]">{ep.guest}</div>
      </div>
    </Link>
  );
}

export default function PodcastLanding() {
  const [navOpen, setNavOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeTopic, setActiveTopic] = useState('All');

  const topics = ['All', ...BRIEFING.topics];
  const episodes = BRIEFING.episodes.filter((e) => {
    const q = query.toLowerCase();
    const matchQ = !q || e.title.toLowerCase().includes(q) || e.guest.toLowerCase().includes(q) || e.series.toLowerCase().includes(q);
    const matchT = activeTopic === 'All' || e.tags?.includes(activeTopic);
    return matchQ && matchT;
  });

  const featured = BRIEFING.episodes[0];
  const latest = BRIEFING.episodes.slice(1, 4);
  const trending = BRIEFING.episodes.slice(4, 7);

  return (
    <div className="min-h-screen bg-[#e9e8e5]">
      <Header onOpenNav={() => setNavOpen(true)} />

      {/* Hero */}
      <section className="pt-[64px] bg-[#141619] text-white relative overflow-hidden">
        <GridOverlay className="text-white" opacity={0.05} />
        <SkylineLines className="absolute left-0 right-0 bottom-0 w-full h-40" opacity={0.3} />
        <div className="relative nk-container py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/70 mb-6">
              <Headphones size={12} /> Intelligence · The NK&amp;CO Podcast
            </div>
            <h1 className="font-serif-display text-[64px] lg:text-[80px] leading-[0.98]">
              {BRIEFING.name}
            </h1>
            <p className="mt-6 text-[16px] leading-[1.65] text-white/85 max-w-[560px]">{BRIEFING.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 bg-white text-[#1b1d21] px-6 py-3 hover:bg-[#d2d1cd] transition-colors">
                <Play size={14} className="ml-0.5" /> <span className="text-[13.5px]">Listen to latest</span>
              </button>
              <a href="#subscribe" className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 hover:bg-white/5 transition-colors text-[13.5px]">
                Subscribe <ArrowRight size={14} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 self-end">
            {BRIEFING.stats.map((s) => (
              <div key={s.k} className="border-l border-white/20 pl-4">
                <div className="font-serif-display text-[36px] leading-none text-white">{s.v}</div>
                <div className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-white/60">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="bg-white">
        <div className="nk-container py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <NumberMark n="Featured episode" />
              <h2 className="font-serif-display text-[36px] text-[#1b1d21] mt-3 max-w-[720px]">This week on the Briefing.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <EpisodeCard ep={featured} size="lg" />
            </div>
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#686b70]">{featured.series}</div>
              <h3 className="font-serif-display text-[34px] leading-[1.1] text-[#1b1d21] mt-3">{featured.title}</h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-[#4b5057]">{featured.summary}</p>
              <div className="mt-6 space-y-3 text-[13.5px] text-[#43474d]">
                <div className="flex items-center gap-3"><Mic size={14} className="text-[#646a73]" /> {featured.guest}</div>
                <div className="flex items-center gap-3"><Clock size={14} className="text-[#646a73]" /> {featured.duration} · {featured.date}</div>
              </div>
              <ConnectorLine className="mt-8" />
              <div className="mt-6 flex items-center gap-4">
                <Link to={`/intelligence/nk-co-briefing/episode/${featured.slug}`} className="inline-flex items-center gap-2 bg-[#1b1d21] text-white px-6 py-3 hover:bg-[#2f3338] transition-colors text-[13.5px]">
                  <Play size={14} className="ml-0.5" /> Play episode
                </Link>
                <Link to={`/intelligence/nk-co-briefing/episode/${featured.slug}`} className="inline-flex items-center gap-2 text-[#646a73] hover:text-[#4a4f57] text-[13.5px]">
                  Show notes <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Series */}
      <section className="bg-[#e9e8e5] relative overflow-hidden">
        <GridOverlay className="text-[#1b1d21]" opacity={0.04} />
        <div className="relative nk-container py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <NumberMark n="Series" />
              <h2 className="font-serif-display text-[36px] text-[#1b1d21] mt-3 max-w-[720px]">Curated series for the institutional listener.</h2>
            </div>
            <Link to="/intelligence/nk-co-briefing/series" className="hidden md:inline-flex items-center gap-2 text-[13.5px] text-[#646a73] hover:text-[#4a4f57]">
              All series <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRIEFING.series.map((s) => (
              <Link to={`/intelligence/nk-co-briefing/series/${s.slug}`} key={s.slug} className="group block bg-white overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                </div>
                <div className="p-5">
                  <div className="text-[10.5px] uppercase tracking-[0.16em] text-[#686b70]">{s.episodes} episodes</div>
                  <h3 className="font-serif-display text-[20px] text-[#1b1d21] group-hover:text-[#646a73] transition-colors mt-1.5">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-[#4b5057]">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest & Trending */}
      <section className="bg-white">
        <div className="nk-container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <NumberMark n="Latest episodes" />
              <h2 className="font-serif-display text-[32px] text-[#1b1d21] mt-3 mb-8">Fresh from the studio.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {latest.map((ep) => (<EpisodeCard key={ep.slug} ep={ep} />))}
              </div>
            </div>
            <div className="lg:col-span-4">
              <NumberMark n="Trending" />
              <h2 className="font-serif-display text-[24px] text-[#1b1d21] mt-3 mb-6">Most listened this month</h2>
              <ol className="space-y-4">
                {trending.map((ep, i) => (
                  <li key={ep.slug}>
                    <Link to={`/intelligence/nk-co-briefing/episode/${ep.slug}`} className="group flex gap-4">
                      <div className="font-serif-display text-[28px] text-[#646a73] w-8 leading-none">0{i + 1}</div>
                      <div className="min-w-0 border-t border-[#d2d1cd] pt-3">
                        <div className="text-[11px] uppercase tracking-[0.14em] text-[#686b70]">{ep.series}</div>
                        <h4 className="font-serif-display text-[15.5px] leading-[1.2] text-[#1b1d21] group-hover:text-[#646a73] transition-colors mt-1">{ep.title}</h4>
                        <div className="text-[11.5px] text-[#686b70] mt-1">{ep.duration} · {ep.date}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="bg-[#1b1d21] text-white relative overflow-hidden">
        <GridOverlay className="text-white" opacity={0.05} />
        <div className="relative nk-container py-20">
          <NumberMark n="Explore the archive" className="[&_span]:!text-[#c4c8ce] [&_span:first-child]:!bg-[#c4c8ce]" />
          <h2 className="font-serif-display text-[36px] mt-3 mb-8">Search 128 episodes.</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, guest, or series…"
                className="w-full bg-white/5 border border-white/15 py-3 pl-10 pr-4 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTopic(t)}
                className={`px-3 py-1.5 text-[12px] border transition-colors ${activeTopic === t ? 'bg-white text-[#1b1d21] border-white' : 'bg-transparent text-white/85 border-white/25 hover:border-white/60'}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((ep) => (
              <Link to={`/intelligence/nk-co-briefing/episode/${ep.slug}`} key={ep.slug} className="group flex gap-4 border-t border-white/15 pt-4 hover:border-white/60 transition-colors">
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden bg-white/5">
                  <img src={ep.image} alt={ep.title} className="w-full h-full object-cover opacity-95" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10.5px] uppercase tracking-[0.14em] text-white/60">{ep.series}</div>
                  <h4 className="font-serif-display text-[15.5px] leading-[1.2] text-white mt-1 group-hover:text-[#c4c8ce] transition-colors">{ep.title}</h4>
                  <div className="text-[11.5px] text-white/60 mt-1">{ep.duration} · {ep.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hosts + Subscribe */}
      <section id="subscribe" className="bg-white">
        <div className="nk-container py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <NumberMark n="The hosts" />
            <h2 className="font-serif-display text-[36px] text-[#1b1d21] mt-3 mb-8">Senior partners, in conversation.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {BRIEFING.hosts.map((h) => (
                <div key={h.name} className="group">
                  <div className="aspect-[4/5] overflow-hidden bg-[#d2d1cd]">
                    <img src={h.image} alt={h.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="mt-3 font-serif-display text-[18px] text-[#1b1d21]">{h.name}</div>
                  <div className="text-[12.5px] text-[#686b70]">{h.role}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#1b1d21] text-white p-8 relative overflow-hidden">
              <GridOverlay className="text-white" opacity={0.05} />
              <div className="relative">
                <div className="text-[10.5px] uppercase tracking-[0.18em] text-white/70">Subscribe</div>
                <h3 className="font-serif-display text-[26px] leading-[1.15] mt-3">Get the Briefing in your inbox.</h3>
                <p className="mt-3 text-[13.5px] leading-[1.65] text-white/80">One editorial email each Friday with the week’s episodes, guest excerpts, and companion reports.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-2">
                  <input type="email" placeholder="you@company.com" className="flex-1 bg-white/5 border border-white/15 py-3 px-4 text-[13.5px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors" />
                  <button className="bg-white text-[#1b1d21] px-5 py-3 text-[13px] hover:bg-[#d2d1cd] transition-colors inline-flex items-center gap-2 justify-center">Subscribe <ArrowRight size={13} /></button>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-[12px] text-white/70">
                  <span>Also on</span>
                  {['Apple Podcasts', 'Spotify', 'YouTube', 'Overcast'].map((p) => (
                    <a key={p} href="#" className="hover:text-white transition-colors">{p}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SideNav open={navOpen} onClose={() => setNavOpen(false)} />
    </div>
  );
}
