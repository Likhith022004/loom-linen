import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { IconArrow, IconPlus, IconMinus } from '../components/icons'
import { px, inr } from '../lib/images'
import { getProduct } from '../data/products'
import { useStore } from '../context/StoreContext'

const FREE_OVER = 4000
const FLAT_RATE = 199

export default function Cart() {
  const { cart, cartCount, subtotal, updateQty, removeItem, clearCart, pushToast } = useStore()

  const shipping = cart.length === 0 || subtotal >= FREE_OVER ? 0 : FLAT_RATE
  const total = subtotal + shipping
  const toFree = Math.max(0, FREE_OVER - subtotal)

  const rows = cart.map((i) => ({
    ...i,
    product: getProduct(i.productId),
  }))

  return (
    <div className="container-luxe py-12 lg:py-20">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="overline flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-terracotta" />
            Your selection
          </p>
          <h1 className="mt-4 font-display text-5xl text-ivory sm:text-6xl">The Bag</h1>
        </div>
        <p className="text-[11px] uppercase tracking-label text-taupe">
          {cartCount} {cartCount === 1 ? 'piece' : 'pieces'} · so far
        </p>
      </header>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center gap-6 py-28 text-center">
          <svg viewBox="0 0 24 24" className="h-10 w-10 text-taupe" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M5 8h14l1 13H4L5 8z" />
            <path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8" />
          </svg>
          <p className="font-display text-3xl italic text-beige">Your bag is resting.</p>
          <p className="max-w-sm text-sm leading-relaxed text-sand">
            The looms are still running. When you find the piece, it will be here, waiting patiently.
          </p>
          <Link to="/shop" className="btn-primary">
            Explore the collection
          </Link>
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_360px] lg:gap-0">
          {/* lines */}
          <div className="divide-y divide-ivory/10">
            {rows.map((r) => (
              <div key={r.key} className="grid grid-cols-[84px_1fr_auto] gap-5 py-8 sm:grid-cols-[110px_1fr_auto]">
                <Link to={`/product/${r.product.slug}`} className="overflow-hidden">
                  <img
                    src={px(r.product.images[0], 260, 340)}
                    alt={r.product.name}
                    className="img-grade aspect-[3/4] w-full object-cover"
                  />
                </Link>

                <div className="flex min-w-0 flex-col justify-between">
                  <div>
                    <Link to={`/product/${r.product.slug}`} className="font-display text-xl leading-snug text-ivory hover:text-beige">
                      {r.product.name}
                    </Link>
                    <p className="mt-1.5 text-[11px] uppercase tracking-label text-sand">
                      {r.size} · {r.color}
                    </p>
                    {r.product.handcrafted && (
                      <p className="mt-1.5 text-[10px] uppercase tracking-label text-terracotta">
                        Made by hand
                      </p>
                    )}
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    <div className="flex items-center border border-ivory/20">
                      <button
                        type="button"
                        onClick={() => updateQty(r.key, r.qty - 1)}
                        className="flex h-10 w-10 items-center justify-center text-ivory hover:text-terracotta"
                        aria-label="Decrease quantity"
                      >
                        <IconMinus />
                      </button>
                      <span className="w-8 text-center text-sm text-ivory">{r.qty}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(r.key, r.qty + 1)}
                        className="flex h-10 w-10 items-center justify-center text-ivory hover:text-terracotta"
                        aria-label="Increase quantity"
                      >
                        <IconPlus />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(r.key)}
                      className="link-underline text-[10px] uppercase tracking-label text-taupe hover:text-terracotta"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <p className="text-right text-[14px] text-beige">{inr(r.product.price * r.qty)}</p>
              </div>
            ))}

            <div className="flex flex-wrap items-center justify-between gap-4 py-8">
              <Link to="/shop" className="btn-ghost group inline-flex items-center gap-3">
                <IconArrow className="transition-transform duration-500 ease-luxe group-hover:-translate-x-1" />
                Continue shopping
              </Link>
              <button
                type="button"
                onClick={() => {
                  clearCart()
                  pushToast('Bag emptied for a fresh start')
                }}
                className="link-underline text-[10px] uppercase tracking-label text-taupe hover:text-terracotta"
              >
                Empty bag
              </button>
            </div>
          </div>

          {/* summary */}
          <aside className="lg:border-l lg:border-ivory/10 lg:pl-14">
            <Reveal>
              <h2 className="label text-ivory">Order summary</h2>

              <div className="mt-6 space-y-4 border-b border-ivory/10 pb-6 text-[13px]">
                <div className="flex justify-between">
                  <span className="text-sand">Subtotal</span>
                  <span className="text-ivory">{inr(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sand">Shipping</span>
                  <span className="text-ivory">
                    {shipping === 0 ? <em className="italic text-beige">Complimentary</em> : inr(shipping)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-ivory/10 pt-4 text-[15px]">
                  <span className="text-ivory">Total</span>
                  <span className="font-display text-xl text-ivory">{inr(total)}</span>
                </div>
              </div>

              {toFree > 0 && (
                <div className="mt-5 flex items-center gap-3 border border-ivory/10 px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-terracotta" />
                  <p className="text-[11px] leading-relaxed text-sand">
                    Add <span className="text-beige">{inr(toFree)}</span> more for complimentary
                    delivery.
                  </p>
                </div>
              )}

              <button type="button" onClick={() => pushToast('Checkout opens next — this is a design prototype')} className="btn-primary mt-7 w-full">
                Proceed to checkout
              </button>
              <p className="mt-4 text-center text-[11px] leading-relaxed text-taupe">
                Returns within 10 days · Made in small batches
              </p>

              <div className="mt-10 space-y-4">
                {[
                  ['Dispatch', 'Within 48 hours, in a reusable cotton pouch'],
                  ['Arrival', '3–6 working days across India'],
                  ['No plastics', 'Everything ships in cloth and paper'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between gap-6 text-[12px]">
                    <span className="shrink-0 uppercase tracking-label text-taupe">{k}</span>
                    <span className="text-right text-sand">{v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </aside>
        </div>
      )}
    </div>
  )
}