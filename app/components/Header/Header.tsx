'use client';

import SearchBar from './SearchBar';
import Navigation from './Navigation';
import MobileHeader from './MobileHeader';
import { useIsMobile } from '../../hooks/useIsMobile';
import { User, Heart, ShoppingCart } from 'lucide-react';

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* MOBİL HEADER */}
      {isMobile && <MobileHeader />}

      {/* DESKTOP HEADER */}
      {!isMobile && (
        <header className="w-full font-sans">



          {/* ANA HEADER + NAVİGASYON */}
          <div className="bg-white w-full border-b border-[#ededed]" style={{ boxShadow: 'none' }}>
            <div className="max-w-[1440px] mx-auto px-5">

              {/* LOGO SATIRI */}
              <div className="flex items-center pt-[20px] pb-[10px]">

                {/* LOGO */}
                <a href="/" className="block shrink-0">
                  <img
                    src="https://cdn.dsmcdn.com/web/prod/fp/trendyol-logo_1761301016237.svg"
                    alt="Trendyol"
                    className="h-[34px] w-auto object-contain"
                  />
                </a>

                {/* SEARCH */}
                <div className="flex-1 max-w-[794px]" style={{ marginLeft: '64px' }}>
                  <SearchBar />
                </div>

                {/* ICONS */}
                <div className="flex items-center ml-auto shrink-0" style={{ gap: '28px' }}>

                  <div className="flex items-center gap-[6px] cursor-pointer group">
                    <User className="w-[20px] h-[20px] text-[#1d1d1b] group-hover:text-[#f27a1a] transition-colors" strokeWidth={1.5} />
                    <span className="text-[13px] font-[600] text-[#1d1d1b] group-hover:text-[#f27a1a] transition-colors">
                      Hesabım
                    </span>
                  </div>

                  <div className="flex items-center gap-[6px] cursor-pointer group">
                    <Heart className="w-[20px] h-[20px] text-[#1d1d1b] group-hover:text-[#f27a1a] transition-colors" strokeWidth={1.5} />
                    <span className="text-[13px] font-[600] text-[#1d1d1b] group-hover:text-[#f27a1a] transition-colors">
                      Favorilerim
                    </span>
                  </div>

                  <div className="flex items-center gap-[6px] cursor-pointer group relative">
                    <ShoppingCart className="w-[20px] h-[20px] text-[#1d1d1b] group-hover:text-[#f27a1a] transition-colors" strokeWidth={1.5} />
                    <span className="text-[13px] font-[600] text-[#1d1d1b] group-hover:text-[#f27a1a] transition-colors">
                      Sepetim
                    </span>
                  </div>

                </div>
              </div>

              {/* NAVİGASYON */}
              <Navigation />

            </div>
          </div>

        </header>
      )}
    </>
  );
}
