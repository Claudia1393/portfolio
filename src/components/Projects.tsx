import type { Project } from '../data/content'
import { projects } from '../data/content'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={
        project.featured
          ? 'rounded-2xl border border-line bg-panel p-8 sm:p-10'
          : 'rounded-2xl border border-line p-8'
      }
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          {project.featured && (
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-pulse">
              Proyecto destacado
            </p>
          )}
          <h3 className="font-display text-2xl text-ink sm:text-3xl">{project.name}</h3>
        </div>

        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-4 py-2 font-mono text-xs text-paper transition-colors hover:bg-pulse"
            >
              Ver 
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-4 py-2 font-mono text-xs text-ink transition-colors hover:border-pulse hover:text-pulse"
          >
            Código
          </a>
        </div>
      </div>

      <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-inkSoft">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-pulseSoft px-3 py-1 font-mono text-xs text-pulse"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="border-t border-line bg-panel">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-pulse">Proyectos</p>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
          Cosas que he construido
        </h2>

        <div className="mt-10 flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
