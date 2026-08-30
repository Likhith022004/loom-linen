import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export function Mark({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={`h-8 w-8 ${className}`} aria-hidden="true">
      <path
        d="M10 20c0 1 6 28 22 28s22-27 22-28"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M10 26c0 1 5 22 22 22s22-21 22-22"
        stroke="var(--terracotta)"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <line x1="32" y1="3" x2="32" y2="10" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="LOOM &amp; LINEN — home">
      <Mark className="text-ivory transition-transform duration-700 ease-luxe group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[13px] font-normal tracking-[0.34em] uppercase ${
            light ? 'text-ivory' : 'text-ivory'
          }`}
        >
          LOOM&nbsp;&amp;&nbsp;LINEN
        </span>
        <span className="mt-1 text-[8px] uppercase tracking-[0.42em] text-taupe">
          Timeless Craft
        </span>
      </span>
    </Link>
  )
}