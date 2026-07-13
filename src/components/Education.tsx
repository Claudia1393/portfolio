import { education } from '../data/content'

export default function Education() {
  return (
    <section id="formacion" className="border-t border-line bg-panel">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-pulse">Formación</p>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Estudios</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {education.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-paper p-6">
              <p className="font-mono text-xs text-pulse">{item.period}</p>
              <h3 className="mt-3 font-display text-lg leading-snug text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-inkSoft">{item.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
