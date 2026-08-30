import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { products } from '../data/products'

const StoreContext = createContext(null)

const read = (k, fb) => {
  try {
    const v = localStorage.getItem(k)
    return v ? JSON.parse(v) : fb
  } catch {
    return fb
  }
}
const write = (k, v) => {
  try {
    localStorage.setItem(k, JSON.stringify(v))
  } catch {
    /* ignore */
  }
}

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => read('ll_cart', []))
  const [wishlist, setWishlist] = useState(() => read('ll_wishlist', []))
  const [toasts, setToasts] = useState([])
  const timers = useRef({})

  useEffect(() => write('ll_cart', cart), [cart])
  useEffect(() => write('ll_wishlist', wishlist), [wishlist])

  const pushToast = useCallback((message, tone = 'default') => {
    const id = Math.random().toString(36).slice(2)
    setToasts((t) => [...t, { id, message, tone }])
    timers.current[id] = setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id))
    }, 2600)
  }, [])

  const addItem = useCallback(
    (productId, { size, color } = {}, qty = 1) => {
      const key = `${productId}|size=${size}|color=${color}`
      setCart((c) => {
        const found = c.find((i) => i.key === key)
        if (found) return c.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i))
        return [...c, { key, productId, size, color, qty }]
      })
      const p = products.find((x) => x.slug === productId)
      pushToast(`${p ? p.name.split(' ').slice(0, 2).join(' ') : 'Item'} added to bag`)
    },
    [pushToast]
  )

  const updateQty = useCallback((key, qty) => {
    setCart((c) =>
      qty <= 0 ? c.filter((i) => i.key !== key) : c.map((i) => (i.key === key ? { ...i, qty } : i))
    )
  }, [])

  const removeItem = useCallback((key) => setCart((c) => c.filter((i) => i.key !== key)), [])

  const clearCart = useCallback(() => setCart([]), [])

  const toggleWishlist = useCallback(
    (productId) => {
      setWishlist((w) => {
        const inList = w.includes(productId)
        if (inList) {
          pushToast('Removed from wishlist')
          return w.filter((x) => x !== productId)
        }
        pushToast('Saved to wishlist', 'accent')
        return [...w, productId]
      })
    },
    [pushToast]
  )

  const cartCount = cart.reduce((n, i) => n + i.qty, 0)
  const subtotal = cart.reduce((n, i) => {
    const p = products.find((x) => x.slug === i.productId)
    return n + (p ? p.price * i.qty : 0)
  }, 0)

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      toasts,
      cartCount,
      subtotal,
      addItem,
      updateQty,
      removeItem,
      clearCart,
      toggleWishlist,
      pushToast,
    }),
    [cart, wishlist, toasts, cartCount, subtotal, addItem, updateQty, removeItem, clearCart, toggleWishlist, pushToast]
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)