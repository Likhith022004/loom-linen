import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import { getProduct } from '../data/products'
import { useStore } from '../context/StoreContext'

export default function Wishlist() {
  const { wishlist } = useStore()
  const items = wishlist.map(getProduct).filter(Boolean)

  return (
    <div className="container-luxe py-12 lg:py-20">
      <header>
        <p className="overline flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-terracotta" />
          Kept for later
        </p>
        <h1 className="mt-4 font-display text-5xl text-ivory sm:text-6xl">Wishlist</h1>
        <p className="mt-3 text-[13px] uppercase tracking-label text-taupe">
          {items.length} {items.length === 1 ? 'piece' : 'pieces'} you are thinking about
        </p>
      </header>

      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-6 py-28 text-center">
          <svg viewBox="0 0 24 24" className="h-10 w-10 text-taupe" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 20.5s-8-4.8-8-10.3C4 7.2 6.2 5 8.8 5c1.6 0 2.7.8 3.2 1.9C12.6 5.8 13.7 5 15.2 5 17.8 5 20 7.2 20 10.2c0 5.5-8 10.3-8 10.3z" />
          </svg>
          <p className="font-display text-3xl italic text-beige">Nothing saved — yet.</p>
          <p className="max-w-sm text-sm leading-relaxed text-sand">
            Tap the heart on any piece to keep it here. Considered purchases deserve a little time.
          </p>
          <Link to="/shop" className="btn-primary">
            Browse the collection
          </Link>
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 70}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}