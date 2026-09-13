import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '@/lib/categories';

export default function CategoryGrid() {
  return (
    <section id="categories" className="bg-black px-6 py-20 scroll-mt-24" aria-labelledby="category-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Tanaura collections</p>
          <h2 id="category-heading" className="font-heading text-4xl md:text-6xl text-white mb-4">FIND YOUR GLOVES</h2>
          <p className="text-zinc-400">Seven categories for work, sport, and everyday style.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((category, index) => (
            <Link key={category.slug} href={'/collections/' + category.slug} className="group border border-brand-gold/20 bg-gradient-to-br from-[#241e16] to-[#0d0d0d] p-8 min-h-[240px] flex flex-col hover:border-brand-gold transition-colors">
              <div className="flex justify-between text-brand-gold mb-10"><span className="text-xs tracking-widest">0{index + 1} / TANAURA</span><ArrowUpRight size={20} aria-hidden="true" /></div>
              <h3 className="font-heading text-2xl text-white mb-2">{category.name}</h3>
              <p className="text-sm text-zinc-400 mb-6">{category.description}</p>
              <span className="mt-auto text-brand-gold text-xs uppercase tracking-widest">Explore collection &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
