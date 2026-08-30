import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import Accordion from '../components/Accordion'
import { Motif, MOTIFS } from '../components/Motifs'
import { IconHeart, IconClose, IconPlus, IconMinus } from '../components/icons'
import { px, inr } from '../lib/images'
import { getProduct, relatedFor } from '../data/products'
import { useStore } from '../context/StoreContext'

const SIZE_GUIDE = [
  ['Size', 'Chest (cm)', 'Shoulder (cm)', 'Length (cm)'],
  ['XS', '84', '36', '62'],
  ['S', '90', '38', '63'],
  ['M', '96', '40', '65'],
  ['L', '102', '42', '67'],
  ['XL', '108', '44', '69'],
]

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProduct(slug)
  const { addItem, wishlist, toggleWishlist, pushToast } = useStore()

  const [img, setImg] = useState(0)
  const [color, setColor] = useState(null)
  const [size, setSize] = useState(null)
  const [qty, setQty] = useState(1)
  const [guide, setGuide] = useState(false)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setImg(0)
    setColor(null)
    setSize(null)
    setQty(1)
    setAdded(false)
  }, [slug])

  useEffect(() => {
    document.body.style.overflow = guide ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [guide])

  if (!product) {
    return (
      <div className="container-luxe flex flex-col items-center gap-6 py-32 text-center">
        <p className="font-display text-4xl italic text-beige">This piece is no longer on the rail.</p>
        <button type="button" onClick={() => navigate('/shop')} className="btn-secondary">
          Back to the collection
        </button>
      </div>
    )
  }

  const wished = wishlist.includes(product.slug)

  const handleAdd = () => {
    if (product.sizes.length && !size) {
      pushToast('Please select a size first', 'accent')
      return
    }
    addItem(product.slug, { size: size || 'One Size', color: color || product.colors[0].name }, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2200)
  }

  const detailsItems = [
    {
      title: 'Fabric & Care',
      rows: [
        ['Fabric', product.fabrics.join(', ')],
        ...product.care.map((c) => ['·', c]),
        ['Made in', 'India'],
      ],
    },
    {
      title: 'The Craft',
      body: product.craftDetail,
    },
    {
      title: 'Details',
      rows: product.details.map((d) => ['·', d]),
    },
    {
      title: 'Shipping & Returns',
      body: 'Complimentary delivery across India on orders above ₹4,000. Dispatch within 48 hours; arrives in 3–6 working days. Free 10-day returns and exchanges on unworn pieces with tags intact.',
    },
  ]

  return (
    <>
      <div className="container-luxe">
        {/* breadcrumb */}
        <nav className="flex items-center gap-2 py-5 text-[10px] uppercase tracking-label text-taupe" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-ivory">Home</Link>
          <span>/</span>
          <Link to={`/shop?cat=${product.category}`} className="hover:text-ivory">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-sand">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-12 pb-16 lg:grid-cols-2 lg:gap-20">
          {/* ---------- gallery ---------- */}
          <div>
            <div className="lg:sticky lg:top-24">
              <div className="grid grid-cols-[76px_1fr] gap-4">
                <div className="flex flex-col gap-3">
                  {product.images.map((id, i) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setImg(i)}
                      aria-label={`View image ${i + 1}`}
                      className={`overflow-hidden border transition-colors ${
                        img === i ? 'border-terracotta' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={px(id, 200, 260)} alt="" loading="lazy" className="img-grade aspect-[3/4] w-full object-cover" />
                    </button>
                  ))}
                </div>
                <div className="group relative overflow-hidden bg-charcoalDeep">
                  <img
                    src={px(product.images[img], 1200, 1600)}
                    alt={product.name}
                    className="img-grade aspect-[3/4] w-full object-cover transition-transform duration-[1.6s] ease-luxe group-hover:scale-[1.05]"
                  />
                  {product.handcrafted && (
                    <span className="absolute left-0 top-0 bg-terracotta px-3 py-1.5 text-[9px] uppercase tracking-label text-ivory">
                      Handcrafted
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ---------- info ---------- */}
          <div className="lg:pt-4">
            <Reveal>
              <p className="overline flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-terracotta" />
                {product.category}
                {product.new && <span className="text-beige">· New Arrival</span>}
              </p>
              <h1 className="mt-4 font-display text-4xl leading-[1.05] text-ivory sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-[13px] uppercase tracking-label text-sand">{product.line}</p>
              <p className="mt-6 font-display text-2xl text-beige">{inr(product.price)}</p>
              {product.compareAt && (
                <p className="mt-1 text-[12px] text-taupe">
                  <s>{inr(product.compareAt)}</s> · saved just for you
                </p>
              )}
              <p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-sand">{product.blurbs}</p>
            </Reveal>

            {/* colour */}
            <div className="mt-10">
              <p className="label text-ivory">
                Colour — <span className="text-sand">{color || product.colors[0].name}</span>
              </p>
              <div className="mt-4 flex gap-3">
                {product.colors.map((c) => {
                  const active = (color || product.colors[0].name) === c.name
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setColor(c.name)}
                      aria-label={c.name}
                      className={`h-9 w-9 rounded-full border-2 transition-all duration-300 ${
                        active ? 'border-ivory' : 'border-transparent hover:border-ivory/40'
                      }`}
                      style={{ background: c.hex }}
                    >
                      <span className="sr-only">{c.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* size */}
            <div className="mt-9">
              <div className="flex items-center justify-between">
                <p className="label text-ivory">
                  Size{size ? ` — ${size}` : ''}
                </p>
                {product.sizes.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setGuide(true)}
                    className="link-underline text-[10px] uppercase tracking-label text-sand hover:text-ivory"
                  >
                    Size guide
                  </button>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`min-h-11 min-w-11 border px-4 py-2 text-[11px] uppercase tracking-label transition-colors ${
                      size === s
                        ? 'border-terracotta bg-terracotta text-ivory'
                        : 'border-ivory/20 text-ivory hover:border-ivory/60'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* qty + add to bag */}
            <div className="mt-10 flex flex-wrap items-stretch gap-3">
              <div className="flex items-center border border-ivory/20">
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="flex h-full w-12 items-center justify-center text-ivory transition-colors hover:text-terracotta"
                  aria-label="Decrease quantity"
                >
                  <IconMinus />
                </button>
                <span className="w-10 text-center text-sm text-ivory">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(qty + 1)}
                  className="flex h-full w-12 items-center justify-center text-ivory transition-colors hover:text-terracotta"
                  aria-label="Increase quantity"
                >
                  <IconPlus />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className={`btn-primary flex-1 ${added ? 'bg-brown' : ''}`}
              >
                {added ? 'Added to bag ✓' : product.handcrafted ? 'Add to bag — made by hand' : 'Add to bag'}
              </button>
              <button
                type="button"
                onClick={() => toggleWishlist(product.slug)}
                aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
                className={`flex w-14 items-center justify-center border transition-colors ${
                  wished
                    ? 'border-terracotta/70 text-terracotta'
                    : 'border-ivory/20 text-ivory hover:border-terracotta hover:text-terracotta'
                }`}
              >
                <IconHeart filled={wished} width={18} height={18} />
              </button>
            </div>

            <p className="mt-5 text-[11px] leading-relaxed text-taupe">
              Ships in a reusable cotton archival pouch · Free returns within 10 days
            </p>

            {/* accordions */}
            <div className="mt-10">
              <Accordion items={detailsItems} />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- THE CRAFT ---------- */}
      <section className="hairline-x bg-charcoalDeep">
        <div className="container-luxe grid grid-cols-1 gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="overline flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-terracotta" />
                The Craft
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
                Drawn in <span className="italic text-beige">a single thread</span>
              </h2>
              <p className="mt-6 text-[15px] leading-[1.8] text-sand">{product.craftDetail}</p>
              <div className="mt-8 flex items-center gap-4">
                <Motif motif={MOTIFS[0]} color="#AB6246" size={68} />
                <div className="flex-1 border-t border-ivory/15 pt-4">
                  <p className="label text-ivory">The line stitch</p>
                  <p className="mt-1.5 text-[12px] text-taupe">Freehand · never traced · no two alike</p>
                </div>
              </div>
              <Link to="/craft" className="btn-secondary mt-9">
                Explore the craft
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-5">
              {[36319604, 6660962].map((id, i) => (
                <Reveal key={id} delay={i * 140} className={i === 0 ? 'self-end' : ''}>
                  <img
                    src={px(id, 900, 1150)}
                    alt={i === 0 ? 'Embroidery thread palette' : 'Artisan hands stitching'}
                    loading="lazy"
                    className="img-grade aspect-[4/5] w-full object-cover"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- related ---------- */}
      <section className="container-luxe py-20 lg:py-24">
        <SectionHeader overline="Pairs well" title="You may also like" />
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {relatedFor(product).map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- size guide modal ---------- */}
      {guide && product.sizes.length > 1 && (
        <div className="fade-layer fixed inset-0 z-[75] flex items-end justify-center bg-nearblack/80 p-0 backdrop-blur-sm sm:items-center sm:p-6">
          <div className="slide-panel w-full max-w-lg border border-ivory/15 bg-charcoalDeep p-8 sm:p-10">
            <div className="flex items-start justify-between">
              <div>
                <p className="overline">Reference</p>
                <h2 className="mt-2 font-display text-3xl text-ivory">Size guide</h2>
              </div>
              <button
                type="button"
                onClick={() => setGuide(false)}
                className="flex h-10 w-10 items-center justify-center text-ivory hover:text-terracotta"
                aria-label="Close size guide"
              >
                <IconClose />
              </button>
            </div>
            <div className="mt-7 overflow-x-auto">
              <table className="w-full border-collapse text-[12px]">
                <thead>
                  <tr>
                    {SIZE_GUIDE[0].map((h) => (
                      <th key={h} className="border-b border-ivory/20 pb-3 text-left text-[10px] uppercase tracking-label text-taupe">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SIZE_GUIDE.slice(1).map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i} className={`border-b border-ivory/10 py-3 ${i === 0 ? 'text-ivory' : 'text-sand'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-[11px] leading-relaxed text-taupe">
              LOOM &amp; LINEN pieces are cut for an eased, modern fit. Between sizes? Take the
              smaller if you prefer a closer line, the larger for layering.
            </p>
          </div>
        </div>
      )}
    </>
  )
}