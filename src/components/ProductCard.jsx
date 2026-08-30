import { Link } from 'react-router-dom'
import { px, inr } from '../lib/images'
import { useStore } from '../context/StoreContext'
import { IconHeart } from './icons'

export default function ProductCard({ product, reveal = false, className = '' }) {
  const { wishlist, toggleWishlist } = useStore()
  const wished = wishlist.includes(product.slug)
  const hover = product.images[1] || product.images[0]

  return (
    <div className={`group relative flex flex-col ${className}`}>
      <Link
        to={`/product/${product.slug}`}
        className="relative block overflow-hidden bg-charcoalDeep"
        aria-label={product.name}
      >
        <div className="aspect-[3/4] w-full">
          <img
            src={px(product.images[0], 900, 1200)}
            alt={product.name}
            loading="lazy"
            className="img-grade card-hover absolute inset-0 h-full w-full object-cover"
          />
          <img
            src={px(hover, 900, 1200)}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="img-grade absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-luxe group-hover:opacity-100"
          />
        </div>

        {(product.new || product.handcrafted) && (
          <div className="absolute left-0 top-0 flex flex-col items-start gap-1.5 p-4">
            {product.new && (
              <span className="bg-nearblack/70 px-2.5 py-1 text-[9px] uppercase tracking-label text-ivory backdrop-blur-sm">
                New
              </span>
            )}
            {product.handcrafted && (
              <span className="bg-terracotta px-2.5 py-1 text-[9px] uppercase tracking-label text-ivory">
                Handcrafted
              </span>
            )}
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 hidden translate-y-full p-5 transition-transform duration-500 ease-luxe group-hover:translate-y-0 md:block">
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-label text-ivory">
            View & order
            <span className="h-px w-6 bg-terracotta" />
          </span>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => toggleWishlist(product.slug)}
        aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
        className={`absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
          wished
            ? 'border-terracotta/60 bg-nearblack/60 text-terracotta'
            : 'border-ivory/20 bg-nearblack/40 text-ivory opacity-0 group-hover:opacity-100'
        } hover:border-terracotta`}
      >
        <IconHeart filled={wished} width={16} height={16} />
      </button>

      <div className="flex items-start justify-between gap-4 pt-5">
        <div className="min-w-0">
          <h3 className="truncate font-display text-[19px] leading-snug text-ivory">
            {product.name}
          </h3>
          <p className="mt-1 truncate text-[12px] font-light text-sand">{product.line}</p>
        </div>
        <p className="shrink-0 pt-1 text-[13px] tracking-wide text-beige">{inr(product.price)}</p>
      </div>
    </div>
  )
}