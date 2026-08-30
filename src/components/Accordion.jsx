import { useState } from 'react'
import { IconPlus } from './icons'

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="divide-y divide-ivory/10 border-y border-ivory/10">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="label text-ivory">{item.title}</span>
              <IconPlus
                className={`text-taupe transition-transform duration-500 ease-luxe ${
                  isOpen ? 'rotate-45' : ''
                }`}
                width={15}
                height={15}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-500 ease-luxe"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="pb-6">
                  {item.rows ? (
                    <dl className="space-y-3">
                      {item.rows.map(([k, v]) => (
                        <div
                          key={k}
                          className="flex items-start justify-between gap-6 text-[13px]"
                        >
                          <dt className="text-sand">{k}</dt>
                          <dd className="text-right text-ivory/85">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : (
                    <p className="max-w-md text-[13px] leading-relaxed text-sand">{item.body}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}