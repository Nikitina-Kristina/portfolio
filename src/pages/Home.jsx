import { Link } from 'react-router-dom'
import { profile, experience, others } from '../data/data.jsx'
import { cases } from '../data/case-data.jsx'
import { site, asset, img } from '../config.js'
import Reveal from '../components/Reveal.jsx'
import Img from '../components/Img.jsx'
import Footer from '../components/Footer.jsx'

const Title = ({ id, children }) => (
  <h2 id={id} className="scroll-mt-24 text-3xl font-extrabold md:text-4xl">{children}</h2>
)
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Home() {
  return (
    <>
      <div className="bg-night text-white" style={{ backgroundImage: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(99,82,240,0.85) 0%, rgba(99,82,240,0) 70%)' }}>
        <section className="wrap pb-16 pt-32 text-center md:pt-40">
          <p className="text-sm text-white/70">{profile.role}</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-[1.1] md:text-6xl">{profile.name}, продуктовый дизайнер</h1>
          <p className="mx-auto mt-5 max-w-xl text-white/70">B2B и B2G продукты: сложные данные, роли и согласования простым языком интерфейса.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={() => scrollTo('cases')} className="btn bg-iris text-white hover:bg-white hover:text-iris">Смотреть кейсы</button>
            <a href={site.telegram} target="_blank" rel="noreferrer" className="btn btn-outline-light">Написать мне</a>
          </div>
        </section>

        <section className="wrap pb-20 pt-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-xl font-semibold text-white/55 md:text-2xl">
            {profile.companies.map((n, i) => (
              <span key={n} className="rise" style={{ animationDelay: `${0.35 + i * 0.14}s` }}>
                <span className="bob inline-block transition-colors duration-300 hover:text-white" style={{ animationDelay: `${i * 0.6}s` }}>{n}</span>
              </span>
            ))}
          </div>
        </section>
      </div>

      <section className="wrap pt-20 pb-4 md:pt-28">
        <Reveal>
          <h2 id="about" className="scroll-mt-24 text-4xl font-extrabold leading-tight md:text-6xl">Обо мне</h2>
          <div className="mt-8 grid gap-10 md:mt-10 md:grid-cols-2 md:items-center md:gap-16">
            <img src={img('avatar-portrait.jpg')} alt={profile.name} className="aspect-[4/5] w-full max-w-sm rounded-[24px] object-cover shadow-xl shadow-black/15" />
            <div className="space-y-5 leading-relaxed text-ink/85">
              {profile.about.map((t) => <p key={t}>{t}</p>)}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="wrap pt-20 md:pt-28">
        <Reveal>
          <Title id="cases">Кейсы</Title>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {cases.filter((c) => !c.minor).map((c) => (
              <Link key={c.slug} to={`/case/${c.slug}`} className="card block !rounded-2xl p-4 transition duration-300 ease-out hover:z-10 hover:scale-[1.03] hover:border-iris/25 hover:shadow-2xl hover:shadow-deep/15">
                <Img src={c.cover} className="" />
                <div className="px-2 pb-3 pt-4">
                  <div className="flex flex-wrap gap-2">{c.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                  <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
                  <p className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-muted"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 self-center text-iris" aria-hidden="true"><path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 10h5a1 1 0 0 1 1 1v10M3 21h18M8 8h2M8 12h2M8 16h2"/></svg><span className="text-base font-extrabold text-ink">{c.company}</span><span className="text-xs">{c.period}</span></p>
                  <p className="mt-3 text-sm text-muted">{c.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>


      <section className="wrap py-16">
        <Reveal>
          <Title id="skills">Навыки</Title>
          <div className="mt-10 grid gap-6">
            {profile.skills.map((g) => (
              <div key={g.title} className="card p-7 md:p-9">
                <h3 className="text-2xl font-extrabold">{g.title}</h3>
                <ul className="mt-5 space-y-3">
                  {g.items.map((t) => (
                    <li key={t} className="relative pl-5 leading-relaxed text-ink/85">
                      <span className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-amber" />{t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grad mt-6 rounded-3xl p-7 text-white md:p-9">
            <h3 className="text-2xl font-extrabold">Инструменты</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {profile.tools.map((t) => <span key={t} className="rounded-lg bg-white/12 px-4 py-2 text-sm font-medium ring-1 ring-white/25">{t}</span>)}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="wrap py-16">
        <Reveal>
          <Title id="experience">Опыт</Title>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {experience.map((e) => (
              <div key={e.company + e.period} className="grid gap-2 py-6 md:grid-cols-[200px_1fr] md:gap-8">
                <p className="text-sm text-muted md:pt-0.5">{e.period}</p>
                <div>
                  <h3 className="font-medium text-muted">{e.role} <span className="font-extrabold text-ink">· {e.company}</span></h3>
                  <p className="mt-2 text-sm text-muted">{e.text}</p>
                  {e.caseSlug && <Link to={`/case/${e.caseSlug}`} className="btn btn-sm mt-4 bg-mist text-deep hover:bg-deep hover:text-white">Смотреть кейс</Link>}
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
              o.slug ? (
                <Link key={o.title} to={`/case/${o.slug}`} className="card group flex h-full flex-col p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-iris/25 hover:shadow-xl hover:shadow-deep/10">
                  <h3 className="font-bold">{o.title}</h3>
                  <p className="mt-1 font-mono text-xs text-muted">{o.org}</p>
                  <p className="mt-3 text-sm text-muted">{o.text}</p>
                  <span className="mt-auto pt-5"><span className="btn btn-sm bg-mist text-deep transition group-hover:bg-deep group-hover:text-white">Смотреть кейс</span></span>
                </Link>
              ) : (
                <div key={o.title} className="card p-6">
                  <h3 className="font-bold">{o.title}</h3>
                  <p className="mt-1 font-mono text-xs text-muted">{o.org}</p>
                  <p className="mt-3 text-sm text-muted">{o.text}</p>
                </div>
              )
            ))}
          </div>
        </Reveal>
      </section>

      <div className="bg-night text-white" style={{ backgroundImage: 'radial-gradient(ellipse 70% 62% at 50% 100%, rgba(150,142,226,0.95) 0%, rgba(99,82,240,0.62) 32%, rgba(75,61,224,0.22) 58%, rgba(8,8,43,0) 80%)' }}>
        <section className="wrap py-24 text-center md:py-32">
          <Reveal>
            <h2 id="contacts" className="scroll-mt-24 text-4xl font-extrabold leading-tight md:text-6xl">Контакты</h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${site.email}`} className="btn bg-iris text-white hover:bg-white hover:text-iris">{site.email}</a>
              <a href={site.telegram} target="_blank" rel="noreferrer" className="btn btn-outline-light">Telegram {site.telegramLabel}</a>
              <a href={site.hh} target="_blank" rel="noreferrer" className="btn btn-outline-light">Резюме на hh.ru</a>
              <a href={asset(site.cv)} target="_blank" rel="noreferrer" className="btn btn-outline-light">Скачать CV</a>
            </div>
          </Reveal>
        </section>
        <Footer embedded />
      </div>
    </>
  )
}
