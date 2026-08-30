import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import { IconClose, IconChevron } from '../components/icons'
import { products, CATEGORIES, COLLECTIONS } from '../data/products'
import { px } from '../lib/images'

const SORTS = [
  ['featured', 'Featured'],
  ['newest', 'Newest'],
  ['price-asc', 'Price · Low to High'],
  ['price-desc', 'Price · High to Low'],
]

const CAT_TILES = [
  ...CATEGORIES.map((c) => ({ key: c.key, label: c.label })),
  ...COLLECTIONS.map((c) => ({ key: c.key, label: c.label })),
]

function Filters({ state, set, onClose = null }) {
  const toggle = (group, value) =>
    set((s) => {
      const cur = s[group] || []
      return { ...s, [group]: cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value] }
    })

  const rows = [
    {
      title: 'Category',
      group: 'category',
      options: CATEGORIES,
    },
    {
      title: 'Type',
      group: 'type',
      options: COLLECTIONS,
    },
    {
      title: 'Fabric',
      group: 'fabric',
      options: [
        { key: 'Linen', label: 'Linen' },
        { key: 'Handwoven Cotton', label: 'Handwoven Cotton' },
        { key: 'Silk', label: 'Silk' },
        { key: 'Canvas', label: 'Canvas' },
      ],
    },
    {
      title: 'Finish',
      group: 'finish',
      options: [
        { key: 'handcrafted', label: 'Handcrafted' },
        { key: 'new', label: 'New Arrival' },
      ],
    },
  ]

  return (
    <div>
      {rows.map((r) => (
        <fieldset
          key={r.title}
          className="border-b border-ivory/10 py-7 first:pt-0 last:border-b-0"
        >
          <legend className="label text-ivory">{r.title}</legend>
          <div className="mt-4 space-y-3">
            {r.options.map((o) => {
              const checked = (state[r.group] || []).includes(o.key)
              return (
                <label
                  key={o.key}
                  className="group flex cursor-pointer items-center gap-3 text-[13px] text-sand hover:text-ivory"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(r.group, o.key)}
                    className="peer sr-only"
                  />
                  <span
                    className={`flex h-4 w-4 items-center justify-center border transition-colors ${
                      checked ? 'border-terracotta bg-terracotta' : 'border-ivory/30 group-hover:border-ivory/60'
                    }`}
                  >
                    {checked && (
                      <svg viewBox="0 0 10 10" className="h-2.5 w-2.5" fill="none" stroke="#E6E1D3" strokeWidth="1.4">
                        <path d="M1.5 5.2 4 7.6 8.5 2.4" />
                      </svg>
                    )}
                  </span>
                  {o.label}
                  <span className="ml-auto text-[11px] text-taupe">
                    {products.filter((p) =>
                      r.group === 'category'
                        ? p.category === o.key
                        : r.group === 'type'
                          ? p.collection.includes(o.key)
                          : r.group === 'fabric'
                            ? p.fabrics.includes(o.label)
                            : o.key === 'handcrafted'
                              ? p.handcrafted
                              : p.new
                    ).length}
                  </span>
                </label>
              )
            })}
          </div>
        </fieldset>
      ))}
    </div>
  )
}

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState('featured')
  const [drawer, setDrawer] = useState(false)

  const cat = params.get('cat') || ''

  const setCat = (key) => {
    const p = new URLSearchParams()
    if (key) p.set('cat', key)
    setParams(p, { replace: true })
  }

  const activeCount = Object.values(filters).reduce((n, a) => n + (a ? a.length : 0), 0)

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (cat) {
        const isCat = p.category === cat
        const isColl = p.collection.includes(cat)
        if (!isCat && !isColl) return false
      }
      const f = (g) => filters[g] && filters[g].length
      if (f('category') && !filters.category.includes(p.category)) return false
      if (f('type') && !p.collection.some((c) => filters.type.includes(c))) return false
      if (f('fabric') && !p.fabrics.some((fb) => filters.fabric.includes(fb))) return false
      if (f('finish')) {
        for (const fin of filters.finish) {
          if (fin === 'new' && !p.new) return false
          if (fin === 'handcrafted' && !p.handcrafted) return false
        }
      }
      return true
    })
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'newest') list = [...list].sort((a, b) => Number(b.new) - Number(a.new))
    return list
  }, [cat, filters, sort])

  const heading = CAT_TILES.find((t) => t.key === cat)?.label || 'The Collection'

  return (
    <>
      {/* collection hero */}
      <section className="relative overflow-hidden border-b border-ivory/10">
        <div className="h-[46vh] min-h-[340px] w-full bg-charcoalDeep">
          <img
            src={px(cat === 'men' ? 13375591 : cat === 'accessories' ? 32655894 : cat === 'embroidered' ? 13245208 : cat === 'linen' ? 30618181 : cat === 'handwoven' ? 33925037 : 31450892, 1600, 900, 'crop')}
            alt=""
            className="img-grade h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nearblack via-nearblack/30 to-nearblack/10" />
        </div>
        <div className="container-luxe absolute inset-x-0 bottom-0">
          <div className="pb-10">
            <p className="overline flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-terracotta" />
              The Collection
            </p>
            <h1 className="mt-3 font-display text-5xl text-ivory sm:text-6xl lg:text-7xl">
              {heading}
            </h1>
            <p className="mt-3 text-[13px] uppercase tracking-[0.2em] text-sand">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} · handcrafted in India
            </p>
          </div>
        </div>
      </section>

      {/* category chips */}
      <div className="sticky top-[68px] z-30 border-b border-ivory/10 bg-charcoal/95 backdrop-blur-md">
        <div className="container-luxe flex items-center gap-2 overflow-x-auto py-3.5 rail">
          {CAT_TILES.map((t) => {
            const active = cat === t.key
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setCat(active ? '' : t.key)}
                className={`shrink-0 px-4 py-2 text-[10px] uppercase tracking-label transition-colors ${
                  active ? 'bg-terracotta text-ivory' : 'border border-ivory/15 text-sand hover:border-ivory/40 hover:text-ivory'
                }`}
              >
                {t.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* toolbar + grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">
        <aside className="hidden border-r border-ivory/10 px-8 py-10 lg:block">
          <div className="flex items-center justify-between">
            <h2 className="label text-ivory">Filter</h2>
            {activeCount > 0 && (
              <button
                type="button"
                onClick={() => setFilters({})}
                className="text-[10px] uppercase tracking-label text-terracotta hover:text-beige"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="mt-4">
            <Filters state={filters} set={setFilters} />
          </div>
        </aside>

        <div className="py-10 lg:px-10">
          {/* toolbar row */}
          <div className="mb-10 flex items-center justify-between gap-6">
            <button
              type="button"
              onClick={() => setDrawer(true)}
              className="btn-secondary px-5 py-2 lg:hidden"
            >
              Filters {activeCount > 0 ? `(${activeCount})` : ''}
            </button>
            <p className="hidden text-[11px] uppercase tracking-label text-taupe lg:block">
              {filtered.length} pieces
            </p>
            <label className="relative flex items-center gap-3">
              <span className="sr-only">Sort by</span>
              <span className="text-[10px] uppercase tracking-label text-taupe">Sort</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="cursor-pointer appearance-none border border-ivory/15 bg-transparent py-2 pl-4 pr-9 text-[11px] uppercase tracking-label text-ivory outline-none transition-colors hover:border-ivory/40 focus:border-terracotta"
              >
                {SORTS.map(([v, l]) => (
                  <option key={v} value={v} className="bg-charcoalDeep text-ivory">
                    {l}
                  </option>
                ))}
              </select>
              <IconChevron className="pointer-events-none absolute right-3 text-taupe" width={12} height={12} />
            </label>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-5 py-24 text-center">
              <p className="font-display text-3xl italic text-beige">Nothing in this weave.</p>
              <p className="max-w-sm text-sm text-sand">
                No pieces match these filters. Try clearing a selection — the cloth is generous.
              </p>
              <button type="button" onClick={() => { setFilters({}); setCat('') }} className="btn-secondary">
                Reset collection
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-6 gap-y-14 xl:grid-cols-3">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 70}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* mobile filter drawer */}
      <div
        className={`fade-layer fixed inset-0 z-[70] transition-opacity ${
          drawer ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-nearblack/80 backdrop-blur-sm" onClick={() => setDrawer(false)} />
        <div
          className={`slide-panel absolute right-0 top-0 flex h-full w-[86%] max-w-md flex-col bg-charcoalDeep ${
            drawer ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-ivory/10 px-6 py-5">
            <h2 className="label text-ivory">Filter the collection</h2>
            <button
              type="button"
              onClick={() => setDrawer(false)}
              className="flex h-10 w-10 items-center justify-center text-ivory"
              aria-label="Close filters"
            >
              <IconClose />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <Filters state={filters} set={setFilters} />
          </div>
          <div className="border-t border-ivory/10 p-6">
            <div className="flex gap-3">
              {activeCount > 0 && (
                <button type="button" onClick={() => setFilters({})} className="btn-secondary flex-1">
                  Clear ({activeCount})
                </button>
              )}
              <button type="button" onClick={() => setDrawer(false)} className="btn-primary flex-1">
                Show {filtered.length} pieces
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}