const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1,
  strokeLinecap: 'square',
  strokeLinejoin: 'miter',
}

export const IconSearch = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <line x1="15.8" y1="15.8" x2="21" y2="21" />
  </svg>
)

export const IconAccount = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M5 20.5c.8-3.4 3.6-5.2 7-5.2s6.2 1.8 7 5.2" />
  </svg>
)

export const IconHeart = ({ filled, ...p }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path
      d="M12 20.5s-8-4.8-8-10.3C4 7.2 6.2 5 8.8 5c1.6 0 2.7.8 3.2 1.9C12.6 5.8 13.7 5 15.2 5 17.8 5 20 7.2 20 10.2c0 5.5-8 10.3-8 10.3z"
      fill={filled ? 'currentColor' : 'none'}
    />
  </svg>
)

export const IconBag = ({ count, ...p }) => (
  <span className="relative inline-flex" aria-label={count ? `${count} items in bag` : 'Shopping bag'}>
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
      <path d="M5 8h14l1 13H4L5 8z" />
      <path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8" />
    </svg>
    {count > 0 && (
      <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-terracotta px-1 text-[9px] leading-none text-ivory">
        {count}
      </span>
    )}
  </span>
)

export const IconMenu = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <line x1="3" y1="8" x2="21" y2="8" />
    <line x1="3" y1="16" x2="21" y2="16" />
  </svg>
)

export const IconClose = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
)

export const IconArrow = ({ right, ...p }) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    {...base}
    style={{ transform: right ? 'rotate(0deg)' : 'rotate(180deg)' }}
    {...p}
  >
    <line x1="3" y1="12" x2="20" y2="12" />
    <polyline points="14 6 20 12 14 18" />
  </svg>
)

export const IconPlus = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

export const IconMinus = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

export const IconChevron = ({ up, ...p }) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    {...base}
    style={{ transform: up ? 'rotate(-90deg)' : 'rotate(90deg)' }}
    {...p}
  >
    <polyline points="9 6 15 12 9 18" />
  </svg>
)

export const IconTick = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <polyline points="4 13 10 19 20 7" />
  </svg>
)