import { profile, languages } from '../data/content'

export default function About() {
  return (
    <section id="sobre-mi" className="border-t border-line bg-panel">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-pulse">Sobre mí</p>

        <p className="mt-6 max-w-3xl font-body text-xl leading-relaxed text-inkSoft sm:text-xl">
          {profile.intro}
        </p>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {languages.map((lang) => (
            <div key={lang.name} className="font-mono text-sm text-inkSoft">
              <span className="text-ink">{lang.name}</span> · {lang.level}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
