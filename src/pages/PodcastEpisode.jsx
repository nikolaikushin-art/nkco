import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Play, Pause, Clock, Mic, Share2, Bookmark, ArrowRight, ArrowUpRight, Home, ChevronRight, Radio } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import { BRIEFING, getEpisode } from '../data/briefing';
import { GridOverlay, SkylineLines, ConnectorLine, NumberMark, StructuralMark } from '../components/brand/Visuals';

export default function PodcastEpisode() {
  const { slug } = useParams();
  const [navOpen, setNavOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress] = useState(28); // demo

  const ep = getEpisode(slug);

  if (!ep) {
    return (
      <div className="min-h-screen bg-[#e9e8e5]">
        <Header onOpenNav={() => setNavOpen(true)} />
        <div className="pt-[160px] nk-container pb-40">
          <h1 className="font-serif-display text-[48px] text-[#1b1d21]">Episode not found</h1>
          <Link to="/intelligence/nk-co-briefing" className="mt-4 inline-flex items-center gap-2 text-[#646a73]">Back to the Briefing <ArrowRight size={14} /></Link>
        </div>
        <Footer />
        <SideNav open={navOpen} onClose={() => setNavOpen(false)} />
      </div>
    );
  }

  const related = BRIEFING.episodes.filter((e) => e.slug !== ep.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#e9e8e5]">
      <Header onOpenNav={() => setNavOpen(true)} />

      {/* Editorial hero */}
      <section className="pt-[64px] bg-[#141619] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.35]">
          <img src={ep.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141619] via-[#141619]/85 to-[#141619]/40" />
        </div>
        <GridOverlay className="text-white" opacity={0.05} />
        <div className="relative nk-container py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-[12px] text-white/70">
            <Link to="/"><Home size={12} /></Link>
            <ChevronRight size={12} className="opacity-60" />
            <Link to="/intelligence" className="hover:text-white">Intelligence</Link>
            <ChevronRight size={12} className="opacity-60" />
            <Link to="/intelligence/nk-co-briefing" className="hover:text-white">NK&amp;CO Briefing</Link>
            <ChevronRight size={12} className="opacity-60" />
            <span className="text-white">{ep.series}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/75"><Radio size={12} /> {ep.series} · Episode</div>
              <h1 className="font-serif-display text-[52px] lg:text-[64px] leading-[1.02] mt-5">{ep.title}</h1>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-[13px] text-white/80">
                <span className="inline-flex items-center gap-2"><Mic size={13} /> {ep.guest}</span>
                <span className="inline-flex items-center gap-2"><Clock size={13} /> {ep.duration}</span>
                <span>{ep.date}</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex items-end justify-start lg:justify-end">
              <StructuralMark className="text-white/60" size={110} />
            </div>
          </div>
        </div>
      </section>

      {/* Audio player */}
      <section className="bg-white sticky top-[64px] z-20 border-b border-[#d2d1cd]">
        <div className="nk-container py-4 flex items-center gap-4">
          <button
            aria-label={playing ? 'Pause' : 'Play'}
            onClick={() => setPlaying(!playing)}
            className="w-11 h-11 rounded-full bg-[#1b1d21] text-white flex items-center justify-center hover:bg-[#2f3338] transition-colors flex-shrink-0"
          >
            {playing ? <Pause size={16} /> : <Play size={15} className="ml-0.5" />}
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 text-[12px] text-[#686b70] mb-1.5">
              <span>{Math.round((progress / 100) * parseInt(ep.duration))}:12</span>
              <div className="flex-1 h-[3px] bg-[#d2d1cd] relative">
                <div className="absolute inset-y-0 left-0 bg-[#646a73]" style={{ width: `${progress}%` }} />
                <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#646a73]" style={{ left: `${progress}%` }} />
              </div>
              <span>{ep.duration}</span>
            </div>
            <div className="text-[11px] text-[#686b70] truncate">Now playing · {ep.title}</div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button className="w-10 h-10 border border-[#d2d1cd] text-[#1b1d21] hover:border-[#646a73] hover:text-[#646a73] transition-colors flex items-center justify-center" aria-label="Share"><Share2 size={14} /></button>
            <button className="w-10 h-10 border border-[#d2d1cd] text-[#1b1d21] hover:border-[#646a73] hover:text-[#646a73] transition-colors flex items-center justify-center" aria-label="Bookmark"><Bookmark size={14} /></button>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white">
        <div className="nk-container py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <article className="lg:col-span-8">
            <NumberMark n="Episode summary" />
            <p className="mt-4 font-serif-display text-[26px] leading-[1.35] text-[#1b1d21]">{ep.summary}</p>
            <ConnectorLine className="mt-8" />
            <h2 className="font-serif-display text-[24px] text-[#1b1d21] mt-10 mb-4">Key discussion points</h2>
            <ul className="space-y-3 text-[15px] leading-[1.65] text-[#4b5057]">
              {['The macro-economic backdrop shaping the region in H2 2026.', 'Where institutional capital is finding conviction — and where it is retreating.', 'How Dubai’s regulatory posture is evolving to meet global investor expectations.', 'What the next 18 months mean for allocators, operators and founders.'].map((p, i) => (
                <li key={i} className="flex gap-3"><span className="font-serif-display text-[#646a73] w-6 flex-shrink-0">0{i + 1}</span>{p}</li>
              ))}
            </ul>

            <h2 className="font-serif-display text-[24px] text-[#1b1d21] mt-10 mb-4">Show notes</h2>
            <div className="text-[15px] leading-[1.75] text-[#4b5057] space-y-4">
              <p>This episode was recorded at NK&amp;CO’s DIFC studios in August 2026. Timestamps, mentioned reports and companion insights are below.</p>
              <ul className="space-y-2 text-[14px]">
                <li><span className="text-[#646a73] font-medium">02:14</span> — The state of the market</li>
                <li><span className="text-[#646a73] font-medium">09:38</span> — Institutional flows and cross-border activity</li>
                <li><span className="text-[#646a73] font-medium">18:22</span> — Deep-dive: Dubai&apos;s regulatory horizon</li>
                <li><span className="text-[#646a73] font-medium">27:05</span> — The next 18 months</li>
                <li><span className="text-[#646a73] font-medium">33:48</span> — Closing perspectives</li>
              </ul>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="border border-[#d2d1cd] p-6">
              <div className="text-[10.5px] uppercase tracking-[0.16em] text-[#686b70]">The guest</div>
              <h3 className="font-serif-display text-[20px] text-[#1b1d21] mt-2">{ep.guest}</h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-[#4b5057]">A senior institutional voice on the record, in conversation with NK&amp;CO partners.</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-[#646a73] hover:text-[#4a4f57] text-[13px]">Full biography <ArrowUpRight size={13} /></a>
            </div>

            <div className="mt-6 border border-[#d2d1cd] p-6">
              <div className="text-[10.5px] uppercase tracking-[0.16em] text-[#686b70]">Companion resources</div>
              <ul className="mt-3 space-y-3 text-[13.5px]">
                <li><a href="#" className="flex items-start gap-2 text-[#1b1d21] hover:text-[#646a73] transition-colors"><ArrowUpRight size={13} className="mt-0.5 text-[#646a73]" /> UAE Real Estate Market Review — Q3 2026</a></li>
                <li><a href="#" className="flex items-start gap-2 text-[#1b1d21] hover:text-[#646a73] transition-colors"><ArrowUpRight size={13} className="mt-0.5 text-[#646a73]" /> DIFC at 20 — Executive briefing</a></li>
                <li><a href="#" className="flex items-start gap-2 text-[#1b1d21] hover:text-[#646a73] transition-colors"><ArrowUpRight size={13} className="mt-0.5 text-[#646a73]" /> Institutional Capital Complementary Zones</a></li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {ep.tags?.map((t) => (
                <span key={t} className="px-2 py-1 text-[11px] border border-[#d2d1cd] text-[#43474d]">{t}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Continue listening */}
      <section className="bg-[#e9e8e5]">
        <div className="nk-container py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <NumberMark n="Continue listening" />
              <h2 className="font-serif-display text-[32px] text-[#1b1d21] mt-3 max-w-[720px]">More from the Briefing.</h2>
            </div>
            <Link to="/intelligence/nk-co-briefing" className="hidden md:inline-flex items-center gap-2 text-[13.5px] text-[#646a73] hover:text-[#4a4f57]">All episodes <ArrowRight size={14} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to={`/intelligence/nk-co-briefing/episode/${r.slug}`} className="group block bg-white">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5">
                  <div className="text-[10.5px] uppercase tracking-[0.16em] text-[#686b70]">{r.series}</div>
                  <h3 className="font-serif-display text-[18px] text-[#1b1d21] group-hover:text-[#646a73] transition-colors mt-1.5">{r.title}</h3>
                  <div className="text-[11.5px] text-[#686b70] mt-2">{r.duration} · {r.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <SideNav open={navOpen} onClose={() => setNavOpen(false)} />
    </div>
  );
}
