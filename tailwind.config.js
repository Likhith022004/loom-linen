/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#202325',
        charcoalDeep: '#191B1D',
        nearblack: '#16120D',
        ivory: '#E6E1D3',
        taupe: '#947961',
        sand: '#ABA090',
        beige: '#C3A88D',
        brown: '#573B2A',
        terracotta: '#AB6246',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.22em',
        wide2: '0.3em',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        prose: '65ch',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}