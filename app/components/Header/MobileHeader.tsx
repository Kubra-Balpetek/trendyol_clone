'use client';

import { Menu, Search, User, Heart, ShoppingCart } from 'lucide-react';

export default function MobileHeader() {
    return (
        <header className="md:hidden bg-white border-b border-[#ededed] sticky top-0 z-50">
            <div className="flex items-center h-[52px]" style={{ padding: '0 12px', gap: 0 }}>

                {/* Sol: Hamburger + Logo */}
                <div className="flex items-center gap-[10px] flex-1 min-w-0">
                    <button className="shrink-0" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        <Menu className="w-5 h-5 text-[#1d1d1b]" strokeWidth={1.8} />
                    </button>
                    <a href="/" className="shrink-0">
                        <img
                            src="https://cdn.dsmcdn.com/web/prod/fp/trendyol-logo_1761301016237.svg"
                            alt="Trendyol"
                            style={{ height: 20, width: 'auto', objectFit: 'contain', maxWidth: 100, display: 'block' }}
                        />
                    </a>
                </div>

                {/* Sağ: İkonlar */}
                <div className="flex items-center shrink-0" style={{ gap: 10 }}>
                    <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        <Search className="w-[19px] h-[19px] text-[#1d1d1b]" strokeWidth={1.8} />
                    </button>
                    <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        <User className="w-[19px] h-[19px] text-[#1d1d1b]" strokeWidth={1.8} />
                    </button>
                    <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        <Heart className="w-[19px] h-[19px] text-[#1d1d1b]" strokeWidth={1.8} />
                    </button>
                    <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        <ShoppingCart className="w-[19px] h-[19px] text-[#1d1d1b]" strokeWidth={1.8} />
                    </button>
                </div>

            </div>
        </header>
    );
}
