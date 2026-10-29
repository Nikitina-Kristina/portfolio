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
      <div className="bg-night text-white" style={{ backgroundImage: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(99,82,240,0.85) 0%, rgba(99,82,240,0) 70%)' }}>
        <section className="wrap pb-16 pt-32 text-center md:pt-40">
          <p className="text-sm text-white/70">{profile.role}</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-[1.1] md:text-6xl">{profile.name}, продуктовый дизайнер</h1>
          <p className="mx-auto mt-5 max-w-xl text-white/70">B2B и B2G продукты: сложные данные, роли и согласования простым языком интерфейса.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={() => scrollTo('cases')} className="btn bg-iris text-white hover:bg-white hover:text-iris">Смотреть кейсы</button>
            <a href={`mailto:${site.email}`} className="btn btn-outline-light">Написать мне</a>
          </div>
        </section>

        <section className="wrap pb-20 pt-12 text-center">
          <p className="text-lg text-white/90">Работала над проектами для</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-xl font-semibold text-white/55 md:text-2xl">
            {profile.companies.map((n) => <span key={n}>{n}</span>)}
          </div>
        </section>
      </div>

      <section className="wrap pt-20 md:pt-28">
        <Reveal>
          <Title id="cases">Кейсы</Title>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {cases.map((c) => (
              <Link key={c.slug} to={`/case/${c.slug}`} className="card block p-4 transition duration-300 ease-out hover:z-10 hover:scale-[1.03] hover:border-sky hover:shadow-2xl hover:shadow-deep/25">
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

      <section className="wrap py-20 md:py-28">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 id="about" className="scroll-mt-24 text-4xl font-extrabold leading-tight md:text-6xl">Обо мне</h2>
              <img src={img('avatar-portrait.jpg')} alt={profile.name} className="mt-8 aspect-[4/5] w-full max-w-sm rounded-[24px] object-cover shadow-xl shadow-deep/20" />
            </div>
            <div className="space-y-5 leading-relaxed text-ink/85 md:pt-3">
              {profile.about.map((t) => <p key={t}>{t}</p>)}
            </div>
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
              {profile.tools.map((t) => <span key={t} className="rounded-full bg-white/12 px-4 py-2 text-sm font-medium ring-1 ring-white/25">{t}</span>)}
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
