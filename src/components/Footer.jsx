import { profile } from '../data/data.jsx'

export default function Footer({ embedded = false }) {
  const inner = (
    <div className={embedded ? 'wrap pb-10' : 'wrap'}>
      <div className={embedded ? 'border-t border-white/15 pt-8 text-xs text-white/70' : 'text-xs text-white/55'}>© {new Date().getFullYear()} {profile.name}</div>
    </div>
  )
  if (embedded) return <footer>{inner}</footer>
  return <footer className="border-t border-white/10 bg-night py-10">{inner}</footer>
}
