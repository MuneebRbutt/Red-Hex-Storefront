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

      {/* Contact Form Section */}
      <ContactForm />

      <Footer />
    </div>
  );
}
