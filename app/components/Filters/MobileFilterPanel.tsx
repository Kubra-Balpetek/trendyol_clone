'use client';

import { X, ChevronRight } from 'lucide-react';

const filterCategories = [
    'Avantajlı Ürünler',
    'Kategori',
    'Marka',
    'Ürün Puanı',
    'Yükseklik',
    'Ölçü',
    'Genişlik',
    'Derinlik',
    'Materyal',
    'Renk',
    'Fiyat',
    'Satıcı Tipi',
    'Tema / Stil',
    'Kapak Sayısı',
    'Raf Sayısı',
    'Fiyat Geçmişi',
];

interface MobileFilterPanelProps {
    onClose: () => void;
}

export default function MobileFilterPanel({ onClose }: MobileFilterPanelProps) {
    return (
        /* Tam ekran beyaz overlay */
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 9999,
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: 20, /* sol boşluk — tamamen beyaz */
            }}
        >
            {/* ── Header ── */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 52,
                    paddingRight: 16,
                    borderBottom: '1px solid #ededed',
                    backgroundColor: '#ffffff',
                }}
            >
                {/* Sade X — kutu/border yok */}
                <button onClick={onClose} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                    <X style={{ width: 20, height: 20, color: '#333' }} strokeWidth={2} />
                </button>

                <span style={{ fontSize: 16, fontWeight: 700, color: '#1d1d1b' }}>Filtrele</span>

                {/* Sağ boşluk — başlığı ortala */}
                <div style={{ width: 20 }} />
            </div>

            {/* ── Scrollable body ── */}
            <div style={{ flex: 1, overflowY: 'auto', backgroundColor: '#ffffff' }}>

                {/* Seçilen Filtreler */}
                <div style={{ padding: '14px 16px 12px 0', borderBottom: '1px solid #ededed' }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#333', marginBottom: 10 }}>
                        Seçilen Filtreler
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {/* Chip — sadece border, beyaz bg */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 4,
                                borderRadius: 20,
                                padding: '5px 10px 5px 12px',
                                border: '1px solid #d0d0d0',
                                backgroundColor: '#ffffff',
                            }}
                        >
                            <span style={{ fontSize: 13, color: '#333' }}>Mobilya</span>
                            {/* X — kutu yok, direkt beyaz bg üstünde */}
                            <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                <X style={{ width: 12, height: 12, color: '#666' }} strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filtre kategorileri */}
                <div>
                    {filterCategories.map((cat) => (
                        <button
                            key={cat}
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                height: 52,
                                paddingRight: 16,
                                backgroundColor: '#ffffff',
                                borderBottom: '1px solid #f0f0f0',
                                cursor: 'pointer',
                                border: 'none',
                                borderBottomWidth: 1,
                                borderBottomStyle: 'solid',
                                borderBottomColor: '#f0f0f0',
                                textAlign: 'left',
                            }}
                        >
                            <span style={{ fontSize: 14, color: '#333' }}>{cat}</span>
                            <ChevronRight style={{ width: 14, height: 14, color: '#F27A1A' }} strokeWidth={2.5} />
                        </button>
                    ))}
                </div>

            </div>

            {/* ── Sticky alt buton ── */}
            <div style={{ padding: '12px 16px 12px 0', borderTop: '1px solid #ededed', backgroundColor: '#ffffff' }}>
                <button
                    onClick={onClose}
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                        padding: '14px 0',
                        backgroundColor: '#F27A1A',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    <span style={{ fontSize: 15, fontWeight: 700, color: '#ffffff' }}>
                        Tüm Sonuçları Listele (100000)
                    </span>
                </button>
            </div>
        </div>
    );
}
