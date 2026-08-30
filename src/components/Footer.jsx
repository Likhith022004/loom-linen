import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo, { Mark } from './Logo'
import { useStore } from '../context/StoreContext'

const cols = [
  {
    title: 'Shop',
    items: [
      ['New Arrivals', '/shop?cat=new'],
      ['Women', '/shop?cat=women'],
      ['Men', '/shop?cat=men'],
      ['Linen', '/shop?cat=linen'],
      ['Embroidered', '/shop?cat=embroidered'],
      ['Accessories', '/shop?cat=accessories'],
    ],
  },
  {
    title: 'House',
    items: [
      ['Our Story', '/about'],
      ['The Craft', '/craft'],
      ['The Loom Letter', '/#letter'],
      ['Size Guide', '/craft'],
      ['Stockists', '/about'],
    ],
  },
  {
    title: 'Care',
    items: [
      ['Shipping & Delivery', '/cart'],
      ['Returns & Exchanges', '/cart'],
      ['Care Guide', '/craft'],
      ['Contact', '/about'],
      ['FAQ', '/about'],
    ],
  },
]

export default function Footer() {
  const { pushToast } = useStore()
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-nearblack">
      <div className="container-luxe">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-20">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-[13px] leading-relaxed text-sand">
              Contemporary Indian garments, woven and embroidered by hand — presented in a modern
              language.
            </p>
            <blockquote className="mt-8 border-l border-terracotta pl-5">
              <p className="font-display text-xl italic text-beige">“Timeless craft, modern soul.”</p>
            </blockquote>
            <div className="mt-8 flex gap-4">
              {['Instagram', 'Pinterest', 'Journal'].map((s) => (
                <button
                  key={s}
                  type="button"
                  className="text-[10px] uppercase tracking-label text-sand transition-colors hover:text-ivory"
                  onClick={() => pushToast(`@loomandlinen on ${s}`)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h3 className="overline">{c.title}</h3>
              <ul className="mt-6 space-y-3.5">
                {c.items.map(([label, to]) => (
                  <li key={label}>
                    <Link to={to} className="link-underline text-[13px] text-ivory/75 hover:text-ivory">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-6 border-t border-ivory/10 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] text-taupe">
            © {new Date().getFullYear()} LOOM &amp; LINEN · Crafted in India
          </p>
          <form
            className="flex items-end gap-3"
            onSubmit={(e) => {
              e.preventDefault()
              if (!/^\S+@\S+\.\S+$/.test(email)) return pushToast('Please enter a valid email', 'accent')
              setEmail('')
              pushToast('Welcome to the loom.')
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Join the Loom Letter"
              className="input-luxe"
              aria-label="Email"
            />
            <button type="submit" className="btn-secondary px-5">
              Join
            </button>
          </form>
          <div className="flex items-center gap-3 text-[11px] text-taupe">
            <span className="font-display text-sm italic text-beige">Est. New Delhi</span>
            <Mark className="h-5 w-5 opacity-60" />
          </div>
        </div>
      </div>
    </footer>
  )
}