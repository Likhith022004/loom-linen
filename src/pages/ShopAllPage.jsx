const products = [
  {
    id: 1,
    title: 'Single Line Portrait',
    material: 'Organic Cotton Tee',
    price: '$45.00',
    tag: 'Customizable',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvEBDGQxa6vsFeTwwN9iRs4DDQ25QxDhSxwtAaf0ZKPISZ6FczJvJOFGGVGEz_te1IfApB9JV00Kk476k9Wc6Fzol9YsCXSmme8wh2YptHB3C3coYXi0VMvHgNhGPMqE9mMarhq-NIMtG-cn96biYCi9wJVsnlHxYQtqIt06GAeMaM3o_Wy0rr1MVKM1Ca26jlnh7m_z3T5USgG4m4RqfEYN_ZWng7d-YfoQWLi3FbzMQWnRuDK9pt',
  },
  {
    id: 2,
    title: 'Botanical Sprig',
    material: 'Heavyweight Tee',
    price: '$52.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr9hC7vs3-EdAg9qCq6vOaAR95HhGlwV1jRFKZ2rmBAREpPaW4LE8hcszEAlxfS20ORCumWCYOnG4FcU3rtTkdPp9exe90d6epEuVC-OpG91mTrpgsnl2fzRxoYzTVDPVeNNi1nz-75meZCZUUhScJcyEr5C2_WB2cBCLYdSp5lfCWpZTnjPA1X4ukT5F9K6CIwuPrHMK0XDAtsyzt6H4qcwRK2r7RhZJRIk8jFSoKOKLn0Q1lAWB2',
  },
  {
    id: 3,
    title: 'Abstract Hem Detail',
    material: 'Linen Blend Tee',
    price: '$48.00',
    tag: 'In Stock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrrHM54YxYuRaC46NPCbU3TGjROJVmVcv_OlGiCnlsqof8_TQKX-FKFa43xrUTlq1arZPYdcV1BsC6fWAkAtM2t2qwG6uYASocXeuhA7N08d_UFqfNCWuWHbjMouaGTd1m00L51Hi4skD8AWqr3VyLH4fOHqFCLNeJ9LT0FD5u4Sg0K8EZ5b-AkVBw0YfVSsP3QWKcEEcjqd-WPYplbtK1RICZRaP0uFA8qK_Ok2CRoBE5aZHVLy5B',
  },
  {
    id: 4,
    title: 'Monogram Stars',
    material: 'Signature Cotton',
    price: '$50.00',
    tag: 'Customizable',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSPo_2Fn4NtGHesqL4NoGGZpnu0gzrdcqdgyewGJ4lirfQrx7EU8RlpjZmfB3vM0NRkjAJXPw1SvSJ_Z-077HeoO0nRPnxzdJIPAKrgvxHFoVoNLsLB7L-pbwSuzl3KI49aoyCcWzi6jcr5f5i89ph2Yq2hv0_yoJHCjLn09ggXp905OIgsflKOhbKg14S3zpRSPaf8brpb-SaWjDDdg5YxNa7fshIfEJ8WYT4OeDbWUigTjYsafUm',
  },
];

const styles = ['Minimal', 'Floral', 'Abstract'];
const colors = [
  { label: 'White', bg: 'bg-white', ring: '' },
  { label: 'Oatmeal', bg: 'bg-[#E5E0D8]', ring: '' },
  { label: 'Charcoal', bg: 'bg-[#4A5568]', ring: '' },
  { label: 'Terracotta', bg: 'bg-[#9C4221]', ring: 'ring-2 ring-primary ring-offset-2 ring-offset-[#fbf9f5]' },
];

export default function ShopAllPage() {
  return (
    <main className="flex-grow pt-[120px] pb-20 px-5 md:px-16 max-w-[1280px] mx-auto w-full">
      {/* Header */}
      <header className="mb-20 text-center max-w-2xl mx-auto">
        <h1 className="font-display text-3xl md:text-[48px] font-bold text-primary mb-4">For Everyone</h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          A curated selection of custom embroidery designed for everyday elegance.
          Minimalist details with a premium feel.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 shrink-0 sticky top-[140px] mb-8 md:mb-0 space-y-8">
          {/* Design Style */}
          <div>
            <h3 className="font-display text-xl font-semibold text-on-background mb-4 border-b border-outline-variant pb-2">
              Design Style
            </h3>
            <ul className="space-y-3 text-base text-on-surface-variant">
              {styles.map((s) => (
                <li key={s}>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 bg-transparent cursor-pointer"
                    />
                    <span className="group-hover:text-primary transition-colors">{s}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Color */}
          <div>
            <h3 className="font-display text-xl font-semibold text-on-background mb-4 border-b border-outline-variant pb-2">
              Color
            </h3>
            <div className="flex flex-wrap gap-3">
              {colors.map((c) => (
                <button
                  key={c.label}
                  aria-label={c.label}
                  className={`w-8 h-8 rounded-full ${c.bg} border border-outline-variant hover:border-primary transition-colors ${c.ring}`}
                />
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
          {products.map((product) => (
            <article key={product.id} className="group cursor-pointer">
              <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden rounded bg-surface-container-low fiber-shadow">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src={product.image}
                  alt={product.title}
                />
                {product.tag && (
                  <div className="absolute top-3 left-3 bg-surface-container-low text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold">
                    {product.tag}
                  </div>
                )}
              </div>
              <div className="px-2">
                <h2 className="font-display text-xl font-semibold text-on-background mb-1">{product.title}</h2>
                <p className="text-base text-on-surface-variant mb-2">{product.material}</p>
                <p className="text-lg text-primary">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
