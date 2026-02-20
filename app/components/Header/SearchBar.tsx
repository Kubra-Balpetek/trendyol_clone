import React from 'react';

export default function SearchBar() {
  return (
    <div className="suggestion-placeholder-wrapper relative flex-1">
      {/* Trendyol ana kapsayıcı: h-[42px] ve rounded-[6px] kritik */}
      <button 
        className="suggestion-placeholder flex items-center justify-between w-full bg-[#f3f3f3] h-[42px] pl-[20px]  rounded-[6px] border border-transparent focus-within:bg-white focus-within:border-[#F27A1A] hover:border-[#F27A1A] transition-all group"
        data-testid="suggestion-placeholder"
      >
        <div className="flex items-center flex-1 overflow-hidden">
          {/* Sol taraftaki büyüteç ikonu: Trendyol'da genellikle 18px-20px arasıdır */}
          <img 
            src="https://cdn.dsmcdn.com/sfint/prod/fp/search_1738581746658.svg" 
            alt="Search icon"
            className="w-[18px] h-[18px] mr-[12px] shrink-0"
          />
          
          {/* Placeholder metni: font-size 14px ve rengi tam olarak #999 */}
          <span 
            className="text-[#999] text-[14px] font-normal whitespace-nowrap overflow-hidden text-ellipsis"
          >
            ürün, kategori veya marka ara
          </span>
        </div>


      </button>

      {/* Suggestion modalı açıldığında burası kullanılır */}
      <div className="single-suggestion-wrapper"></div>
    </div>
  );
}