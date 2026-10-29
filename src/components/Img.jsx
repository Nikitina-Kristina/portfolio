import { useState } from 'react'
import { img } from '../config.js'

// Если файла нет в репозитории: мягкая заглушка с именем файла
export default function Img({ src, caption, className = 'my-8' }) {
  const [bad, setBad] = useState(false)
  return (
    <figure className={className}>
      {bad ? (
        <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-dashed border-line bg-card px-4 text-center font-mono text-xs text-muted">{src}</div>
      ) : (
        <img src={img(src)} alt={caption || ''} loading="lazy" onError={() => setBad(true)} className="w-full rounded-xl border border-line bg-card" />
      )}
      {caption && <figcaption className="mt-3 font-mono text-xs text-muted">{caption}</figcaption>}
    </figure>
  )
}
