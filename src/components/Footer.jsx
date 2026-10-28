import { profile } from '../data/data.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="wrap font-mono text-xs text-muted">© {new Date().getFullYear()} {profile.name}</div>
    </footer>
  )
}
