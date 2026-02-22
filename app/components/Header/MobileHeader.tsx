'use client';

import { Menu, Search, User, Heart, ShoppingCart } from 'lucide-react';

export default function MobileHeader() {
    return (
        <header className="md:hidden bg-white border-b border-[#ededed] sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 h-[52px]">

                {/* Sol: Hamburger + Logo */}
                <div className="flex items-center gap-[10px]">
                    <button className="flex items-center justify-center w-8 h-8 shrink-0">
                        <Menu className="w-5 h-5 text-[#1d1d1b]" strokeWidth={1.8} />
                    </button>
                    <a href="/">
                        <img
                            src="https://cdn.dsmcdn.com/web/prod/fp/trendyol-logo_1761301016237.svg"
                            alt="Trendyol"
                            className="h-[22px] w-auto object-contain"
                        />
                    </a>
                </div>

                {/* Sağ: İkonlar */}
                <div className="flex items-center gap-[16px] shrink-0">
                    <button>
                        <Search className="w-[19px] h-[19px] text-[#1d1d1b]" strokeWidth={1.8} />
                    </button>
                    <button>
                        <User className="w-[19px] h-[19px] text-[#1d1d1b]" strokeWidth={1.8} />
                    </button>
                    <button>
                        <Heart className="w-[19px] h-[19px] text-[#1d1d1b]" strokeWidth={1.8} />
                    </button>
                    <button className="relative">
                        <ShoppingCart className="w-[19px] h-[19px] text-[#1d1d1b]" strokeWidth={1.8} />
                    </button>
                </div>

            </div>
        </header>
    );
}
