'use client';

import { useState } from 'react';

interface ProductProps {
  product: {
    id: number;
    image: string;
    brand: string;
    title: string;
    rating: number;
    reviews: number;
    price: number;
    oldPrice: number | null;
    discount: number | null;
    freeCargo: boolean;
    isFavorite: boolean;
    isNew?: boolean;
    badges?: string[];
  };
}

export default function ProductCard({ product }: ProductProps) {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #e9e9e9',
        borderRadius: 8,
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        width: '100%',
      }}
    >
      {/* Image area — fixed 1:1 aspect ratio */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden' }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* Favorite button */}
        <button
          onClick={(e) => { e.stopPropagation(); setIsFavorite(!isFavorite); }}
          style={{
            position: 'absolute', top: 8, right: 8,
            width: 28, height: 28,
            background: '#fff',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
          }}
        >
          <svg
            width="14" height="14"
            fill={isFavorite ? '#F27A1A' : 'none'}
            stroke={isFavorite ? '#F27A1A' : '#aaa'}
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Discount badge */}
        {product.discount && (
          <span style={{
            position: 'absolute', top: 8, left: 8,
            background: '#e53935', color: '#fff',
            fontSize: 11, fontWeight: 700,
            padding: '2px 6px', borderRadius: 4,
          }}>
            %{product.discount}
          </span>
        )}
        {product.isNew && (
          <span style={{
            position: 'absolute', top: product.discount ? 30 : 8, left: 8,
            background: '#F27A1A', color: '#fff',
            fontSize: 11, fontWeight: 700,
            padding: '2px 6px', borderRadius: 4,
          }}>
            YENİ
          </span>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: '10px 10px 12px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
        {/* Brand */}
        <p style={{ fontSize: 11, color: '#999', margin: 0, fontWeight: 500 }}>{product.brand}</p>

        {/* Title — max 2 lines */}
        <p style={{
          fontSize: 12, color: '#333', margin: 0,
          lineHeight: 1.4,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {product.title}
        </p>

        {/* Stars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>
          {[1, 2, 3, 4, 5].map(s => (
            <span key={s} style={{ fontSize: 11, color: s <= product.rating ? '#FFC107' : '#ddd' }}>★</span>
          ))}
          <span style={{ fontSize: 11, color: '#aaa' }}>({product.reviews.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div style={{ marginTop: 4 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: '#F27A1A' }}>
            {product.price.toLocaleString('tr-TR')} TL
          </span>
          {product.oldPrice && (
            <span style={{ fontSize: 12, color: '#aaa', textDecoration: 'line-through', marginLeft: 6 }}>
              {product.oldPrice.toLocaleString('tr-TR')} TL
            </span>
          )}
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 2 }}>
          {product.freeCargo && (
            <span style={{
              fontSize: 11, color: '#2e7d32', background: '#F1F8E9',
              padding: '2px 6px', borderRadius: 4, fontWeight: 500,
            }}>
              Ücretsiz Kargo
            </span>
          )}
          {product.badges?.map((b, i) => (
            <span key={i} style={{
              fontSize: 11, color: '#e65100', background: '#FFF3E0',
              padding: '2px 6px', borderRadius: 4, fontWeight: 500,
            }}>{b}</span>
          ))}
        </div>
      </div>
    </div>
  );
}