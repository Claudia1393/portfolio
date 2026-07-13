import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-pulse">Contacto</p>
      <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight text-ink sm:text-4xl">
        Buscando mi primera oportunidad como desarrolladora. ¿Hablamos de cómo puedo sumar a tu equipo?
      </h2>

      <div className="mt-10 flex flex-col gap-4 font-mono text-sm text-inkSoft sm:flex-row sm:flex-wrap sm:gap-10">
        <a href={`mailto:${profile.email}`} className="transition-colors hover:text-pulse">
          {profile.email}
        </a>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-pulse">
          {profile.phone}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-pulse"
        >
          github.com/Claudia1393
        </a>
        <span>{profile.location}</span>
      </div>
    </section>
  )
}
