import { useState } from 'react';

const product = {
  title: 'Single Line Portrait Tee',
  material: '100% Organic Cotton, 180gsm',
  price: '$45.00',
  description:
    'A minimalist single-line portrait embroidered on premium organic cotton. Each piece is hand-guided on our industrial embroidery machine, ensuring every curve of the portrait captures the essence of your subject.',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvEBDGQxa6vsFeTwwN9iRs4DDQ25QxDhSxwtAaf0ZKPISZ6FczJvJOFGGVGEz_te1IfApB9JV00Kk476k9Wc6Fzol9YsCXSmme8wh2YptHB3C3coYXi0VMvHgNhGPMqE9mMarhq-NIMtG-cn96biYCi9wJVsnlHxYQtqIt06GAeMaM3o_Wy0rr1MVKM1Ca26jlnh7m_z3T5USgG4m4RqfEYN_ZWng7d-YfoQWLi3FbzMQWnRuDK9pt',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  threadColors: [
    { name: 'Terracotta', color: '#A0522D' },
    { name: 'Forest', color: '#2D5A27' },
    { name: 'Charcoal', color: '#2A2A2A' },
    { name: 'Cream', color: '#F5F1EA' },
    { name: 'Blush', color: '#D4A0A0' },
    { name: 'Navy', color: '#1B2A4A' },
  ],
  gallery: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCvEBDGQxa6vsFeTwwN9iRs4DDQ25QxDhSxwtAaf0ZKPISZ6FczJvJOFGGVGEz_te1IfApB9JV00Kk476k9Wc6Fzol9YsCXSmme8wh2YptHB3C3coYXi0VMvHgNhGPMqE9mMarhq-NIMtG-cn96biYCi9wJVsnlHxYQtqIt06GAeMaM3o_Wy0rr1MVKM1Ca26jlnh7m_z3T5USgG4m4RqfEYN_ZWng7d-YfoQWLi3FbzMQWnRuDK9pt',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCr9hC7vs3-EdAg9qCq6vOaAR95HhGlwV1jRFKZ2rmBAREpPaW4LE8hcszEAlxfS20ORCumWCYOnG4FcU3rtTkdPp9exe90d6epEuVC-OpG91mTrpgsnl2fzRxoYzTVDPVeNNi1nz-75meZCZUUhScJcyEr5C2_WB2cBCLYdSp5lfCWpZTnjPA1X4ukT5F9K6CIwuPrHMK0XDAtsyzt6H4qcwRK2r7RhZJRIk8jFSoKOKLn0Q1lAWB2',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCrrHM54YxYuRaC46NPCbU3TGjROJVmVcv_OlGiCnlsqof8_TQKX-FKFa43xrUTlq1arZPYdcV1BsC6fWAkAtM2t2qwG6uYASocXeuhA7N08d_UFqfNCWuWHbjMouaGTd1m00L51Hi4skD8AWqr3VyLH4fOHqFCLNeJ9LT0FD5u4Sg0K8EZ5b-AkVBw0YfVSsP3QWKcEEcjqd-WPYplbtK1RICZRaP0uFA8qK_Ok2CRoBE5aZHVLy5B',
  ],
};

export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedThread, setSelectedThread] = useState(0);
  const [mainImage, setMainImage] = useState(0);

  return (
    <main className="pt-[120px] pb-20 px-5 md:px-16 max-w-[1280px] mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Images */}
        <div>
          <div className="w-full aspect-[4/5] rounded overflow-hidden bg-surface-container-low fiber-shadow mb-4">
            <img
              className="w-full h-full object-cover"
              src={product.gallery[mainImage]}
              alt={product.title}
            />
          </div>
          <div className="flex gap-3">
            {product.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImage(i)}
                className={`w-20 h-20 rounded overflow-hidden border-2 transition-colors ${
                  mainImage === i ? 'border-primary' : 'border-transparent hover:border-outline-variant'
                }`}
              >
                <img className="w-full h-full object-cover" src={img} alt={`View ${i + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-xs font-semibold text-primary tracking-[0.1em] uppercase mb-2 block">
              Customizable
            </span>
            <h1 className="font-display text-3xl md:text-[32px] font-semibold text-on-background mb-2">
              {product.title}
            </h1>
            <p className="text-base text-on-surface-variant">{product.material}</p>
            <p className="text-2xl text-primary font-semibold mt-2">{product.price}</p>
          </div>

          <p className="text-base text-on-surface-variant leading-relaxed">{product.description}</p>

          {/* Size Selector */}
          <div>
            <h3 className="text-xs font-semibold text-on-background uppercase tracking-[0.1em] mb-3">Size</h3>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded flex items-center justify-center text-sm font-semibold transition-all ${
                    selectedSize === size
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Thread Color Selector */}
          <div>
            <h3 className="text-xs font-semibold text-on-background uppercase tracking-[0.1em] mb-3">Thread Color</h3>
            <div className="flex gap-3">
              {product.threadColors.map((tc, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedThread(i)}
                  aria-label={tc.name}
                  className={`w-10 h-10 rounded-full transition-all ${
                    selectedThread === i ? 'ring-2 ring-primary ring-offset-2 ring-offset-[#fbf9f5]' : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: tc.color }}
                />
              ))}
            </div>
            <p className="text-sm text-on-surface-variant mt-2">
              {product.threadColors[selectedThread].name}
            </p>
          </div>

          {/* Add to Cart */}
          <button className="w-full bg-primary-container text-on-primary px-8 py-4 rounded text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity mt-4">
            Add to Cart — {product.price}
          </button>

          {/* Details */}
          <div className="border-t border-surface-container-high pt-6 space-y-4">
            <div className="flex justify-between text-base">
              <span className="text-on-surface-variant">Shipping</span>
              <span className="text-on-background">Free over $100</span>
            </div>
            <div className="flex justify-between text-base">
              <span className="text-on-surface-variant">Production Time</span>
              <span className="text-on-background">5–7 business days</span>
            </div>
            <div className="flex justify-between text-base">
              <span className="text-on-surface-variant">Returns</span>
              <span className="text-on-background">Custom items are final sale</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
