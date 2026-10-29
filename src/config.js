// Все ссылки и контакты только здесь
export const site = {
  email: 'morckaicvinka@gmail.com',
  telegram: 'https://t.me/KrNikitina',
  telegramLabel: '@KrNikitina',
  hh: 'https://kazan.hh.ru/resume/96d1a248ff076935e30039ed1f366132544942',
  cv: 'cv.pdf', // файл public/cv.pdf в репозитории
}
export const asset = (p) => import.meta.env.BASE_URL + p
export const img = (p) => asset('images/' + p)
