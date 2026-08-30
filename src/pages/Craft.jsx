import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Newsletter from '../components/Newsletter'
import { Motif, MOTIFS, EMBROIDERY_PALETTE } from '../components/Motifs'
import { px } from '../lib/images'

const process = [
  { id: 6660962, caption: 'Translating the study to cloth — freehand, no tracing' },
  { id: 6660960, caption: 'The needle finds its rhythm in a single continuous line' },
  { id: 4621901, caption: 'Every finished stroke pressed and secured by hand' },
  { id: 5894275, caption: 'Fabric mounted, tension set, blank space becoming pattern' },
]

const hours = [
  ['1 hr', 'Choosing and cutting the cloth'],
  ['Ⅱ hr', 'Dimming the motif in the mind, first stitches'],
  ['6 hr', 'The long stitch — the body of the embroidery'],
  ['2 hr', 'Satin fills and second passes'],
  ['1.5 hr', 'Securing, pressing, signing the label'],
  ['Total', '≈ 14 hours of handwork, one needle, no marks'],
]

export default function Craft() {
  const [mi, setMi] = useState(0)
  const [color, setColor] = useState(EMBROIDERY_PALETTE[5].hex)
  const [animateKey, setAnimateKey] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const revealRef = useRef(null)

  const select = (n, c) => {
    setMi(n)
    if (c) setColor(c.hex)
    setAnimateKey((k) => k + 1)
  }

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRevealed(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    if (revealRef.current) io.observe(revealRef.current)
    return () => io.disconnect()
  }, [])

  return (
    <>
      {/* -------- hero -------- */}
      <section className="relative overflow-hidden">
        <div className="container-luxe grid min-h-[74vh] grid-cols-1 items-center gap-10 py-16 lg:grid-cols-12">
          <div className="relative lg:col-span-8">
            <Reveal>
              <p className="overline flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-terracotta" />
                The Craft · Plate 01
              </p>
              <h1 className="mt-6 font-display text-[14vw] leading-[0.95] sm:text-8xl lg:text-[7rem]">
                The line <span className="italic text-beige">stitch</span>
              </h1>
              <p className="mt-8 max-w-xl text-[15px] leading-[1.8] text-sand">
                Our signature embroidery is drawn the way the old masters drew ink — botanicals,
                arches and organic forms reduced to a single, continuous line of thread. It is never
                traced, never stamped, never digitised. It is written on the cloth by memory, at
                roughly the speed of handwriting.
              </p>
            </Reveal>
          </div>
          <div className="relative lg:col-span-4">
            <Reveal delay={160} className="flex justify-center lg:justify-end">
              <div className="relative">
                <Motif
                  key={`hero-${animateKey}`}
                  motif={MOTIFS[4]}
                  color={color}
                  size={230}
                  className="opacity-90"
                />
                <p className="vertical-text absolute right-[-14px] top-1/2 -translate-y-1/2 text-[9px] uppercase tracking-[0.3em] text-taupe">
                  Study No. 5 · the one line
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-20 top-0 hidden opacity-25 xl:block">
          <Motif motif={MOTIFS[3]} color="#947961" size={220} />
        </div>
      </section>

      {/* -------- interactive motif explorer -------- */}
      <section className="hairline-x bg-charcoalDeep py-20 lg:py-28">
        <div className="container-luxe">
          <Reveal>
            <p className="overline flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-terracotta" />
              The Motif Book
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
              Five lines from the <span className="italic text-beige">study book</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-sand">
              Choose a motif, then choose its thread. Watch it drawn the way it is stitched — in
              one continuous stroke, metre by metre.
            </p>
          </Reveal>

          <div ref={revealRef} className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* palette */}
            <div className="lg:col-span-3">
              <Reveal>
                <p className="label text-ivory">Thread palette</p>
                <div className="mt-5 flex flex-wrap gap-3 lg:flex-col lg:gap-3.5">
                  {EMBROIDERY_PALETTE.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => select(mi, c)}
                      className={`flex items-center gap-3 border px-3 py-2.5 transition-colors ${
                        color === c.hex ? 'border-terracotta' : 'border-transparent hover:border-ivory/30'
                      }`}
                    >
                      <span
                        className="h-7 w-7 rounded-full border border-white/10"
                        style={{ background: c.hex }}
                      />
                      <span className="text-[11px] uppercase tracking-label text-sand">{c.name}</span>
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* motif list + drawing */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] md:gap-10">
                <Reveal>
                  <div className="flex flex-wrap gap-2.5">
                    {MOTIFS.map((m, i) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => select(i)}
                        className={`border px-4 py-2 text-[10px] uppercase tracking-label transition-colors ${
                          mi === i
                            ? 'border-terracotta bg-terracotta text-ivory'
                            : 'border-ivory/20 text-sand hover:border-ivory/50 hover:text-ivory'
                        }`}
                      >
                        {m.name}
                      </button>
                    ))}
                  </div>
                  <p className="mt-4 max-w-md text-[12px] italic leading-relaxed text-taupe">
                    “{MOTIFS[mi].note}”
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <div className={revealed ? 'fade-up' : ''}>
                    <Motif
                      key={`${MOTIFS[mi].id}-${animateKey}`}
                      motif={MOTIFS[mi]}
                      color={color}
                      size={260}
                      className="mx-auto md:mx-0"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------- process photography -------- */}
      <section className="container-luxe py-20 lg:py-28">
        <Reveal>
          <p className="overline flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-terracotta" />
            At the Frame
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
            The making, <span className="italic text-beige">in the making</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <figure className="group">
                <div className="overflow-hidden bg-charcoalDeep">
                  <img
                    src={px(p.id, 800, 1000)}
                    alt={p.caption}
                    loading="lazy"
                    className="img-grade aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] ease-luxe group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-4 flex gap-3 text-[12px] leading-relaxed text-sand">
                  <span className="font-display text-lg text-terracotta">0{i + 1}</span>
                  {p.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* -------- grain & thread -------- */}
      <section className="hairline-x bg-charcoalDeep py-20 lg:py-28">
        <div className="container-luxe grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-5 gap-5">
              <Reveal className="col-span-3">
                <img
                  src={px(36319604, 1000, 1300)}
                  alt="Fine tonal threads of the atelier palette"
                  loading="lazy"
                  className="img-grade aspect-[3/4] w-full object-cover"
                />
              </Reveal>
              <Reveal className="col-span-2 self-end" delay={140}>
                <img
                  src={px(19479497, 800, 1000)}
                  alt="Skeins of natural thread resting in shadow"
                  loading="lazy"
                  className="img-grade aspect-[2/3] w-full object-cover"
                />
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <p className="overline flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-terracotta" />
                The thread
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
                Six colours, <span className="italic text-beige">one language</span>
              </h2>
              <p className="mt-6 text-[15px] leading-[1.85] text-sand">
                Every motif in the study book is stitched in threads drawn from the house palette —
                ivory, taupe, sand, beige, muted brown and dusty terracotta. The restriction is the
                discipline: nothing fights the cloth, nothing shouts, nothing competes with the
                texture of linen itself.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {EMBROIDERY_PALETTE.map((c) => (
                  <div key={c.name} className="flex items-center gap-2 border border-ivory/10 px-3 py-2">
                    <span className="h-4 w-4 rounded-full" style={{ background: c.hex }} />
                    <span className="text-[10px] uppercase tracking-label text-sand">{c.name}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------- the slow day -------- */}
      <section className="container-luxe py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="overline flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-terracotta" />
                The Slow Day
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
                Fourteen hours, <span className="italic text-beige">one needle</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.85] text-sand">
                A truly hand-embroidered garment does not happen in minutes. Here is the reasonable,
                unhurried arithmetic of a single embroidered kurta — and why it costs what it costs.
              </p>
              <Link to="/shop?cat=embroidered" className="btn-primary mt-9">
                Shop embroidered
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="divide-y divide-ivory/10 border-y border-ivory/10">
              {hours.map(([t, d]) => (
                <Reveal key={t}>
                  <div className="flex items-baseline gap-6 py-5">
                    <span className="w-24 shrink-0 font-display text-2xl text-beige">{t}</span>
                    <span className="text-[13px] leading-relaxed text-sand">{d}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}