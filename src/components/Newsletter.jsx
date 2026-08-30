import { useState } from 'react'
import Reveal from './Reveal'
import { useStore } from '../context/StoreContext'

export default function Newsletter({ compact = false }) {
  const { pushToast } = useStore()
  const [email, setEmail] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      pushToast('Please enter a valid email', 'accent')
      return
    }
    setEmail('')
    pushToast('Welcome to the loom. Your first letter is on its way.')
  }

  return (
    <section id="letter" className="hairline-x relative scroll-mt-24 overflow-hidden bg-charcoalDeep">
      <div className="container-luxe py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="overline flex items-center justify-center gap-3">
              <span className="inline-block h-px w-8 bg-terracotta" />
              The Loom Letter
              <span className="inline-block h-px w-8 bg-terracotta" />
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ivory sm:text-5xl">
              Letters from the atelier, not the inbox.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-sand">
              New cloth, limited embroideries and the stories of the people who make them. One
              considered letter a month. No noise.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <form onSubmit={submit} className="mx-auto mt-10 max-w-md">
              <div className="flex items-end gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="input-luxe text-center md:text-left"
                  aria-label="Email address"
                />
                <button type="submit" className="btn-primary shrink-0">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-[11px] leading-relaxed text-taupe">
                By subscribing you agree to receiving our letters. Unsubscribe anytime.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}