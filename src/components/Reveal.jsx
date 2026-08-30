import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div', ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function RevealLine({ text, as: Tag = 'span', delay = 0, className = '' }) {
  return (
    <span className="reveal-line" style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}>
      <span className={className} style={{ display: 'inline-block' }}>
        {text}
      </span>
    </span>
  )
}