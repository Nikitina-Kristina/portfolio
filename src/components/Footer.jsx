import { profile } from '../data/data.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night py-10">
      <div className="wrap text-xs text-white/55">© {new Date().getFullYear()} {profile.name}</div>
    </footer>
  )
}
