import { Link } from 'react-router-dom'
import { profile, experience, others } from '../data/data.jsx'
import { cases } from '../data/case-data.jsx'
import { site, asset } from '../config.js'
import Reveal from '../components/Reveal.jsx'
import Img from '../components/Img.jsx'

const Title = ({ id, children }) => (
  <h2 id={id} className="scroll-mt-24 text-3xl font-extrabold md:text-4xl">{children}</h2>
)
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Home() {
  return (
    <>
      <section className="wrap pb-16 pt-20 md:pt-28">
        <p className="font-mono text-sm text-muted">{profile.role}</p>
        <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] md:text-7xl">{profile.name}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => scrollTo('cases')} className="btn btn-primary">Смотреть кейсы</button>
          <a href={`mailto:${site.email}`} className="btn btn-ghost">Написать мне</a>
        </div>
      </section>

      <section className="wrap py-16">
        <Reveal>
          <Title id="cases">Кейсы</Title>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {cases.map((c) => (
              <Link key={c.slug} to={`/case/${c.slug}`} className="card block p-4 transition hover:border-ink">
                <Img src={c.cover} className="" />
                <div className="px-2 pb-3 pt-4">
                  <div className="flex flex-wrap gap-2">{c.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                  <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
                  <p className="mt-1 font-mono text-xs text-muted">{c.company} · {c.period}</p>
                  <p className="mt-3 text-sm text-muted">{c.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="wrap py-16">
        <Reveal>
          <Title id="experience">Опыт</Title>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {experience.map((e) => (
              <div key={e.company + e.period} className="grid gap-2 py-6 md:grid-cols-[200px_1fr] md:gap-8">
                <p className="font-mono text-xs text-muted md:pt-1">{e.period}</p>
                <div>
                  <h3 className="font-bold">{e.role} <span className="font-medium text-muted">· {e.company}</span></h3>
                  <p className="mt-2 text-sm text-muted">{e.text}</p>
                  {e.caseSlug && <Link to={`/case/${e.caseSlug}`} className="mt-2 inline-block text-sm font-semibold underline decoration-amber decoration-2 underline-offset-4">Смотреть кейс</Link>}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="wrap py-16">
        <Reveal>
          <h2 className="text-2xl font-extrabold">Другие проекты</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <div key={o.title} className="card p-6">
                <h3 className="font-bold">{o.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted">{o.org}</p>
                <p className="mt-3 text-sm text-muted">{o.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="wrap py-16">
        <Reveal className="card p-8 md:p-12">
          <Title id="contacts">Контакты</Title>
          <p className="mt-3 max-w-xl text-muted">Открыта к позициям Product Designer в IT-компаниях, полностью удалённо.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="btn btn-primary">{site.email}</a>
            <a href={site.telegram} target="_blank" rel="noreferrer" className="btn btn-ghost">Telegram {site.telegramLabel}</a>
            <a href={site.hh} target="_blank" rel="noreferrer" className="btn btn-ghost">Резюме на hh.ru</a>
            <a href={asset(site.cv)} target="_blank" rel="noreferrer" className="btn btn-ghost">Скачать CV</a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
