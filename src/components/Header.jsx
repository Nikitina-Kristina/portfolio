import { Link, useLocation, useNavigate } from 'react-router-dom'

const items = [['about', 'Обо мне'], ['cases', 'Кейсы'], ['skills', 'Навыки'], ['experience', 'Опыт'], ['contacts', 'Контакты']]

export default function Header() {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const go = (id) => {
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    if (pathname === '/') scroll()
    else { nav('/'); setTimeout(scroll, 150) }
  }
  return (
    <header className="fixed inset-x-0 top-4 z-30 flex justify-center px-4">
      <nav className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/15 bg-night/85 p-1.5 text-sm font-medium text-white shadow-lg shadow-black/20 backdrop-blur">
        <Link to="/" className="whitespace-nowrap rounded-full px-4 py-2 font-bold hover:bg-white/10">Кристина Никитина</Link>
        {items.map(([id, label]) => (
          <button key={id} onClick={() => go(id)} className="whitespace-nowrap rounded-full px-4 py-2 text-white/75 transition hover:bg-white/10 hover:text-white">{label}</button>
        ))}
      </nav>
    </header>
  )
}
