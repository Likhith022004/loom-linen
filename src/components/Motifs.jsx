import { useEffect, useRef } from 'react'

const PALETTE = {
  ivory: '#E6E1D3',
  taupe: '#947961',
  beige: '#C3A88D',
  brown: '#573B2A',
  terracotta: '#AB6246',
}

export const EMBROIDERY_PALETTE = [
  { name: 'Ivory', hex: PALETTE.ivory },
  { name: 'Taupe', hex: PALETTE.taupe },
  { name: 'Sand', hex: '#ABA090' },
  { name: 'Beige', hex: PALETTE.beige },
  { name: 'Brown', hex: PALETTE.brown },
  { name: 'Terracotta', hex: PALETTE.terracotta },
]

export const MOTIFS = [
  {
    id: 'begonia',
    name: 'Begonia Stem',
    note: 'A single flowering stem, drawn freehand along the shoulder seam.',
    paths: [
      'M180 400 C 150 332 200 310 187 258 C 174 206 208 178 196 122 C 188 84 202 44 212 22',
      'M187 318 C 156 306 146 282 165 264',
      'M181 252 C 148 242 140 216 160 199',
      'M190 192 C 224 184 235 158 216 141',
      'M197 136 C 232 128 244 100 226 84',
      'M212 58 C 240 50 254 30 238 16',
    ],
  },
  {
    id: 'lotus',
    name: 'Night Lotus',
    note: 'An open lotus after the monsoon — five petals and a rising stem.',
    paths: [
      'M180 300 C 118 240 120 142 180 122',
      'M180 300 C 242 240 240 142 180 122',
      'M180 300 C 150 224 150 154 180 132',
      'M180 300 C 210 224 210 154 180 132',
      'M180 122 C 168 92 192 92 180 122',
      'M180 300 C 180 340 172 364 142 400',
      'M180 300 C 180 352 200 374 240 400',
    ],
  },
  {
    id: 'peepal',
    name: 'Peepal Vein',
    note: 'The peepal leaf reduced to its skeleton — outline, spine and a few veins.',
    paths: [
      'M180 340 C 60 300 72 140 180 42 C 288 140 300 300 180 340',
      'M180 340 C 180 262 182 184 180 58',
      'M182 300 C 212 300 232 288 242 272',
      'M180 252 C 142 248 122 234 112 218',
      'M181 200 C 216 196 236 180 246 162',
      'M180 148 C 146 142 128 128 120 112',
    ],
  },
  {
    id: 'iwan',
    name: 'Iwan Arch',
    note: 'A cusped arch borrowed from a prayer hall — abstracted into a gate.',
    paths: [
      'M40 360 C 40 152 130 62 180 62 C 230 62 320 152 320 360',
      'M78 360 C 78 178 150 104 180 104 C 210 104 282 178 282 360',
      'M40 360 H 320',
      'M78 360 H 282',
      'M40 370 H 320',
    ],
  },
  {
    id: 'flow',
    name: 'The One Line',
    note: 'An unbroken line — part stem, part figure — drawn with a single breath of thread.',
    paths: [
      'M52 384 C 84 320 66 262 106 240 C 146 218 136 180 118 160 C 100 140 128 108 158 120 C 188 132 182 92 212 92 C 242 92 252 132 262 170 C 272 208 302 228 322 248',
      'M52 384 C 72 314 92 258 132 246 C 172 234 168 198 152 180 C 136 162 158 136 182 146 C 206 156 204 122 230 124 C 256 126 262 160 268 196',
    ],
  },
]

export function Motif({ motif, color, className = '', size = 300, animate = true }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!animate) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('motif-visible')
          io.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [animate])

  return (
    <svg
      ref={ref}
      viewBox="0 0 360 420"
      className={`motif-svg ${animate ? '' : 'motif-visible'} ${className}`}
      style={{ width: size, height: size * 1.166 }}
      role="img"
      aria-label={`Embroidery motif — ${motif.name}`}
    >
      {motif.paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={color || PALETTE.terracotta}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transitionDelay: `${i * 220}ms` }}
        />
      ))}
      <circle cx="180" cy="410" r="2.4" fill={color || PALETTE.ivory} opacity="0.7" />
    </svg>
  )
}