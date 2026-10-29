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

        <section id="cases" className="scroll-mt-24 pb-4">
          <div className="mx-auto flex max-w-6xl snap-x gap-5 overflow-x-auto px-6 pb-10 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {cases.map((c) => (
              <Link key={c.slug} to={`/case/${c.slug}`} className="group relative block aspect-[4/5] w-[78vw] max-w-[340px] shrink-0 snap-center overflow-hidden rounded-3xl bg-white transition duration-300 ease-out hover:z-10 hover:scale-[1.04] hover:shadow-2xl hover:shadow-iris/40 md:w-[340px]">
                <img src={img(c.cover)} alt="" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/95 via-night/70 to-transparent px-5 pb-5 pt-24">
                  <p className="text-sm font-bold text-white/90">{c.company}</p>
                  <h3 className="mt-1 text-lg font-bold leading-snug">{c.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">{c.tags.slice(0, 2).map((t) => <span key={t} className="rounded-full border border-white/40 px-3 py-1 text-xs">{t}</span>)}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="wrap pb-20 pt-6 text-center">
          <p className="text-lg text-white/90">Работала над проектами для</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-xl font-semibold text-white/55 md:text-2xl">
            {profile.companies.map((n) => <span key={n}>{n}</span>)}
          </div>
        </section>
      </div>

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
