import { Link, useLocation, useNavigate } from 'react-router-dom'
import { profile } from '../data/data.jsx'

export default function Header() {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const go = (id) => {
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    if (pathname === '/') scroll()
    else { nav('/'); setTimeout(scroll, 150) }
  }
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bone/85 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link to="/" className="font-bold">{profile.name}</Link>
        <nav className="flex gap-1 text-sm font-medium">
          {[['cases', 'Кейсы'], ['experience', 'Опыт'], ['contacts', 'Контакты']].map(([id, label]) => (
            <button key={id} onClick={() => go(id)} className="rounded-full px-4 py-2 text-muted transition hover:bg-card hover:text-ink">{label}</button>
          ))}
        </nav>
      </div>
    </header>
  )
}
