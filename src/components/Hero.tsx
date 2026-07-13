import { profile } from '../data/content'
import PulseLine from './PulseLine'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:px-10 sm:pt-24">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-inkSoft">
        Vitoria-Gasteiz · Disponible para nuevas oportunidades
      </p>

      <h1 className="font-display text-5xl leading-[1.05] text-ink sm:text-7xl">
        {profile.name}
      </h1>

      <p className="mt-5 font-mono text-lg text-pulse sm:text-xl">
        {profile.roles[0]}
      </p>

      <p className="mt-8 max-w-2xl text-balance font-body text-base leading-relaxed text-inkSoft sm:text-lg">
        De cuidar personas a construir soluciones. Mismo propósito, nueva herramienta.
      </p>

      <div className="mt-10">
        <PulseLine />
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#proyectos"
          className="rounded-full bg-ink px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-pulse"
        >
          Ver proyectos
        </a>
        <a
          href="#contacto"
          className="rounded-full border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-pulse hover:text-pulse"
        >
          Contactar
        </a>
      </div>
    </section>
  )
}
