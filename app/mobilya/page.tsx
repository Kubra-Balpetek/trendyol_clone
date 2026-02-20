'use client';

import FilterSidebar from '../components/Filters/FilterSidebar';
import ProductGrid from '../components/Products/ProductGrid';
import { useState } from 'react';

const filterChips = [
  {
    label: 'Flaş Ürünler',
    emoji: '⚡',
    bg: '#FFF0F2',
    border: '#F5A0AB',
    color: '#D73554',
    hoverBg: '#FFE0E6',
  },
  {
    label: 'Yüksek Puanlı Ürünler',
    emoji: '⭐',
    bg: '#FFFBEF',
    border: '#F0D87C',
    color: '#8A6D00',
    hoverBg: '#FFF6D0',
  },
  {
    label: 'Yüksek Puanlı Satıcılar',
    emoji: '🏪',
    bg: '#EFF6FF',
    border: '#93C5FD',
    color: '#1D6EBF',
    hoverBg: '#DBEAFE',
  },
  {
    label: 'Kargo Bedava',
    emoji: '📦',
    bg: '#F7F7F7',
    border: '#CCCCCC',
    color: '#555555',
    hoverBg: '#EFEFEF',
  },
  {
    label: 'Hızlı Teslimat',
    emoji: '🚀',
    bg: '#F0FDF4',
    border: '#86EFAC',
    color: '#166534',
    hoverBg: '#DCFCE7',
  },
];

const sortOptions = [
  'Önerilen Sıralama',
  'En Çok Satanlar',
  'En Yeniler',
  'En Düşük Fiyat',
  'En Yüksek Fiyat',
  'En Çok Değerlendirilen',
];

export default function MobilyaPage() {
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Önerilen Sıralama');

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#f0f0f0]">
        <div className="max-w-[1440px] mx-auto py-[10px]" style={{ paddingLeft: 20, paddingRight: 20 }}>
          <div className="flex items-center gap-[6px]" style={{ fontSize: 13, color: '#999' }}>
            <a href="/" style={{ color: '#333', textDecoration: 'none' }} className="hover:text-[#F27A1A] transition-colors">Trendyol</a>
            <span>›</span>
            <a href="#" style={{ color: '#333', textDecoration: 'none' }} className="hover:text-[#F27A1A] transition-colors">Ev ve Mobilya</a>
            <span>›</span>
            <span style={{ color: '#333', fontWeight: 600 }}>Mobilya</span>
          </div>
        </div>
      </div>

      {/* Main — same max-w as header so sidebar aligns with nav */}
      <div className="max-w-[1440px] mx-auto px-5 pt-[20px] pb-8 flex gap-[10] items-start">

        {/* SIDEBAR */}
        <FilterSidebar />

        {/* RIGHT CONTENT */}
        <div className="flex-1 min-w-0">

          {/* Category Header: title + chips + sort */}
          <div className="mb-[30px]">
            <div className="flex items-center justify-between mb-3">
              <h1 style={{ fontSize: 16, fontWeight: 700, color: '#1d1d1b' }}>
                Mobilya <span style={{ fontSize: 12, fontWeight: 400, color: '#999' }}>100000+ Ürün</span>
              </h1>
            </div>

            {/* Filter chips + sort row */}
            <div className="flex items-center justify-between gap-[3px]">
              {/* Chips */}
              <div className="flex items-center gap-[10px] overflow-x-auto scrollbar-hide pb-1">
                {filterChips.map((chip) => (
                  <button
                    key={chip.label}
                    className="flex items-center gap-[6px] whitespace-nowrap rounded-[100px] px-3 py-[6px] text-[13px] shrink-0 transition-all font-[500] border border-transparent"
                    style={{
                      backgroundColor: chip.bg,
                      color: chip.color,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = chip.border}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                  >
                    <span>{chip.emoji}</span>
                    <span className="pt-[1px]">{chip.label}</span>
                  </button>
                ))}
              </div>

              {/* Sort dropdown */}
              <div className="relative shrink-0">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center justify-between min-w-[200px] text-[13px] text-[#333] border border-[#e6e6e6] rounded-full px-4 py-[8px] transition-colors whitespace-nowrap"
                  style={{ backgroundColor: '#ffffff' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#F27A1A'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e6e6e6'}
                >
                  <span className="font-medium text-[#333]">{selectedSort}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F27A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Up arrow shifted left */}
                    <path d="M7 20V4M2 9l5-5 5 5" />
                    {/* Down arrow shifted right */}
                    <path d="M17 4v16M12 15l5 5 5-5" />
                  </svg>
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white border border-[#e0e0e0] rounded-[4px] shadow-lg z-50 min-w-[200px]">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setSelectedSort(opt); setSortOpen(false); }}
                        className={`w-full text-left px-4 py-2 text-[13px] hover:bg-orange-50 hover:text-[#F27A1A] transition-colors ${selectedSort === opt ? 'text-[#F27A1A] font-semibold' : 'text-[#333]'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Products */}
          <ProductGrid />

        </div>
      </div>
    </>
  );
}