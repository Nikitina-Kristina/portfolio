import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setOn(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect() }
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${on ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${className}`}>
      {children}
    </div>
  )
}
