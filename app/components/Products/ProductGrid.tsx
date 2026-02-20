import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
    brand: 'Bellona',
    title: 'Bellona Venüs 3+3+1 Koltuk Takımı Gri Renk Modern Tasarım',
    rating: 5,
    reviews: 1247,
    price: 8499,
    oldPrice: 12499,
    discount: 32,
    freeCargo: true,
    isFavorite: false,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=400&fit=crop',
    brand: 'Mondi',
    title: 'Mondi İstanbul Yatak Odası Takımı 6 Parça Ceviz',
    rating: 4,
    reviews: 892,
    price: 24999,
    oldPrice: null,
    discount: null,
    freeCargo: true,
    isFavorite: false,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop',
    brand: 'İstikbal',
    title: 'İstikbal Sandalye Nordic Tasarım Ahşap Ayak 2\'li Set',
    rating: 5,
    reviews: 2156,
    price: 2349,
    oldPrice: 2949,
    discount: 20,
    freeCargo: true,
    isFavorite: true,
    badges: ['Kampanyalı'],
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=400&fit=crop',
    brand: 'Çilek',
    title: 'Çilek Genç Odası Takımı Pembe Beyaz Ranza Raf Masa Seti',
    rating: 4,
    reviews: 567,
    price: 18750,
    oldPrice: null,
    discount: null,
    freeCargo: true,
    isFavorite: false,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=400&h=400&fit=crop',
    brand: 'Mondi',
    title: 'Mondi Çalışma Masası Beyaz MDF Bilgisayar Masası',
    rating: 5,
    reviews: 3421,
    price: 4299,
    oldPrice: null,
    discount: null,
    freeCargo: true,
    isFavorite: false,
    isNew: true,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    brand: 'İstikbal',
    title: 'İstikbal Lara Köşe Koltuk Takımı L Şekli Geniş Oturma',
    rating: 4,
    reviews: 1089,
    price: 14999,
    oldPrice: 27499,
    discount: 45,
    freeCargo: true,
    isFavorite: false,
    badges: ['Kampanyalı'],
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=400&h=400&fit=crop',
    brand: 'Bellona',
    title: 'Bellona Kitaplık Ahşap Raf Sistemi 5 Katlı Beyaz Renk',
    rating: 5,
    reviews: 784,
    price: 1849,
    oldPrice: null,
    discount: null,
    freeCargo: true,
    isFavorite: false,
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&h=400&fit=crop',
    brand: 'Mondi',
    title: 'Mondi Yemek Masası Takımı 6 Kişilik Açılır Masa ve Sandalyeler',
    rating: 4,
    reviews: 423,
    price: 12499,
    oldPrice: 14699,
    discount: 15,
    freeCargo: true,
    isFavorite: false,
  },
];

export default function ProductGrid() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        width: '100%',
        minWidth: 0,
      }}
    >
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}