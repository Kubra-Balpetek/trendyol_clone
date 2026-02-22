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
  'Önerilen Sıralama',
  'En Çok Satanlar',
  'En Yeniler',
  'En Düşük Fiyat',
  'En Yüksek Fiyat',
  'En Çok Değerlendirilen',
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
                      <path d="M7 20V4M2 9l5-5 5 5" />
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
      )}

      {/* ══════════════════════════════════════ */}
      {/* MOBILE LAYOUT — hidden on desktop      */}
      {/* ══════════════════════════════════════ */}
      {isMobile && (
        <div className="bg-white min-h-screen">

          {/* Mobile Breadcrumb */}
          <div className="flex items-center gap-1 px-4 py-2 border-b border-[#f0f0f0]">
            <button className="flex items-center justify-center">
              <ChevronLeft className="w-4 h-4 text-[#333]" strokeWidth={2} />
            </button>
            <div className="flex items-center gap-1 text-[12px] text-[#999]">
              <a href="/" className="text-[#333] no-underline">Trendyol</a>
              <span>›</span>
              <span className="text-[#333]">Mobilya</span>
            </div>
          </div>

          {/* Mobile Category Title */}
          <div className="px-4 pt-3 pb-2 text-center">
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
                className="flex-1 flex items-center justify-center gap-[6px] py-[10px] text-[13px] text-[#333] font-[500]"
                style={{ backgroundColor: '#ffffff' }}
              >
                <ArrowUpDown className="w-[13px] h-[13px] text-[#555]" strokeWidth={2} />
                <span>Önerilen Sıralama</span>
              </button>

              {/* Filtrele button */}
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="flex-1 flex items-center justify-center gap-[6px] py-[10px] text-[13px] text-[#333] font-[500]"
                style={{ backgroundColor: '#ffffff' }}
              >
                <SlidersHorizontal className="w-[13px] h-[13px] text-[#555]" strokeWidth={2} />
                <span>Filtrele <span style={{ color: '#F27A1A', fontWeight: 600 }}>(1)</span></span>
              </button>

            </div>
          </div>


          {/* Mobile Category Pills — horizontal scroll */}
          <div className="flex items-center gap-[8px] overflow-x-auto px-4 py-[10px] scrollbar-hide border-b border-[#f5f5f5]">
            {mobileCategoryPills.map((pill) => (
              <button
                key={pill}
                onClick={() => setActiveCategory(activeCategory === pill ? null : pill)}
                className={`flex items-center gap-[4px] shrink-0 rounded-[16px] px-[12px] py-[5px] text-[12px] font-[500] border transition-all whitespace-nowrap
                ${activeCategory === pill
                    ? 'bg-[#f27a1a] text-white border-[#f27a1a]'
                    : 'bg-white text-[#333] border-[#dbdbdb]'
                  }`}
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
            <>
              <div
                className="fixed inset-0 bg-black/40 z-50"
                onClick={() => setMobileSortOpen(false)}
              />
              <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[16px] z-50 shadow-2xl">
                <div className="w-[40px] h-[4px] bg-[#ddd] rounded-full mx-auto mt-3 mb-4" />
                <p className="text-center text-[14px] font-[700] text-[#333] mb-3">Sıralama</p>
                <div className="divide-y divide-[#f5f5f5]">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setSelectedSort(opt); setMobileSortOpen(false); }}
                      className={`w-full text-left px-5 py-[14px] text-[14px] flex items-center justify-between
                      ${selectedSort === opt ? 'text-[#F27A1A]' : 'text-[#333]'}`}
                    >
                      <span>{opt}</span>
                      {selectedSort === opt && (
                        <svg width="16" height="16" fill="none" stroke="#F27A1A" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
                <div className="h-[env(safe-area-inset-bottom,0px)]" />
              </div>
            </>
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