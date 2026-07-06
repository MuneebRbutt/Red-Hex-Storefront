import React from 'react';
import HeroSlider from '@/components/home/HeroSlider';
import CategoryGrid from '@/components/home/CategoryGrid';
import { mockProducts } from '@/lib/mockProducts';
import Link from 'next/link';

import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/home/AboutSection';
import StatsSection from '@/components/home/StatsSection';
import TrustBadges from '@/components/home/TrustBadges';
import ContactForm from '@/components/home/ContactForm';

export default function Home() {
  const realProducts = mockProducts.filter(p => p.images && p.images[0]?.includes('cloudinary'));
  const featuredProducts: typeof mockProducts = [];
  const seenCategories = new Set<string>();
  for (const p of realProducts) {
    if (!seenCategories.has(p.category)) {
      seenCategories.add(p.category);
      featuredProducts.push(p);
    }
    if (featuredProducts.length === 5) break;
  }
  if (featuredProducts.length < 5) {
    for (const p of realProducts) {
      if (!featuredProducts.some(fp => fp.slug === p.slug)) {
        featuredProducts.push(p);
      }
      if (featuredProducts.length === 5) break;
    }
  }

  return (
    <div className="min-h-screen bg-brand-black text-brand-white font-body selection:bg-brand-gold selection:text-brand-black">

      {/* Hero Slider */}
      <HeroSlider />

      {/* Category Grid */}
      <CategoryGrid />



      {/* About / CEO Section */}
      <AboutSection />

      {/* Stats Counter Section */}
      <StatsSection />

      {/* Trust Badges Bar */}
      <TrustBadges />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Design Showcase Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center border-b border-brand-dark px-6 py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-brand-black to-brand-black overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        
        <div className="max-w-4xl text-center z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-xs uppercase tracking-widest mb-6 font-mono">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse"></span>
            Drop 01 // Industrial workwear
          </div>
          
          <h2 className="font-heading text-5xl md:text-8xl tracking-tighter uppercase font-bold text-brand-white leading-none mb-6">
            Engineered <br/>For <span className="text-brand-gold">Heavy Utility</span>
          </h2>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-body">
            High-performance garments crafted for durability, functionality, and industrial aesthetics. Designed with premium heavy canvas, reinforced seam lines, and gold-alloy utility fixtures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="btn-solid min-w-[200px]">
              Shop Collection
            </button>
            <button className="btn-outlined min-w-[200px]">
              Explore Hardware
            </button>
          </div>
        </div>
      </section>

      {/* Feature Grid / Cards Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-brand-dark">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl tracking-tight mb-4">Core Specifications</h2>
          <p className="text-zinc-400 font-body">Built to endure the demands of modern fabrication environments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-industrial group">
            <div className="font-heading text-brand-gold text-2xl mb-3">01 / HEAVY CANVAS</div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Constructed from double-weave 12oz organic duck canvas. Fire-retardant coating and triple-needle stitched seams ensure complete security.
            </p>
          </div>
          
          <div className="card-industrial group">
            <div className="font-heading text-brand-gold text-2xl mb-3">02 / MODULAR UTILITY</div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Equipped with detachable cargo pouches, gold-plated anodized carabiners, and steel alloy rivets at key tension areas.
            </p>
          </div>
          
          <div className="card-industrial group">
            <div className="font-heading text-brand-gold text-2xl mb-3">03 / ANATOMICAL SEAMS</div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Designed with articulated knees and offset shoulder cuts to provide maximum range of motion during manual operations.
            </p>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="font-heading text-4xl tracking-tight mb-2">Featured Garments</h2>
            <p className="text-zinc-400">Premium releases engineered for daily industrial tasks.</p>
          </div>
          <a href="#" className="font-heading text-brand-gold hover:text-brand-white border-b border-brand-gold hover:border-brand-white transition-all tracking-wider text-lg pb-1 uppercase">
            View All Products &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id || product.slug} className="border border-brand-dark bg-[#111111] flex flex-col group transition-all duration-300 hover:border-zinc-600">
              <Link href={`/products/${product.slug}`} className="block relative w-full overflow-hidden bg-white h-[260px]">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', transition: 'transform 0.4s ease' }}
                  className="group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#cc0000] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                  FEATURED
                </div>
              </Link>
              <div className="p-4 flex flex-col gap-2 flex-grow">
                <span className="text-[#cc0000] text-[10px] font-bold tracking-widest uppercase">{product.category.replace(/-/g, ' ')}</span>
                <Link href={`/products/${product.slug}`} className="text-white hover:text-[#c9a84c] transition-colors">
                  <h3 className="font-heading text-lg uppercase tracking-wide leading-tight line-clamp-2">{product.name}</h3>
                </Link>
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <Link href={`/products/${product.slug}`} className="btn-outlined w-full text-center py-2 text-xs uppercase font-bold tracking-wider">
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
