'use client';

import { useState } from 'react';

export default function DesktopTopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Önerilen Sıralama');

  const sortOptions = [
    'Önerilen Sıralama',
    'En Çok Satanlar',
    'En Yeniler',
    'En Düşük Fiyat',
    'En Yüksek Fiyat',
    'En Çok Değerlendirilen',
    'En Yüksek Puan',
  ];

  return (
    <div className="hidden md:flex bg-white rounded-lg border border-gray-200 px-4 py-2.5 mb-3 items-center justify-between gap-3">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm text-gray-600">
          <span className="font-bold text-gray-900">14.823</span> ürün listelendi
        </span>
        
        {/* Active filter tags */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="bg-orange-50 text-orange-500 border border-orange-200 rounded-xl px-2.5 py-1 text-xs flex items-center gap-1">
            Yatak Odası
            <button className="hover:text-orange-700">×</button>
          </div>
          <div className="bg-orange-50 text-orange-500 border border-orange-200 rounded-xl px-2.5 py-1 text-xs flex items-center gap-1">
            Mondi
            <button className="hover:text-orange-700">×</button>
          </div>
        </div>
      </div>

      {/* Sort dropdown */}
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm text-gray-700 border border-gray-300 rounded-lg px-3 py-2 hover:border-orange-400 transition-colors"
        >
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"/>
          </svg>
          <span>{selectedSort}</span>
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-[200px] py-1">
            {sortOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedSort(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-orange-50 hover:text-orange-600 ${
                  selectedSort === option ? 'text-orange-500 font-semibold' : 'text-gray-700'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}