import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO } from '../mock';

// Editorial hero: one claim, one image, one action. Left-aligned, no ornament.
export default function Hero() {
  return (
    <section className="nk2-hero">
      <div className="nk-container nk2-hero-grid">
        <div className="nk2-hero-copy">
          <div className="nk2-eyebrow">{HERO.eyebrow}</div>
          <h1 className="nk2-h1">{HERO.title}</h1>
          <p className="nk2-lede">{HERO.description}</p>
          <a href="#report" className="nk2-btn">
            <span>{HERO.cta}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <figure className="nk2-hero-img">
          <img src={HERO.image} alt="Dubai skyline" />
          <figcaption>Dubai, United Arab Emirates</figcaption>
        </figure>
      </div>
    </section>
  );
}
