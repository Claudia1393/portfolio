export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 font-mono text-xs text-inkSoft sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <span>© {new Date().getFullYear()} Claudia Bernabé Iniesta</span>
        <span>Construido con React + TypeScript + Tailwind</span>
      </div>
    </footer>
  )
}
