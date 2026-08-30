import { useStore } from '../context/StoreContext'

export default function Toasts() {
  const { toasts } = useStore()
  return (
    <div
      className="pointer-events-none fixed bottom-6 left-1/2 z-[80] flex -translate-x-1/2 flex-col items-center gap-2"
      aria-live="polite"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`fade-up flex items-center gap-3 border px-5 py-3 text-[11px] uppercase tracking-label backdrop-blur-md ${
            t.tone === 'accent'
              ? 'border-terracotta/50 bg-nearblack/80 text-beige'
              : 'border-ivory/20 bg-nearblack/85 text-ivory'
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${t.tone === 'accent' ? 'bg-terracotta' : 'bg-beige'}`} />
          {t.message}
        </div>
      ))}
    </div>
  )
}