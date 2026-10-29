import { Link, useParams } from 'react-router-dom'
import { cases } from '../data/case-data.jsx'
import Img from '../components/Img.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Case() {
  const { slug } = useParams()
  const i = cases.findIndex((c) => c.slug === slug)
  const c = cases[i]
  if (!c) return <div className="wrap py-24"><Link to="/" className="underline">На главную</Link></div>
  const next = cases[(i + 1) % cases.length]

  return (
    <article className="wrap pb-12 pt-28 md:pb-20 md:pt-36">
      <Link to="/" className="font-mono text-sm text-muted hover:text-ink">← Все кейсы</Link>
      <div className="mt-8 flex flex-wrap gap-2">{c.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
      <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">{c.title}</h1>
      <p className="mt-4 flex flex-wrap items-baseline gap-x-3 text-muted"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 self-center text-iris" aria-hidden="true"><path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 10h5a1 1 0 0 1 1 1v10M3 21h18M8 8h2M8 12h2M8 16h2"/></svg><span className="text-xl font-extrabold text-ink md:text-2xl">{c.company}</span><span className="font-mono text-sm">{c.period}</span></p>
      <p className="mt-6 max-w-2xl text-lg text-muted">{c.role}</p>
      <Img src={c.cover} className="my-10" />

      <div className="max-w-3xl">
        {c.sections.map((s) => (
          <Reveal key={s.h} className="mt-14">
            <h2 className="text-2xl font-extrabold md:text-3xl">{s.h}</h2>
            {s.p?.map((t, k) => <p key={k} className="mt-4 leading-relaxed text-ink/90">{t}</p>)}
            {s.list && (
              <ul className="mt-4 space-y-3">
                {s.list.map((t, k) => (
                  <li key={k} className="relative pl-5 leading-relaxed text-ink/90">
                    <span className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-amber" />
                    {typeof t === 'string' ? t : <><b className="font-bold text-ink">{t.b}</b> {t.t}</>}
                  </li>
                ))}
              </ul>
            )}
            {s.p2?.map((t, k) => <p key={k} className="mt-4 leading-relaxed text-ink/90">{t}</p>)}
            {s.subs?.map((u) => (
              <div key={u.h} className="mt-10">
                <h3 className="text-xl font-extrabold">{u.h}</h3>
                {u.p?.map((x, k) => <p key={k} className="mt-3 leading-relaxed text-ink/90">{x}</p>)}
                {u.img?.map((im) => <Img key={im.src} src={im.src} caption={im.caption} />)}
                {u.p2?.map((x, k) => <p key={k} className="mt-6 leading-relaxed text-ink/90">{x}</p>)}
                {u.img2?.map((im) => <Img key={im.src} src={im.src} caption={im.caption} />)}
              </div>
            ))}
            {s.img?.map((im) => <Img key={im.src} src={im.src} caption={im.caption} />)}
          </Reveal>
        ))}
      </div>

      <div className="mt-20 border-t border-line pt-10">
        <p className="font-mono text-xs text-muted">Следующий кейс</p>
        <Link to={`/case/${next.slug}`} className="mt-2 block text-2xl font-extrabold hover:underline">{next.title} →</Link>
      </div>
    </article>
  )
}
