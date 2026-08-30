import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import { IconSearch } from '../components/icons'
import { searchProducts } from '../data/products'

const SUGGESTIONS = ['Linen', 'Hand Embroidery', 'New Arrivals', "Women's", "Men's"]

export default function Search() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const inputRef = useRef(null)
  const [touched, setTouched] = useState(false)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const results = useMemo(() => (q.trim() ? searchProducts(q) : []), [q])

  const setQ = (v) => {
    const p = new URLSearchParams()
    if (v) p.set('q', v)
    setParams(p, { replace: true })
  }

  return (
    <div className="container-luxe py-14 lg:py-20">
      {/* search bar */}
      <Reveal>
        <p className="overline text-center">Search the archive</p>
        <div className="mx-auto mt-6 max-w-3xl">
          <label htmlFor="search-input" className="sr-only">
            Search LOOM &amp; LINEN
          </label>
          <div className="flex items-end gap-4 border-b-2 border-ivory/25 pb-4 transition-colors focus-within:border-terracotta">
            <IconSearch className="shrink-0 text-sand" width={26} height={26} />
            <input
              id="search-input"
              ref={inputRef}
              type="text"
              value={q}
              onChange={(e) => {
                setQ(e.target.value)
                setTouched(true)
              }}
              placeholder="What are you looking for?"
              className="w-full bg-transparent font-display text-3xl font-light text-ivory placeholder:text-sand/50 outline-none sm:text-4xl"
            />
            {q && (
              <button
                type="button"
                onClick={() => setQ('')}
                className="shrink-0 text-[10px] uppercase tracking-label text-taupe hover:text-ivory"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </Reveal>

      {/* suggestions */}
      {!q && (
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
          <span className="text-[10px] uppercase tracking-label text-taupe">Try:</span>
          {SUGGESTIONS.map((s) => (
            <Link
              key={s}
              to={`/search?q=${encodeURIComponent(s)}`}
              className="border border-ivory/15 px-4 py-2 text-[10px] uppercase tracking-label text-sand transition-colors hover:border-terracotta hover:text-ivory"
            >
              {s}
            </Link>
          ))}
        </div>
      )}

      {/* results */}
      <div className="mt-16">
        {q && (
          <p className="mb-10 text-center text-[11px] uppercase tracking-label text-taupe">
            {results.length} {results.length === 1 ? 'result' : 'results'} for “{q}”
          </p>
        )}

        {q && results.length === 0 && touched && (
          <div className="flex flex-col items-center gap-6 py-16 text-center">
            <p className="font-display text-3xl italic text-beige">Not in this archive.</p>
            <p className="max-w-sm text-sm leading-relaxed text-sand">
              We could not find “{q}” in the collection. Try a single word — linen, kurta, stole,
              jacket — or browse the whole collection.
            </p>
            <Link to="/shop" className="btn-secondary">
              Browse the collection
            </Link>
          </div>
        )}

        {q && results.length > 0 && (
          <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-4">
            {results.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 70}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}