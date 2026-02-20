import React from 'react';

const categories = [
  "Kadın", "Erkek", "Anne & Çocuk", "Ev & Yaşam",
  "Süpermarket", "Kozmetik", "Ayakkabı & Çanta",
  "Elektronik", "Saat & Aksesuar", "Spor & Outdoor"
];

export default function Navigation() {
  return (
    <ul className="flex items-center gap-[18px] list-none h-[40px] w-full" style={{ margin: 0, padding: 0, listStyle: 'none' }}>

      <li className="category-tab-wrapper group flex items-center gap-[8px] cursor-pointer shrink-0 h-full border-transparent">
        <span
          aria-label="Categories icon"
          className="bg-[#333] group-hover:bg-[#f27a1a] transition-colors"
          style={{
            display: 'inline-block',
            maskImage: 'url("https://cdn.dsmcdn.com/web/prod/fp/categories_1759245431493.svg")',
            WebkitMaskImage: 'url("https://cdn.dsmcdn.com/web/prod/fp/categories_1759245431493.svg")',
            maskSize: 'cover',
            width: '14px',
            height: '14px'
          }}
        ></span>
        <p className="category-tab-text text-[14px] font-[600] text-[#333] group-hover:text-[#f27a1a] whitespace-nowrap transition-colors">Kategoriler</p>
        <div className="bg-[#e53935] rounded-[10px] flex items-center justify-center" style={{ padding: '2px 6px' }}>
          <span className="text-white text-[9px] font-bold leading-none" style={{ color: '#fff', fontWeight: 700 }}>Yeni</span>
        </div>
      </li>

      {categories.map((cat) => (
        <li key={cat} className="h-full flex items-center shrink-0">
          <a
            href="#"
            className={`no-underline text-[14px] font-[600] hover:text-[#f27a1a] h-full flex items-center transition-colors whitespace-nowrap ${cat === "Kadın" ? "text-[#333]" : "text-[#333]"}`}
          >
            {cat}
          </a>
        </li>
      ))}

      <li className="flex items-center gap-[6px] cursor-pointer shrink-0 h-full group">
        <span className="text-[14px] font-[600] text-[#333] group-hover:text-[#f27a1a] whitespace-nowrap transition-colors">Flaş Ürünler</span>
        <div className="bg-[#e53935] rounded-[10px] flex items-center justify-center" style={{ padding: '2px 6px' }}>
          <span className="text-white text-[9px] font-bold leading-none" style={{ color: '#fff', fontWeight: 700 }}>Yeni</span>
        </div>
      </li>

      <li className="flex items-center gap-[6px] cursor-pointer shrink-0 h-full group">
        <span className="text-[14px] font-[600] text-[#333] group-hover:text-[#f27a1a] whitespace-nowrap transition-colors">Çok Satanlar</span>
        <div className="bg-[#e53935] rounded-[10px] flex items-center justify-center" style={{ padding: '2px 6px' }}>
          <span className="text-white text-[9px] font-bold leading-none" style={{ color: '#fff', fontWeight: 700 }}>Yeni</span>
        </div>
      </li>

    </ul>
  );
}