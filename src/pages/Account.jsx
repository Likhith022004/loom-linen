import { useState } from 'react'
import Reveal from '../components/Reveal'
import { px } from '../lib/images'
import { useStore } from '../context/StoreContext'

export default function Account() {
  const { pushToast } = useStore()
  const [tab, setTab] = useState('signin')
  const [email, setEmail] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return pushToast('Please enter a valid email', 'accent')
    pushToast(tab === 'signin' ? 'Welcome back — this prototype does not keep secrets.' : 'Account created in spirit. Welcome to the loom.')
  }

  return (
    <div className="container-luxe py-14 lg:py-24">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="hidden lg:block">
          <div className="relative overflow-hidden">
            <img
              src={px(6731622, 1000, 1250)}
              alt="Portrait of a craftswoman in the atelier"
              loading="lazy"
              className="img-grade aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="mx-auto w-full max-w-md">
          <Reveal>
            <p className="overline flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-terracotta" />
              The Members’ Desk
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
              {tab === 'signin' ? 'Welcome back' : 'Keep a chair for you'}
            </h1>
            <p className="mt-4 text-[14px] leading-relaxed text-sand">
              {tab === 'signin'
                ? 'Sign in to follow orders, keep your wishlist and write to the atelier.'
                : 'Create an account to store your wishlist, track stitches and receive the Loom Letter.'}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 flex gap-6 border-b border-ivory/10">
              {['signin', 'register'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`link-underline pb-3 text-[11px] uppercase tracking-label ${
                    tab === t ? 'is-active text-ivory' : 'text-sand hover:text-ivory'
                  }`}
                >
                  {t === 'signin' ? 'Sign in' : 'Register'}
                </button>
              ))}
            </div>

            <form onSubmit={submit} className="mt-8 space-y-7">
              <div>
                <label htmlFor="email" className="label text-ivory">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-luxe mt-2"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="label text-ivory">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="input-luxe mt-2"
                  placeholder="Eight characters of calm"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                {tab === 'signin' ? 'Sign in' : 'Create account'}
              </button>
              <p className="text-center text-[11px] leading-relaxed text-taupe">
                A design-prototype only — no data is stored or sent anywhere.
                <br />
                We value your quiet almost as much as our own.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  )
}