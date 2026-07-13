const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#formacion', label: 'Formación' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight text-ink">
          claudia<span className="text-pulse">.</span>dev
        </a>
        <ul className="hidden gap-8 font-mono text-sm text-inkSoft sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-pulse">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="rounded-full border border-ink px-4 py-1.5 font-mono text-xs text-ink transition-colors hover:border-pulse hover:text-pulse sm:hidden"
        >
          Contacto
        </a>
      </nav>
    </header>
  )
}
