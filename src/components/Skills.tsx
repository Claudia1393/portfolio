import { skills } from '../data/content'

export default function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-pulse">Habilidades</p>

      <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.label}>
            <h3 className="font-display text-lg text-ink">{group.label}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs text-inkSoft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
