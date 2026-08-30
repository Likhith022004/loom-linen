import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import Newsletter from '../components/Newsletter'
import { Motif, MOTIFS } from '../components/Motifs'
import { px, inr } from '../lib/images'
import { products, getFeatured, getNewArrivals } from '../data/products'

const featured = getFeatured()
const arrivals = getNewArrivals()

function Marquee() {
  const words = ['Hand Stitched', 'Pure Linen', 'Indigo & Earth', 'Small Batches', 'Timeless Craft', 'Modern Soul']
  const row = [...words, ...words]
  return (
    <div className="overflow-hidden border-y border-ivory/10 bg-charcoalDeep py-4">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {[0, 1].map((k) =>
          row.map((w, i) => (
            <span
              key={`${k}-${i}`}
              className="flex items-center gap-10 text-[11px] uppercase tracking-[0.28em] text-sand"
            >
              {w}
              <span className="text-terracotta">·</span>
            </span>
          ))
        )}
      </div>
    </div>
  )
}

export default function Home() {
  const noor = products.find((p) => p.slug === 'noor-hand-embroidered-linen-kurta')

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="container-luxe">
          <div className="grid min-h-[88vh] grid-cols-1 items-center gap-12 py-14 lg:grid-cols-12 lg:py-20">
            {/* editorial headline */}
            <div className="relative lg:col-span-5">
              <Reveal>
                <p className="overline flex items-center gap-3">
                  <span className="inline-block h-px w-10 bg-terracotta" />
                  The Embroidered Edit · AW&nbsp;26
                </p>
              </Reveal>

              <h1 className="relative mt-8 font-display text-[13vw] leading-[0.95] text-ivory sm:text-7xl lg:text-[5.4rem]">
                <span className="reveal-line">
                  <span className="font-normal italic text-beige">Crafted by hand.</span>
                </span>
                <span className="reveal-line" style={{ '--reveal-delay': '140ms' }}>
                  <span>Designed</span>
                </span>
                <span className="reveal-line" style={{ '--reveal-delay': '280ms' }}>
                  <span>for now.</span>
                </span>
              </h1>

              <Reveal delay={420}>
                <p className="mt-8 max-w-md text-[15px] leading-[1.75] text-sand">
                  Discover considered textiles, quiet embroidery and timeless silhouettes rooted in
                  Indian craftsmanship — drawn in a single line of thread, made to be worn today.
                </p>
              </Reveal>

              <Reveal delay={560}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link to="/shop" className="btn-primary">
                    Shop Collection
                  </Link>
                  <Link to="/about" className="btn-secondary">
                    Discover Our Story
                  </Link>
                </div>
              </Reveal>

              {/* floating archivist label */}
              <Reveal delay={700} className="mt-14 hidden lg:block">
                <div className="flex items-center gap-6">
                  <div className="h-px w-16 bg-ivory/20" />
                  <p className="text-[10px] uppercase tracking-[0.24em] text-taupe">
                    Plate&nbsp;01 — The Line Stitch
                  </p>
                </div>
              </Reveal>
            </div>

            {/* full-bleed vertical image */}
            <div className="lg:col-span-7">
              <Reveal delay={180}>
                <div className="relative">
                  <div className="relative overflow-hidden bg-charcoalDeep md:aspect-[4/5]">
                    <img
                      src={px(13162238, 1400, 1750)}
                      alt="Indian model wearing an ivory hand-embroidered LOOM &amp; LINEN linen kurta in warm studio light"
                      className="img-grade absolute inset-0 h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nearblack/40 via-transparent to-transparent" />
                  </div>

                  <p className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-sand">
                    <span>Photo 01 — Studio, New Delhi</span>
                    <span className="text-taupe">The Noor kurta · 07/26</span>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -left-10 top-1/3 hidden opacity-40 xl:block">
          <Motif motif={MOTIFS[0]} color="#947961" size={170} />
        </div>
      </section>

      <Marquee />

      {/* ================= FEATURED ================= */}
      <section className="container-luxe py-20 lg:py-28">
        <SectionHeader
          overline="The Embroidered Edit"
          title={
            <>
              Thread, drawn
              <br />
              <span className="italic text-beige">by hand</span>
            </>
          }
          intro="Four pieces from the atelier's hand-embroidered line — each one signed by the map of the thread that made it."
          link="/shop?cat=embroidered"
          linkLabel="View the edit"
        />

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {featured.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= NEW ARRIVALS ================= */}
      <section className="hairline-x bg-charcoalDeep py-20 lg:py-28">
        <div className="container-luxe">
          <SectionHeader
            overline="Just off the loom"
            title="New arrivals"
            link="/shop?cat=new"
            linkLabel="All new"
          />

          <div className="rail mt-12 flex gap-8 overflow-x-auto pb-4">
            {arrivals.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className="w-[72vw] shrink-0 sm:w-[46vw] lg:w-full lg:flex-1">
                <ProductCard product={p} />
              </Reveal>
            ))}
            <Reveal className="flex w-[60vw] shrink-0 items-center sm:w-[40vw] lg:w-auto lg:flex-none lg:items-end">
              <Link
                to="/shop?cat=new"
                className="group flex items-end gap-4 border border-ivory/15 px-8 py-10 transition-colors hover:border-terracotta/60"
              >
                <span className="font-display text-2xl leading-tight text-ivory transition-transform duration-500 ease-luxe group-hover:translate-x-2">
                  View all new arrivals →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= EDITORIAL SPLIT ================= */}
      <section className="container-luxe py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="overline flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-terracotta" />
                The Cloth
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
                Cloth that <span className="italic text-beige">remembers</span> the hand
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-sand">
                We work only with natural fibres — linen, handwoven cotton and silk — that soften
                with wear and hold the memory of the weaver. Garment-washed, never rushed, each
                piece is left with the small irregularities that make it unmistakably made by hand.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8">
                {[
                  ['14 hr', 'of handwork in a single kurta'],
                  ['100%', 'natural fibre cloth'],
                  ['12', 'looms working in our clusters'],
                  ['0', 'synthetic dyes in the atelier'],
                ].map(([v, l]) => (
                  <div key={l} className="border-t border-ivory/15 pt-4">
                    <dt className="font-display text-3xl text-beige">{v}</dt>
                    <dd className="mt-1 text-[11px] uppercase tracking-label text-sand">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-5 gap-5">
              <Reveal className="col-span-3" delay={60}>
                <div className="overflow-hidden">
                  <img
                    src={px(30618181, 1000, 1330)}
                    alt="Garment-washed linen in soft beige folds"
                    loading="lazy"
                    className="img-grade aspect-[3/4] w-full object-cover transition-transform duration-[1.4s] ease-luxe hover:scale-[1.03]"
                  />
                </div>
              </Reveal>
              <Reveal className="col-span-2 self-end" delay={180}>
                <div className="overflow-hidden">
                  <img
                    src={px(4862928, 800, 1100)}
                    alt="Close-up of handwoven linen texture"
                    loading="lazy"
                    className="img-grade aspect-[2/3] w-full object-cover transition-transform duration-[1.4s] ease-luxe hover:scale-[1.03]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CRAFT / LINE STITCH ================= */}
      <section className="relative overflow-hidden bg-nearblack py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-16 bottom-0 hidden opacity-30 xl:block">
          <Motif motif={MOTIFS[2]} color="#C3A88D" size={240} />
        </div>
        <div className="container-luxe">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <Reveal>
                <p className="overline flex items-center gap-3">
                  <span className="inline-block h-px w-8 bg-terracotta" />
                  The Craft
                </p>
                <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
                  A stitch, drawn in <span className="italic text-beige">one unbroken line</span>
                </h2>
                <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-sand">
                  Our signature is the line stitch — botanical stems and quiet arches worked
                  freehand, never traced, in a single continuous thread. Each motif is drawn from a
                  pencil study, then translated to cloth by the embroider’s memory.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link to="/craft" className="btn-primary">
                    The Line Stitch
                  </Link>
                  <Link to="/shop?cat=embroidered" className="btn-secondary">
                    Shop embroidered
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-6">
              <div className="grid grid-cols-2 gap-5">
                <Reveal className="self-end" delay={60}>
                  <img
                    src={px(36319604, 800, 1000)}
                    alt="Fine tonal thread colours of the embroidery atelier"
                    loading="lazy"
                    className="img-grade aspect-[4/5] w-full object-cover"
                  />
                </Reveal>
                <Reveal delay={200}>
                  <img
                    src={px(13245208, 800, 1000)}
                    alt="Close-up of hand embroidery stitches"
                    loading="lazy"
                    className="img-grade aspect-[4/5] w-full object-cover"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PIECE ================= */}
      <section className="container-luxe py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative overflow-hidden">
                <img
                  src={px(31450892, 1200, 1500)}
                  alt="Model wearing the Noor hand-embroidered linen kurta"
                  loading="lazy"
                  className="img-grade aspect-[4/5] w-full object-cover object-top"
                />
                <div className="absolute left-5 top-5">
                  <span className="bg-terracotta px-3 py-1.5 text-[9px] uppercase tracking-label text-ivory">
                    Atelier highlight
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <p className="overline flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-terracotta" />
                Atelier Highlight
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
                {noor.name}
              </h2>
              <p className="mt-4 font-display text-2xl text-beige">{inr(noor.price)}</p>
              <p className="mt-5 max-w-md text-[15px] leading-[1.8] text-sand">{noor.blurbs}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link to={`/product/${noor.slug}`} className="btn-primary">
                  View the kurta
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= BRAND STORY TEASER ================= */}
      <section className="hairline-x bg-charcoalDeep py-20 lg:py-28">
        <div className="container-luxe">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="overline flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-terracotta" />
                Our Story
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05]">
                Rooted in craft. <span className="italic text-beige">Made for today.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-[1.8] text-sand">
                LOOM &amp; LINEN began with a single loom in a Delhi courtyard and a belief that
                Indian craftsmanship deserves a contemporary voice — quiet, considered and
                international in its calm.
              </p>
              <Link to="/about" className="btn-secondary mt-9">
                Read our story
              </Link>
            </Reveal>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-5 gap-5">
                <Reveal className="col-span-2" delay={60}>
                  <img
                    src={px(33925037, 800, 1100)}
                    alt="Artisan hands weaving at a loom"
                    loading="lazy"
                    className="img-grade aspect-[3/4] w-full object-cover"
                  />
                </Reveal>
                <Reveal className="col-span-3" delay={160}>
                  <img
                    src={px(30423960, 1000, 780)}
                    alt="Craftswoman portrait in the atelier"
                    loading="lazy"
                    className="img-grade aspect-[5/4] w-full object-cover"
                  />
                </Reveal>
                <Reveal className="col-span-5" delay={240}>
                  <img
                    src={px(4614236, 1400, 500)}
                    alt="Fabric rolls in the artisan workshop"
                    loading="lazy"
                    className="img-grade aspect-[21/7] w-full object-cover"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUOTE BAND ================= */}
      <section className="overflow-hidden border-y border-ivory/10 py-16">
        <div className="container-luxe flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <Motif motif={MOTIFS[1]} color="#AB6246" size={90} />
          <blockquote className="max-w-2xl">
            <p className="font-display text-2xl italic leading-snug text-ivory sm:text-3xl">
              “We do not follow fashions that arrive and leave. We make the kind of cloth you keep
              returning to, season after season, year after year.”
            </p>
            <footer className="mt-4 text-[11px] uppercase tracking-label text-taupe">
              — Leela Menon, Founder &amp; Master Embroider
            </footer>
          </blockquote>
          <Motif motif={MOTIFS[3]} color="#947961" size={90} />
        </div>
      </section>

      <Newsletter />
    </>
  )
}