import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-pulse">Experiencia</p>
      <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Trayectoria</h2>

      <ol className="mt-12 border-l border-line pl-8">
        {experience.map((item, i) => (
          <li key={item.title} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-pulse ring-4 ring-pulseSoft" />
            <p className="font-mono text-xs text-inkSoft">{item.period}</p>
            <h3 className="mt-2 font-display text-xl text-ink sm:text-2xl">{item.title}</h3>
            <p className="mt-1 text-sm text-inkSoft">{item.place}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {item.details.map((detail) => (
                <li key={detail} className="flex gap-3 text-sm leading-relaxed text-inkSoft">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pulse" />
                  {detail}
                </li>
              ))}
            </ul>
            {i === 0 && (
              <span className="mt-4 inline-block rounded-full border border-line px-3 py-1 font-mono text-[11px] text-inkSoft">
                Prácticas duales FP DAM
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
