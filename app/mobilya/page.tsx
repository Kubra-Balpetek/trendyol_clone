'use client';

import FilterSidebar from '../components/Filters/FilterSidebar';
import ProductGrid from '../components/Products/ProductGrid';
import MobileProductGrid from '../components/Products/MobileProductGrid';
import MobileFilterPanel from '../components/Filters/MobileFilterPanel';
import { useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { SlidersHorizontal, ArrowUpDown, ChevronLeft } from 'lucide-react';

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
  { label: 'Önerilen Sıralama', info: true },
  { label: 'En Düşük Fiyat', info: false },
  { label: 'En Yüksek Fiyat', info: false },
  { label: 'En Yeniler', info: false },
  { label: 'En Çok Satan', info: false },
  { label: 'En Favoriler', info: false },
  { label: 'En Çok Değerlendirilen', info: false },
];

const mobileCategoryPills = ['Kategori', 'İçerik', 'Tip', '🔴 Kuponlu Ürünler'];

export default function MobilyaPage() {
  const isMobile = useIsMobile();
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Önerilen Sıralama');
  const [mobileSortOpen, setMobileSortOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <>
      {/* ══════════════════════════════════════ */}
      {/* DESKTOP LAYOUT — hidden on mobile      */}
      {/* ══════════════════════════════════════ */}

      {/* Desktop Breadcrumb */}
      {!isMobile && (
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
      )}

      {/* Desktop Main layout */}
      {!isMobile && (
        <div className="flex max-w-[1440px] mx-auto px-5 pt-[20px] pb-8 gap-[10] items-start">

          {/* SIDEBAR */}
          <FilterSidebar />

          {/* RIGHT CONTENT */}
          <div className="flex-1 min-w-0">

            {/* Category Header */}
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
                <div className="relative shrink-0" style={{ fontFamily: "BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
                  <button
                    onClick={() => setSortOpen(!sortOpen)}
                    className="flex items-center justify-between text-[14px] border px-4 py-[8px] transition-colors whitespace-nowrap"
                    style={{
                      borderRadius: '8px',
                      borderColor: '#e6e6e6',
                      minWidth: '220px',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <span style={{ color: '#666' }}>{selectedSort}</span>
                    <div className="flex flex-row gap-[2px] items-center justify-center">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="19" x2="12" y2="5"></line>
                        <polyline points="5 12 12 5 19 12"></polyline>
                      </svg>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                      </svg>
                    </div>
                  </button>

                  {sortOpen && (
                    <div
                      className="absolute right-0 top-full mt-1 z-50 py-[8px]"
                      style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                        minWidth: '220px',
                        border: '1px solid #f0f0f0',
                        outline: 'none'
                      }}
                    >
                      {sortOptions.map(({ label, info }) => {
                        const isSelected = selectedSort === label;
                        return (
                          <button
                            key={label}
                            onClick={() => { setSelectedSort(label); setSortOpen(false); }}
                            className="w-full text-left px-[16px] py-[12px] text-[14px] flex items-center gap-[6px] transition-colors"
                            style={{
                              backgroundColor: isSelected ? '#f5f5f5' : 'transparent',
                              border: 'none',
                              outline: 'none',
                              borderBottom: 'none' // enforcing no separate borders
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = isSelected ? '#f5f5f5' : 'transparent'}
                          >
                            <span style={{
                              color: isSelected ? '#f27a1a' : '#333',
                              fontWeight: isSelected ? 600 : 400
                            }}>
                              {label}
                            </span>
                            {info && (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isSelected ? "#f27a1a" : "#999"} strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                              </svg>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Products */}
            <ProductGrid />

          </div>
        </div>
      )}

      {/* ══════════════════════════════════════ */}
      {/* MOBILE LAYOUT — hidden on desktop      */}
      {/* ══════════════════════════════════════ */}
      {isMobile && (
        <div className="bg-white min-h-screen">

          {/* Mobile Breadcrumb */}
          <div className="flex items-center gap-1 px-4 py-2 border-b border-[#f0f0f0] bg-white">
            <button className="flex items-center justify-center bg-transparent border-none outline-none p-0 pr-2">
              <ChevronLeft className="w-5 h-5 text-[#333]" strokeWidth={2} />
            </button>
            <div className="flex items-center gap-1 text-[13px] text-[#999]">
              <a href="/" className="text-[#333] no-underline">Trendyol</a>
              <span>›</span>
              <span className="text-[#333]">Mobilya</span>
            </div>
          </div>

          {/* Mobile Category Title */}
          <div className="px-4 pt-3 pb-2 text-center bg-white">
            <h1 className="text-[15px] font-[700] text-[#1d1d1b]">Mobilya</h1>
            <p className="text-[12px] text-[#999] mt-[2px]">100000+ Ürün</p>
          </div>

          {/* Mobile Sort + Filter bar */}
          <div
            className="sticky top-[52px] z-40 border-t border-b border-[#e8e8e8]"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div className="flex items-stretch divide-x divide-[#e8e8e8]">

              {/* Sıralama button */}
              <button
                onClick={() => setMobileSortOpen(!mobileSortOpen)}
                className="flex-1 flex items-center justify-center gap-[6px] py-[10px] text-[13px] text-[#333] font-[500] bg-white"
                style={{ backgroundColor: '#ffffff' }}
              >
                <ArrowUpDown className="w-[13px] h-[13px] text-[#555]" strokeWidth={2} />
                <span>Önerilen Sıralama</span>
              </button>

              {/* Filtrele button */}
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="flex-1 flex items-center justify-center gap-[6px] py-[10px] text-[13px] text-[#333] font-[500] bg-white"
                style={{ backgroundColor: '#ffffff' }}
              >
                <SlidersHorizontal className="w-[13px] h-[13px] text-[#555]" strokeWidth={2} />
                <span>Filtrele <span style={{ color: '#F27A1A', fontWeight: 600 }}>(1)</span></span>
              </button>

            </div>
          </div>


          {/* Mobile Category Pills — horizontal scroll */}
          <div className="flex items-center gap-[8px] overflow-x-auto px-4 py-[10px] scrollbar-hide border-b border-[#f5f5f5] bg-white">
            {mobileCategoryPills.map((pill) => (
              <button
                key={pill}
                onClick={() => setActiveCategory(activeCategory === pill ? null : pill)}
                className={`flex items-center gap-[6px] shrink-0 rounded-[100px] px-[14px] py-[6px] text-[13px] font-[500] border transition-all whitespace-nowrap outline-none
                ${activeCategory === pill
                    ? 'text-white border-[#f27a1a]'
                    : 'text-[#333] border-[#e6e6e6]'
                  }`}
                style={{
                  backgroundColor: activeCategory === pill ? '#f27a1a' : '#ffffff'
                }}
              >
                {pill}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ))}
          </div>

          {/* Mobile sort bottom sheet */}
          {mobileSortOpen && (
            <div className="md:hidden">
              {/* Backdrop */}
              <div
                style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 9998 }}
                onClick={() => setMobileSortOpen(false)}
              />
              {/* Floating Menu */}
              <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#ffffff',
                borderRadius: '16px 16px 0 0',
                zIndex: 9999,
                borderTop: '1px solid #f0f0f0',
                boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                paddingBottom: 'safe-area-inset-bottom'
              }}>

                {/* Header */}
                <div className="flex items-center justify-between px-[20px] pt-[20px] pb-[16px] border-b border-[#f5f5f5]">
                  <span className="text-[16px] font-[600] text-[#1d1d1b]">Sıralama</span>
                  <button
                    onClick={() => setMobileSortOpen(false)}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                {/* Options */}
                <div className="flex flex-col">
                  {sortOptions.map(({ label, info }) => {
                    const selected = selectedSort === label;
                    return (
                      <button
                        key={label}
                        onClick={() => { setSelectedSort(label); setMobileSortOpen(false); }}
                        className="hover:bg-[#f8f8f8] active:bg-[#f8f8f8] transition-colors"
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '16px 20px',
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        {/* Label + optional info icon */}
                        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ fontSize: 14, fontWeight: selected ? 600 : 400, color: selected ? '#f27a1a' : '#1d1d1b' }}>
                            {label}
                          </span>
                          {info && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={selected ? "#f27a1a" : "#aaa"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="12" y1="16" x2="12" y2="12" />
                              <line x1="12" y1="8" x2="12.01" y2="8" />
                            </svg>
                          )}
                        </span>

                        {/* Checkmark */}
                        {selected && (
                          <svg width="20" height="20" fill="none" stroke="#f27a1a" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>

              </div>
            </div>
          )}


          {/* Mobile Filter Panel — tam ekran */}
          {mobileFilterOpen && (
            <MobileFilterPanel onClose={() => setMobileFilterOpen(false)} />
          )}



          {/* Mobile 2-column Product Grid */}
          <div className="px-3 pt-3 pb-6">
            <MobileProductGrid />
          </div>

        </div>
      )}
    </>
  );
}