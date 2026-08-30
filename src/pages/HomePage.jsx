import { Link } from 'react-router-dom';

const heroImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuChsBAIlAScwdxJQr2EJFxeWQ-3Wj_pujOhtEI9kyClE2fJn9BxiS5DbJfQJTDhPSiw5zXiF6T3BWC9_B91nzv7yNpxVxqqIgW2tocruraf-nYQjjQDdLQZJZykVWbvBafALpPKQsjg2wzrANKPiNBpyVrp2n0D446g_6UMmqN1oj883v9ajVgQYEs8c72H66rjlFFNRYg-AcS7RzkZhiRj2ZA3-T9IwTGBqeRP7YtUM6TiCQNl8Ejw';

const newArrivals = [
  {
    title: 'The Anniversary Hoodie Set',
    price: '$140',
    tag: 'Couples Set',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXnuC_cPhu7tuHLf1TYz6zLqtnK_RIqN11bUeWJ6YWZti713aJNcbx5QQlK12xckeRD8oO_sydV_ANVehuhQMSVDjuryBSzCqWaru9rc0WgCChU9IrhkFuhZ6BXeqWR4DOa70C7ZpmLG4z_CLxLzhwhrjlFr66k9IZ9m68x6RJCN3sputQhTFarLBuF579Wktu_L9aMSXQSkuXcNF7BlAH8XdtOqr9tsUfAlIkF5YifoEB9A9iOa5i',
    span: 'md:col-span-8',
  },
  {
    title: 'Custom Pet Portrait',
    price: '$65',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrIElARin_h3WfC4YzdPEgGEyHzkFzVS2FQ1ikiMNvfGgpkBQbs632M3FEW4UcsX-Lix2Iqd5BbPYYoRiu_3NqUO7qr0hr3eeR1b2FKwq2N2EpD1WtlJ2SA8Gxy_4cigPD6wjPiuyG5vYfbhD3OpkW4GYjjuLg_OmXtN1CL1Z0PWC88LUvg7g5knSoEjJR5dfDCpTQgkRjSGHd79muAYxgwbRJNuAIGrd7KTdZVUtxy1yGG8hz5p_2',
    span: 'md:col-span-4',
  },
  {
    title: 'Line Art Canvas Tote',
    price: '$35',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsZYFQQtv8AqYH3p6CfnIlmvexl5Ez_PxJ4aqzYxRKkDAyUL79nBrsbFNfO-e9AMHF9MJ395jTFSB-mjfURSzxYGPpbB48-A8oYYIXfvu8bAgbmLExNI-KIvK1-swWm3o1i1KZXxT7g1LOXIjiysW_WsA577Yc71MzunBXHAFUbsa8eji-VyIYe8qw4uUT3WYCAM40BhelWuz2WxxJQy6mf-Zlyri6-ZRBpBwtqXJyrALuWDMEuaqX',
    span: 'md:col-span-6',
  },
];

const processImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN0htZpBoEV3u-bA5uA1qlZaH1jUqGDKf4E1b6tDwL-5jA5CGhYqbCRYVheZcMyjyxmTECnYGTNUvVidpru01g_jt7pUvA0EJ6prZ0eFXTLKhzyrEv1akBCkhW7MZKSSkWDRF5EsjHXDuXLYGYcyLwJvKQN7shKX8l-uxqEbmS76dQzyptXcucY1AaifmUj2RXTyQoDOEy3Ex3aokSOF-9FCYMA3IRyTnLwVQ-uXOPS88H0i_9LnK9';

const steps = [
  {
    num: '1',
    title: 'Design Collaboration',
    desc: 'We work closely with you to finalize artwork, ensuring every detail translates perfectly to thread.',
  },
  {
    num: '2',
    title: 'Precision Digitization',
    desc: 'Your design is carefully mapped stitch-by-stitch to guarantee texture, density, and flow.',
  },
  {
    num: '3',
    title: 'Expert Stitching',
    desc: 'We bring the design to life on premium garments, inspecting every inch before it ships.',
  },
];

export default function HomePage() {
  return (
    <main className="pt-[80px]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center px-5 md:px-16 py-20 max-w-[1280px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full relative z-10">
          {/* Text Content */}
          <div className="md:col-span-6 flex flex-col justify-center order-2 md:order-1 mt-8 md:mt-0">
            <span className="text-xs font-semibold text-primary tracking-[0.1em] uppercase mb-4 block">
              Bespoke Craftsmanship
            </span>
            <h1 className="font-display text-3xl md:text-[48px] leading-[1.1] tracking-tight text-on-background mb-6">
              Your Story,<br />Threaded with Care.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-md mb-8 leading-relaxed">
              Elevate your everyday wardrobe with custom, hand-guided embroidery.
              We turn simple garments into personalized, tactile canvases.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-primary-container text-on-primary px-8 py-4 rounded text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Shop Everyone
              </Link>
              <Link
                to="/couples"
                className="inline-flex items-center justify-center bg-transparent border border-primary-container text-primary-container px-8 py-4 rounded text-xs font-semibold uppercase tracking-wider hover:bg-surface-container-low transition-colors"
              >
                Shop Couples
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:col-span-6 relative order-1 md:order-2 h-[50vh] md:h-[70vh]">
            <div className="absolute right-0 top-0 w-[85%] h-full bg-surface-container-low rounded overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={heroImage}
                alt="Delicate custom floral embroidery on a soft cotton t-shirt"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="px-5 md:px-16 py-20 max-w-[1280px] mx-auto bg-surface-container-lowest">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-display text-2xl md:text-[32px] leading-[1.3] font-semibold text-on-background">
              New Arrivals
            </h2>
            <p className="text-base text-on-surface-variant mt-2">Latest stitched creations.</p>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-base text-primary border-b border-primary hover:pb-1 transition-all"
          >
            View All Gallery →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {newArrivals.map((item, i) => (
            <div
              key={i}
              className={`${item.span} row-span-1 group relative overflow-hidden rounded bg-surface-container-low cursor-pointer`}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={item.image}
                alt={item.title}
              />
              {item.tag && (
                <div className="absolute top-4 left-4">
                  <span className="bg-surface-container-low text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-semibold uppercase">
                    {item.tag}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-base text-white/80 mt-1">Starting at {item.price}</p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="md:col-span-6 row-span-1 flex flex-col justify-center items-center text-center p-8 bg-surface-container-low rounded">
            <span className="text-primary text-4xl mb-4">✨</span>
            <h3 className="font-display text-xl font-semibold text-on-background mb-2">Have a Unique Idea?</h3>
            <p className="text-base text-on-surface-variant mb-6 max-w-sm">
              We specialize in turning your concepts into wearable art. Let's create something truly yours.
            </p>
            <Link
              to="/custom"
              className="inline-flex items-center justify-center bg-transparent border border-primary-container text-primary-container px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Start Custom Order
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="inline-flex items-center gap-2 text-base text-primary border-b border-primary pb-1">
            View All Gallery →
          </Link>
        </div>
      </section>

      {/* The Process */}
      <section className="relative px-5 md:px-16 py-20 my-20 max-w-[1280px] mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-surface-container-low rounded-xl md:rounded-3xl z-0 transform -skew-y-2 scale-105" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-12">
          <div>
            <img
              className="rounded-lg shadow-sm w-full h-[400px] object-cover"
              src={processImage}
              alt="Artisan operating an embroidery machine"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold text-primary tracking-[0.1em] uppercase mb-2 block">
                The Craft
              </span>
              <h2 className="font-display text-2xl md:text-[32px] leading-[1.3] font-semibold text-on-background">
                Slow fashion, made just for you.
              </h2>
            </div>
            <div className="flex flex-col gap-8 mt-4">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full border border-primary flex items-center justify-center text-primary text-sm font-semibold ${
                      i === steps.length - 1 ? 'bg-primary text-on-primary border-primary' : ''
                    }`}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-semibold text-on-background mb-1">{step.title}</h4>
                    <p className="text-base text-on-surface-variant leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
