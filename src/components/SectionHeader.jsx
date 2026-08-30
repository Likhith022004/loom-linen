import Reveal from './Reveal'

export default function SectionHeader({
  overline,
  title,
  intro,
  link,
  linkLabel,
  align = 'left',
  className = '',
}) {
  return (
    <div
      className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <Reveal className={align === 'center' ? 'mx-auto text-center' : 'max-w-2xl'}>
        <p className="overline flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-terracotta" />
          {overline}
        </p>
        <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {intro && <p className="mt-5 max-w-md text-[15px] leading-relaxed text-sand">{intro}</p>}
      </Reveal>
      {link && (
        <Reveal delay={120} className={align === 'center' ? 'mx-auto' : ''}>
          <a href={link} className="btn-ghost link-underline text-[11px] uppercase tracking-label">
            {linkLabel || 'View all'}
          </a>
        </Reveal>
      )}
    </div>
  )
}