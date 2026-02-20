'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

/* ── Checkbox Item Component (Custom Checkbox) ─────────────────── */
function CheckItem({ name, defaultChecked = false, count }: { name: string; defaultChecked?: boolean; count?: number }) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div
      className="flex items-center gap-[4] pl-[7px] cursor-pointer group mb-[9px] last:mb-0"
      onClick={() => setChecked(!checked)}
    >
      {/* Custom Checkbox Box */}
      <div
        className={`w-[16px] h-[16px]  flex items-center justify-center border rounded-[3px] transition-colors ${checked ? 'bg-[#f27a1a] border-[#f27a1a]' : 'bg-white border-[#dbdbdb] group-hover:border-[#f27a1a]'
          }`}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path
              d="M1.5 4L3.5 6L8.5 1.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {/* Label */}
      <span className={`text-[13px] transition-colors ${checked ? 'text-[#333] font-medium' : 'text-gray-500'}`}>
        {name}
        {count !== undefined && <span className="text-[#999] ml-1">({count})</span>}
      </span>
    </div>
  );
}

/* ── Filter Accordion Section ──────────────────────────────────── */
function FilterSection({
  title,
  children,
  defaultOpen = false,
  extraHeaderContent,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  extraHeaderContent?: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid #e9e9e9' }}>
      <button
        className="w-full flex items-center justify-between py-[14px]"
        style={{
          backgroundColor: '#fff',
          cursor: 'pointer',
          border: 'none',
          borderRadius: 0,
        }}
        onClick={() => setOpen(!open)}
      >
        <span style={{ fontSize: 14, fontWeight: 700, color: '#333' }}>{title}</span>
        <div className="flex items-center gap-2">
          {extraHeaderContent}
          <span style={{ color: '#f27a1a' }}>{open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
        </div>
      </button>
      {open && (
        <div className="pb-5 pt-1">
          {children}
        </div>
      )}
    </div>
  );
}

/* ── Main Sidebar ──────────────────────────────────────────────── */
export default function FilterSidebar() {
  return (
    <aside
      className="block flex-shrink-0 bg-white sticky self-start"
      style={{
        width: 220,
        top: 20,
        paddingLeft: '20px',
        maxHeight: 'calc(100vh - 40px)',
        overflowY: 'auto',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE/Edge
      }}
    >
      <style jsx global>{`
        aside::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* KATEGORI */}
      <FilterSection title="Kategori" defaultOpen>
        <div>
          <CheckItem name="Mobilya" defaultChecked />
          <CheckItem name="Mutfak & Banyo Mobilyası" />
          <CheckItem name="Çalışma Odası" />
          <CheckItem name="Antre & Hol" />
          <CheckItem name="Salon & Oturma Odası" />
          <CheckItem name="Yatak Odası" />
          <CheckItem name="Masa" />
          <CheckItem name="Bahçe Balkon Mobilyası" />
          <CheckItem name="Bebek Çocuk Odası" />
        </div>
      </FilterSection>

      {/* MARKA */}
      <FilterSection title="Marka" defaultOpen>
        <div className="mb-2 relative">
          <input
            type="text"
            placeholder="Marka Ara"
            className="w-full border border-[#e6e6e6] rounded-[4px] text-[13px] px-2 py-1.5 pr-7 focus:outline-none focus:border-[#f27a1a]"
          />
          <Search className="absolute right-2 top-1.5 text-[#999]" size={14} />
        </div>
        <h4 className="text-[12px] font-bold text-[#333] mb-2">Popüler Markalar</h4>
        <CheckItem name="IKEA" />
        <CheckItem name="Vivense" />
        <CheckItem name="Yataş" />
        <CheckItem name="Modalife" />
        <CheckItem name="MOBİLİQUE" />
        <CheckItem name="Mygusi" />
        <div className="mt-2 text-[12px] font-bold text-[#f27a1a] cursor-pointer">Tüm Markalar</div>
      </FilterSection>

      {/* AVANTAJLI ÜRÜNLER */}
      <FilterSection title="Avantajlı Ürünler" defaultOpen>
        <CheckItem name="Süper Avantajlı Ürün" />
        <CheckItem name="Çok Avantajlı Ürün" />
        <CheckItem name="Avantajlı Ürün" />
      </FilterSection>

      {/* ÜRÜN PUANI */}
      <FilterSection title="Ürün Puanı">
        <CheckItem name="4 Yıldız ve Üzeri" />
        <CheckItem name="3 Yıldız ve Üzeri" />
        <CheckItem name="2 Yıldız ve Üzeri" />
        <CheckItem name="1 Yıldız ve Üzeri" />
      </FilterSection>

      {/* YÜKSEKLİK */}
      <FilterSection title="Yükseklik">
        <CheckItem name="0 - 50 cm" />
        <CheckItem name="50 - 100 cm" />
        <CheckItem name="100+ cm" />
      </FilterSection>

      {/* ÖLÇÜ */}
      <FilterSection title="Ölçü">
        <CheckItem name="Standart" />
        <CheckItem name="Büyük" />
      </FilterSection>

      {/* GENİŞLİK */}
      <FilterSection title="Genişlik">
        <CheckItem name="0 - 60 cm" />
        <CheckItem name="60 - 120 cm" />
      </FilterSection>

      {/* YÜKSEKLİK (Duplicate in request, adding content anyway) */}
      {/* Assuming user meant maybe weight or repeating for different context, omitting duplicate strictly or adding placeholder */}

      {/* DERİNLİK */}
      <FilterSection title="Derinlik">
        <CheckItem name="0 - 30 cm" />
        <CheckItem name="30 - 60 cm" />
      </FilterSection>

      {/* MATERYAL */}
      <FilterSection title="Materyal">
        <CheckItem name="Ahşap" />
        <CheckItem name="Metal" />
        <CheckItem name="MDF" />
        <CheckItem name="Suntalam" />
      </FilterSection>

      {/* FİYAT (Accordion replaces Input Range) */}
      <FilterSection title="Fiyat">
        <CheckItem name="0 TL - 500 TL" />
        <CheckItem name="500 TL - 1000 TL" />
        <CheckItem name="1000 TL - 5000 TL" />
        <CheckItem name="5000 TL üzeri" />
        <div className="flex items-center gap-1 mt-2">
          <input type="text" placeholder="En Az" className="w-[80px] border border-[#e6e6e6] rounded-[4px] px-2 py-1 text-[12px]" />
          <span className="text-gray-400">-</span>
          <input type="text" placeholder="En Çok" className="w-[80px] border border-[#e6e6e6] rounded-[4px] px-2 py-1 text-[12px]" />
          <button className="bg-[#f27a1a] p-1 rounded-[4px]">
            <Search size={12} color="white" />
          </button>
        </div>
      </FilterSection>

      {/* RENK */}
      <FilterSection title="Renk">
        <div className="flex flex-wrap gap-2">
          <div className="w-6 h-6 rounded-full border border-gray-200 bg-white" title="Beyaz"></div>
          <div className="w-6 h-6 rounded-full border border-gray-200 bg-black" title="Siyah"></div>
          <div className="w-6 h-6 rounded-full border border-gray-200 bg-[#8B4513]" title="Kahverengi"></div>
          <div className="w-6 h-6 rounded-full border border-gray-200 bg-[#C0C0C0]" title="Gri"></div>
          <div className="w-6 h-6 rounded-full border border-gray-200 bg-[#f5f5dc]" title="Bej"></div>
        </div>
      </FilterSection>

      {/* SATICI TİPİ */}
      <FilterSection title="Satıcı Tipi" extraHeaderContent={<span className="text-[10px] text-[#999] underline cursor-pointer mr-2">Satıcı Tipi Nedir?</span>}>
        <CheckItem name="Onaylı Satıcı" />
        <CheckItem name="Başarılı Satıcı" />
        <CheckItem name="Yetkili Satıcı" />
      </FilterSection>

      {/* FENOMENLERİN SEÇTİKLERİ (Toggle) */}
      <div className="flex items-center justify-between py-3 border-b border-[#e9e9e9]">
        <span className="text-[13px] font-bold text-[#333]">Fenomenlerin Seçtikleri</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#f27a1a]"></div>
        </label>
      </div>

      {/* TEMA / STİL */}
      <FilterSection title="Tema / Stil">
        <CheckItem name="Modern" />
        <CheckItem name="Klasik" />
        <CheckItem name="Endüstriyel" />
      </FilterSection>

      {/* KAPAK SAYISI */}
      <FilterSection title="Kapak Sayısı">
        <CheckItem name="1 Kapaklı" />
        <CheckItem name="2 Kapaklı" />
        <CheckItem name="3 Kapaklı" />
      </FilterSection>

      {/* RAF SAYISI */}
      <FilterSection title="Raf Sayısı">
        <CheckItem name="1 Raflı" />
        <CheckItem name="2 Raflı" />
        <CheckItem name="3 Raflı" />
      </FilterSection>

      {/* FİYAT GEÇMİŞİ */}
      <FilterSection title="Fiyat Geçmişi">
        <CheckItem name="Son 30 günün en düşüğü" />
      </FilterSection>

    </aside>
  );
}