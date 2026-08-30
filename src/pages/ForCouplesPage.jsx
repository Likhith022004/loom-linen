import { Link } from 'react-router-dom';

const heroImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXnuC_cPhu7tuHLf1TYz6zLqtnK_RIqN11bUeWJ6YWZti713aJNcbx5QQlK12xckeRD8oO_sydV_ANVehuhQMSVDjuryBSzCqWaru9rc0WgCChU9IrhkFuhZ6BXeqWR4DOa70C7ZpmLG4z_CLxLzhwhrjlFr66k9IZ9m68x6RJCN3sputQhTFarLBuF579Wktu_L9aMSXQSkuXcNF7BlAH8XdtOqr9tsUfAlIkF5YifoEB9A9iOa5i';

const coupleProducts = [
  {
    title: 'The Anniversary Hoodie Set',
    desc: 'Matching hoodies with your anniversary date stitched in elegant script.',
    price: '$140',
    image: heroImage,
  },
  {
    title: 'His & Hers Botanical Tees',
    desc: 'Complementary botanical embroidery — one for him, one for her.',
    price: '$95',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr9hC7vs3-EdAg9qCq6vOaAR95HhGlwV1jRFKZ2rmBAREpPaW4LE8hcszEAlxfS20ORCumWCYOnG4FcU3rtTkdPp9exe90d6epEuVC-OpG91mTrpgsnl2fzRxoYzTVDPVeNNi1nz-75meZCZUUhScJcyEr5C2_WB2cBCLYdSp5lfCWpZTnjPA1X4ukT5F9K6CIwuPrHMK0XDAtsyzt6H4qcwRK2r7RhZJRIk8jFSoKOKLn0Q1lAWB2',
  },
  {
    title: 'Matching Line Art Totes',
    desc: 'Two tote bags with continuous line portraits — a pair that tells your story.',
    price: '$65',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsZYFQQtv8AqYH3p6CfnIlmvexl5Ez_PxJ4aqzYxRKkDAyUL79nBrsbFNfO-e9AMHF9MJ395jTFSB-mjfURSzxYGPpbB48-A8oYYIXfvu8bAgbmLExNI-KIvK1-swWm3o1i1KZXxT7g1LOXIjiysW_WsA577Yc71MzunBXHAFUbsa8eji-VyIYe8qw4uUT3WYCAM40BhelWuz2WxxJQy6mf-Zlyri6-ZRBpBwtqXJyrALuWDMEuaqX',
  },
];

export default function ForCouplesPage() {
  return (
    <main className="pt-[120px] pb-20">
      {/* Hero */}
      <section className="relative px-5 md:px-16 py-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold text-primary tracking-[0.1em] uppercase mb-4 block">
              For Couples
            </span>
            <h1 className="font-display text-3xl md:text-[48px] leading-[1.1] font-bold text-on-background mb-6">
              Better Together.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-md mb-8 leading-relaxed">
              Celebrate your connection with matching custom embroidery.
              From anniversaries to just-because, create something meaningful you both can wear.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-primary-container text-on-primary px-8 py-4 rounded text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Shop Couples
            </Link>
          </div>
          <div className="relative h-[50vh] md:h-[60vh] rounded overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={heroImage}
              alt="Couple wearing matching custom embroidered hoodies"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-5 md:px-16 py-20 max-w-[1280px] mx-auto">
        <h2 className="font-display text-2xl md:text-[32px] leading-[1.3] font-semibold text-on-background mb-12 text-center">
          The Couples Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coupleProducts.map((product, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden rounded bg-surface-container-low fiber-shadow">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src={product.image}
                  alt={product.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold">View Details →</span>
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-display text-xl font-semibold text-on-background mb-1">{product.title}</h3>
                <p className="text-base text-on-surface-variant mb-2">{product.desc}</p>
                <p className="text-lg text-primary">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-16 py-20 max-w-[1280px] mx-auto">
        <div className="bg-surface-container-low rounded-xl p-12 text-center">
          <h2 className="font-display text-2xl md:text-[32px] font-semibold text-on-background mb-4">
            Can't find the perfect set?
          </h2>
          <p className="text-base text-on-surface-variant mb-8 max-w-lg mx-auto">
            We design completely custom couples pieces. Share your story and we'll create something unique for you both.
          </p>
          <Link
            to="/custom"
            className="inline-flex items-center justify-center bg-transparent border border-primary-container text-primary-container px-8 py-4 rounded text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Start Custom Order
          </Link>
        </div>
      </section>
    </main>
  );
}
