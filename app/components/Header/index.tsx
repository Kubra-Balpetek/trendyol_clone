import { Search, User, Heart, ShoppingCart } from "lucide-react"; // lucide-react kütüphanesini kurmanı öneririm: npm install lucide-react

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Üst Küçük Bar (Yardım vs.) */}
      <div className="hidden md:block bg-[#fafafa] border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto flex justify-end gap-6 py-2 text-[11px] text-gray-500">
          <span className="cursor-pointer hover:text-trendyol">İndirim Kuponlarım</span>
          <span className="cursor-pointer hover:text-trendyol">Trendyol'da Satış Yap</span>
          <span className="cursor-pointer hover:text-trendyol">Hakkımızda</span>
          <span className="cursor-pointer hover:text-trendyol">Yardım & Destek</span>
        </div>
      </div>

      {/* Ana Header */}
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="text-3xl font-black tracking-tighter text-black cursor-pointer">
          trendyol
        </div>

        {/* Arama Çubuğu */}
        <div className="flex-1 relative max-w-[600px] hidden md:block">
          <input
            type="text"
            placeholder="Ürün, kategori veya marka ara"
            className="w-full bg-[#f3f3f3] py-2.5 px-4 pr-10 rounded-md text-sm outline-none focus:ring-1 focus:ring-trendyol transition-all"
          />
          <Search className="absolute right-3 top-2.5 text-trendyol w-5 h-5 cursor-pointer" />
        </div>

        {/* Sağ İkonlar */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 group cursor-pointer">
            <User className="w-5 h-5 group-hover:text-trendyol transition-colors" />
            <span className="text-[12px] font-semibold group-hover:text-trendyol">Hesabım</span>
          </div>
          <div className="flex items-center gap-1 group cursor-pointer">
            <Heart className="w-5 h-5 group-hover:text-trendyol transition-colors" />
            <span className="text-[12px] font-semibold group-hover:text-trendyol">Favorilerim</span>
          </div>
          <div className="flex items-center gap-1 group cursor-pointer relative">
            <ShoppingCart className="w-5 h-5 group-hover:text-trendyol transition-colors" />
            <span className="text-[12px] font-semibold group-hover:text-trendyol">Sepetim</span>
            <span className="absolute -top-2 -right-2 bg-trendyol text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">1</span>
          </div>
        </div>
      </div>
    </header>
  );
}