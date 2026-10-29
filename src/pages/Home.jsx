import { Link } from 'react-router-dom'
import { profile, experience, others } from '../data/data.jsx'
import { cases } from '../data/case-data.jsx'
import { site, asset, img } from '../config.js'
import Reveal from '../components/Reveal.jsx'
import Img from '../components/Img.jsx'

const Title = ({ id, children }) => (
  <h2 id={id} className="scroll-mt-24 text-3xl font-extrabold md:text-4xl">{children}</h2>
)
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Home() {
  return (
    <>
      <section className="wrap pt-8 md:pt-12">
        <div className="grad flex flex-col-reverse items-start gap-10 overflow-hidden rounded-[2rem] px-7 py-12 text-white md:flex-row md:items-center md:justify-between md:px-14 md:py-20">
          <div>
            <p className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium">{profile.role}</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[1.05] md:text-7xl">{profile.name}</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">{profile.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => scrollTo('cases')} className="btn btn-light">Смотреть кейсы</button>
              <a href={`mailto:${site.email}`} className="btn btn-outline-light">Написать мне</a>
            </div>
          </div>
          <img src={img('avatar.jpg')} alt={profile.name} className="h-36 w-36 shrink-0 rounded-full border-4 border-white/70 object-cover shadow-xl shadow-deep/30 md:h-64 md:w-64" />
        </div>
      </section>

      <div className="mt-10 overflow-hidden bg-deep py-4 text-white" aria-hidden="true">
        <div className="marquee flex w-max gap-10 whitespace-nowrap text-lg font-semibold">
          {[0, 1].map((n) => (
            <div key={n} className="flex gap-10">
              {['Продуктовый дизайн', 'B2B и внутренние сервисы', 'Таблицы и данные', 'AI-функции', 'Исследования', 'Согласования и процессы'].map((t) => (
                <span key={t + n} className="flex items-center gap-10">{t}<span className="text-sky">✦</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="wrap py-16">
        <Reveal>
          <Title id="cases">Кейсы</Title>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {cases.map((c) => (
              <Link key={c.slug} to={`/case/${c.slug}`} className="card block p-4 transition duration-300 ease-out hover:z-10 hover:scale-[1.03] hover:border-sky hover:shadow-2xl hover:shadow-deep/20">
                <Img src={c.cover} className="" />
                <div className="px-2 pb-3 pt-4">
                  <div className="flex flex-wrap gap-2">{c.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                  <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
                  <p className="mt-2 flex flex-wrap items-baseline gap-x-2 text-muted"><span className="text-base font-extrabold text-ink">{c.company}</span><span className="text-xs">{c.period}</span></p>
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
        <Reveal className="grad rounded-[2rem] p-8 text-white md:p-14">
          <Title id="contacts">Контакты</Title>
          <p className="mt-3 max-w-xl text-white/85">Открыта к позициям Product Designer в IT-компаниях, полностью удалённо.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="btn btn-light">{site.email}</a>
            <a href={site.telegram} target="_blank" rel="noreferrer" className="btn btn-outline-light">Telegram {site.telegramLabel}</a>
            <a href={site.hh} target="_blank" rel="noreferrer" className="btn btn-outline-light">Резюме на hh.ru</a>
            <a href={asset(site.cv)} target="_blank" rel="noreferrer" className="btn btn-outline-light">Скачать CV</a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
