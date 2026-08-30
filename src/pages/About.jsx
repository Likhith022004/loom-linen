import Reveal from '../components/Reveal'
import Newsletter from '../components/Newsletter'
import { px } from '../lib/images'

const values = [
  {
    n: '01',
    title: 'Natural fibres, only',
    body: 'Linen, handwoven cotton and silk. Nothing synthetic enters the cutting table. We believe cloth should want to decompose — eventually.',
  },
  {
    n: '02',
    title: 'Woven where it grows',
    body: 'Our cloth is woven in small clusters within a district of its own fibre — so the loom and the land stay in conversation for generations.',
  },
  {
    n: '03',
    title: 'Slow by design',
    body: 'Small drops, garment-washed, pre-aged. A piece should look like it has always belonged to you from the first wear.',
  },
  {
    n: '04',
    title: 'The fair atelier',
    body: 'Every embroider and tailor is paid above living wage and named on the piece they made. Craft is credit, not charity.',
  },
]

const people = [
  { id: 30423960, name: 'Bano ji', role: 'Master embroider — line stitch', note: 'Three generations of the aari needle.' },
  { id: 6660962, name: 'Mithilesh', role: 'Hand-roll finisher', note: 'Forty minutes per metre of silk trim.' },
  { id: 23494589, name: 'Velu & Suresh', role: 'Handloom weavers, Erode', note: 'Twelve looms between two brothers.' },
]

const timeline = [
  ['Fibre', 'European flax and regional cottons, bought direct from the mills and clusters.'],
  ['Spin & dye', 'Wet-spun soft twist; dyed in small vats with madder, cutch and indigo.'],
  ['Weave', 'Handloom or hand-matched machine weave, inspected metre by metre.'],
  ['Embroidery', 'Freehand line stitch, jali and satin work — never traced, always drawn from the study book.'],
  ['Cut & sew', 'Hand-pressed, notches set by hand, every seam finished on the flat.'],
  ['Wash & age', 'Soft-water wash, slow dry, so cloth arrives already half-loved.'],
]

export default function About() {
  return (
    <>
      {/* -------- hero -------- */}
      <section className="relative overflow-hidden">
        <div className="h-[72vh] min-h-[480px] w-full bg-charcoalDeep">
          <img
            src={px(31450891, 1800, 900, 'crop')}
            alt="Contemporary linen garments in warm neutral studio light"
            className="img-grade h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nearblack via-nearblack/40 to-nearblack/20" />
        </div>
        <div className="container-luxe absolute inset-x-0 bottom-0">
          <div className="pb-12">
            <p className="overline flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-terracotta" />
              Our Story · Since 2016
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[13vw] leading-[0.98] text-ivory sm:text-7xl lg:text-[5.6rem]">
              Rooted in craft.
              <br />
              <span className="italic text-beige">Made for today.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* -------- intro -------- */}
      <section className="container-luxe grid grid-cols-1 gap-10 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-3">
          <Reveal>
            <p className="overline">The Idea</p>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-7" delay={80}>
          <p className="font-display text-3xl leading-[1.3] text-ivory sm:text-4xl">
            <span className="float-left mr-3 pr-2 font-display text-6xl italic text-terracotta sm:text-7xl">
              L
            </span>
            OOM &amp; LINEN began in 2016 in a Delhi courtyard, with one handloom and a conviction:
            that the oldest crafts of the Indian subcontinent deserve to be dressed in a modern,
            international manners — quiet, substantial, and free of costume.
          </p>
          <p className="mt-8 max-w-2xl text-[15px] leading-[1.9] text-sand">
            We are not a heritage revival, and we are not a fashion impulse. We are a textile house
            that treats the embroidery of Lucknow, the looms of Erode, the vegetable dyes of
            Rajasthan and the cutting rooms of New Delhi as a single, continuing studio practice.
            Each season we add a little to the archive — a new motif, a new cut — and retire
            nothing. Our garments are meant to be kept, repaired and returned to, the way you keep a
            good linen tablecloth or an old photograph of a place you love.
          </p>
          <blockquote className="mt-10 border-l-2 border-terracotta pl-6">
            <p className="font-display text-2xl italic leading-snug text-beige">
              “An old textile archive, reinterpreted through a contemporary fashion house.”
            </p>
          </blockquote>
        </Reveal>
      </section>

      {/* -------- values -------- */}
      <section className="hairline-x bg-charcoalDeep">
        <div className="container-luxe grid grid-cols-1 gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:py-24">
          {values.map((v, i) => (
            <Reveal key={v.n} delay={i * 90}>
              <p className="font-display text-4xl text-terracotta/80">{v.n}</p>
              <h3 className="mt-4 font-display text-2xl text-ivory">{v.title}</h3>
              <p className="mt-3 text-[13px] leading-[1.8] text-sand">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* -------- full-bleed artifact ------ */}
      <section className="relative">
        <img
          src={px(4614236, 1800, 620, 'crop')}
          alt="Fabric rolls resting on a wooden work table"
          loading="lazy"
          className="img-grade h-[44vh] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container-luxe w-full">
            <Reveal>
              <p className="max-w-md font-display text-3xl leading-snug text-ivory drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                “Twelve looms, six embroiderers, one small cutting room.<br />
                <span className="italic text-beige">Everything else is patience.</span>”
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------- people -------- */}
      <section className="container-luxe py-20 lg:py-28">
        <Reveal>
          <p className="overline flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-terracotta" />
            The Hands
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
            Named on the <span className="italic text-beige">pieces they make</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="group overflow-hidden">
                <img
                  src={px(p.id, 800, 1000)}
                  alt={`Portrait of ${p.name}`}
                  loading="lazy"
                  className="img-grade aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] ease-luxe group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-label text-terracotta">
                {p.role}
              </p>
              <h3 className="mt-1 font-display text-2xl text-ivory">{p.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-sand">{p.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* -------- process timeline -------- */}
      <section className="hairline-x bg-charcoalDeep py-20 lg:py-24">
        <div className="container-luxe">
          <Reveal>
            <p className="overline flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-terracotta" />
              Fibre to Finish
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
              The long way, <span className="italic text-beige">every time</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-0 md:grid-cols-6">
            {timeline.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70} className="relative border-l border-ivory/10 pl-6 pb-10 md:border-l-0 md:border-t md:pl-0 md:pt-6">
                <span
                  className="absolute -left-[5px] top-1 h-2.5 w-2.5 rotate-45 border border-terracotta bg-charcoalDeep md:-top-[6px] md:left-0"
                  aria-hidden="true"
                />
                <p className="label text-terracotta">0{i + 1} — {t}</p>
                <p className="mt-3 pr-4 text-[12px] leading-[1.8] text-sand">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------- closing -------- */}
      <section className="container-luxe py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={px(6461392, 1100, 900)}
              alt="Linen garments laid with dried flowers"
              loading="lazy"
              className="img-grade aspect-[5/4] w-full object-cover"
            />
          </Reveal>
          <div>
            <Reveal delay={100}>
              <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">
                Come back to the loom, <span className="italic text-beige">whenever you need it</span>
              </h2>
              <p className="mt-6 max-w-lg text-[15px] leading-[1.9] text-sand">
                Whether it is a phrase of embroidery that needs mending, the name of a weaver, or a
                garment from a season gone by, the atelier keeps the door open. Write to us — real
                people answer, and slowly.
              </p>
              <div className="mt-9 grid max-w-md grid-cols-2 gap-6">
                <div>
                  <p className="label text-ivory">Atelier</p>
                  <p className="mt-2 text-[13px] text-sand">B-14, Jhandewalan,<br />New Delhi 110055</p>
                </div>
                <div>
                  <p className="label text-ivory">Write</p>
                  <p className="mt-2 text-[13px] text-sand">
                    atelier@loomandlinen.in<br />+91 11 4200 1960
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}