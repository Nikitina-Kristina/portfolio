import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const items = [['about', 'Обо мне'], ['cases', 'Кейсы'], ['skills', 'Навыки'], ['experience', 'Опыт'], ['contacts', 'Контакты']]

export default function Header() {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [past, setPast] = useState(false)
  const [active, setActive] = useState(null)
  useEffect(() => {
    const on = () => {
      setPast(window.scrollY > 520)
      if (pathname !== '/') return setActive(null)
      const line = window.innerHeight * 0.4
      let cur = null
      for (const [id] of items) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) cur = id
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = 'contacts'
      setActive(cur)
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [pathname])
  const glass = pathname === '/' && !past
  const go = (id) => {
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    if (pathname === '/') scroll()
    else { nav('/'); setTimeout(scroll, 150) }
  }
  return (
    <header className="fixed inset-x-0 top-4 z-30 flex justify-center px-4">
      <nav className={`flex max-w-full items-center gap-1 overflow-x-auto rounded-full border p-1.5 text-sm font-medium text-white backdrop-blur-xl transition-colors duration-300 ${glass ? 'border-white/10 bg-white/15' : 'border-white/15 bg-night/85 shadow-lg shadow-black/20'}`}>
        <Link to="/" className="whitespace-nowrap rounded-full px-4 py-2 font-bold hover:bg-white/10">Кристина Никитина</Link>
        {items.map(([id, label]) => (
          <button key={id} onClick={() => go(id)} className={`whitespace-nowrap rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white ${active === id ? 'bg-white/15 text-white' : 'text-white/75'}`}>{label}</button>
        ))}
      </nav>
    </header>
  )
}
