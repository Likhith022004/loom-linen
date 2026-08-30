const processImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN0htZpBoEV3u-bA5uA1qlZaH1jUqGDKf4E1b6tDwL-5jA5CGhYqbCRYVheZcMyjyxmTECnYGTNUvVidpru01g_jt7pUvA0EJ6prZ0eFXTLKhzyrEv1akBCkhW7MZKSSkWDRF5EsjHXDuXLYGYcyLwJvKQN7shKX8l-uxqEbmS76dQzyptXcucY1AaifmUj2RXTyQoDOEy3Ex3aokSOF-9FCYMA3IRyTnLwVQ-uXOPS88H0i_9LnK9';

export default function StoryPage() {
  return (
    <main className="pt-[120px] pb-20">
      {/* Hero */}
      <section className="px-5 md:px-16 py-20 max-w-[1280px] mx-auto text-center">
        <span className="text-xs font-semibold text-primary tracking-[0.1em] uppercase mb-4 block">
          Our Story
        </span>
        <h1 className="font-display text-3xl md:text-[48px] leading-[1.1] font-bold text-on-background mb-6">
          Crafted with Purpose
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Dudi's Custom Embroidery was born from a simple belief: everyday clothing
          should feel personal. We combine traditional embroidery artistry with modern
          precision to create pieces that tell your story.
        </p>
      </section>

      {/* Image + Text */}
      <section className="px-5 md:px-16 py-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded overflow-hidden">
            <img
              className="w-full h-[400px] object-cover"
              src={processImage}
              alt="Artisan at work"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-2xl md:text-[32px] font-semibold text-on-background">
              Every Stitch Tells a Story
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              We started in a small studio with a single embroidery machine and a passion
              for detail. Today, every piece that leaves our workshop carries the same
              dedication to craftsmanship that started it all.
            </p>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Our team of skilled artisans uses hand-guided industrial machines to ensure
              each design is rendered with the texture, density, and flow that only human
              expertise can achieve. We source premium, ethically-made garments as our
              canvas — because the foundation matters as much as the art.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 md:px-16 py-20 max-w-[1280px] mx-auto">
        <h2 className="font-display text-2xl md:text-[32px] font-semibold text-on-background text-center mb-12">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Slow Fashion',
              desc: 'We make pieces meant to last. No fast-fashion shortcuts, no disposable trends. Just quality that endures.',
            },
            {
              title: 'Personal Touch',
              desc: 'Every order is a collaboration. We work closely with you to ensure the final piece feels truly yours.',
            },
            {
              title: 'Sustainable Craft',
              desc: 'Ethically sourced materials, minimal waste, and a commitment to doing things the right way.',
            },
          ].map((value, i) => (
            <div key={i} className="bg-surface-container-low rounded-lg p-8 text-center">
              <h3 className="font-display text-xl font-semibold text-on-background mb-3">{value.title}</h3>
              <p className="text-base text-on-surface-variant leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
