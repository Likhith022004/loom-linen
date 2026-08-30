export const px = (id, w = 1200, h, fit = 'crop') =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}${
    h ? `&h=${h}` : ''
  }&fit=${fit}&dpr=1`

export const uid = () => Math.random().toString(36).slice(2, 9)

export const inr = (n) =>
  '₹' + n.toLocaleString('en-IN', { maximumFractionDigits: 0 })