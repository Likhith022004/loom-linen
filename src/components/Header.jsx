import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { IconSearch, IconAccount, IconHeart, IconBag, IconMenu, IconClose } from './icons'
import { useStore } from '../context/StoreContext'

const links = [
  { to: '/shop?cat=women', label: 'Women', match: 'women' },
  { to: '/shop?cat=men', label: 'Men', match: 'men' },
  { to: '/shop', label: 'Collections', match: null },
  { to: '/craft', label: 'Craft', match: 'path' },
  { to: '/about', label: 'About', match: 'path' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const { cartCount } = useStore()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menu])

  useEffect(() => {
    setMenu(false)
  }, [location.pathname, location.search])

  const isActive = (l) => {
    const path = l.to.split('?')[0]
    if (l.match === null)
      return location.pathname === '/shop' && !new URLSearchParams(location.search).get('cat')
    if (l.match === 'path') return location.pathname === path
    return location.pathname === '/shop' && new URLSearchParams(location.search).get('cat') === l.match
  }

  return (
    <>
      <div className="relative z-50 bg-nearblack">
        <p className="container-luxe py-2 text-center text-[10px] uppercase tracking-[0.24em] text-ivory/60">
          Complimentary delivery across India on orders above&nbsp;₹4,000&nbsp;·&nbsp;Made in small
          batches
        </p>
      </div>

      <header
        className={`sticky top-0 z-40 border-b transition-all duration-500 ${
          scrolled
            ? 'header-solid border-ivory/10'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="container-luxe flex h-[68px] items-center justify-between gap-6">
          <div className="flex flex-1 items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMenu(true)}
              className="-ml-2 flex h-11 w-11 items-center justify-center text-ivory"
              aria-label="Open menu"
            >
              <IconMenu />
            </button>
          </div>

          <div className="flex-1 lg:flex-none">
            <Logo />
          </div>

          <nav
            className="hidden flex-1 justify-center gap-9 lg:flex"
            aria-label="Primary"
          >
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={`link-underline text-[11px] uppercase tracking-label transition-colors hover:text-ivory ${
                  isActive(l) ? 'is-active text-ivory' : 'text-ivory/80'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-6 text-ivory lg:gap-7">
            <button
              type="button"
              onClick={() => navigate('/search')}
              className="hidden items-center gap-2 text-[10px] uppercase tracking-label transition-colors hover:text-terracotta lg:flex"
              aria-label="Search"
            >
              <IconSearch />
            </button>
            <button
              type="button"
              onClick={() => navigate('/search')}
              className="-mr-1 flex h-10 w-10 items-center justify-center hover:text-terracotta lg:hidden"
              aria-label="Search"
            >
              <IconSearch width={18} height={18} />
            </button>
            <Link to="/account" className="hidden lg:block" aria-label="Account">
              <IconAccount className="transition-colors hover:text-terracotta" />
            </Link>
            <Link to="/wishlist" className="hidden lg:block" aria-label="Wishlist">
              <IconHeart className="transition-colors hover:text-terracotta" />
            </Link>
            <Link to="/cart" aria-label="Shopping bag" className="transition-colors hover:text-terracotta">
              <IconBag count={cartCount} />
            </Link>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={`fade-layer fixed inset-0 z-[60] transition-opacity ${
          menu ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-nearblack/80 backdrop-blur-sm" onClick={() => setMenu(false)} />
        <div
          className={`slide-panel absolute left-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-charcoalDeep ${
            menu ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex h-[68px] items-center justify-between border-b border-ivory/10 px-6">
            <Logo />
            <button
              type="button"
              onClick={() => setMenu(false)}
              className="flex h-10 w-10 items-center justify-center text-ivory"
              aria-label="Close menu"
            >
              <IconClose />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-between px-6 py-8" aria-label="Mobile">
            <div className="space-y-1">
              {links.map((l, i) => (
                <Link
                  key={l.label}
                  to={l.to}
                  style={{ transitionDelay: `${i * 40}ms` }}
                  className="block py-3 font-display text-3xl text-ivory transition-colors hover:text-beige"
                >
                  <span className="mr-3 align-middle text-[11px] tracking-label text-terracotta">
                    0{i + 1}
                  </span>
                  {l.label}
                </Link>
              ))}
            </div>
            <div>
              <div className="mb-6 flex gap-6 text-[11px] uppercase tracking-label text-sand">
                <Link to="/wishlist" className="hover:text-ivory">
                  Wishlist
                </Link>
                <Link to="/account" className="hover:text-ivory">
                  Account
                </Link>
              </div>
              <p className="text-[11px] leading-relaxed text-taupe">
                New cloth each month.
                <br />
                Timeless craft, modern soul.
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}