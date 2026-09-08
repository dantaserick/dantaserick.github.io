import { person } from '../content'

export default function Footer() {
  return (
    <footer className="print:hidden border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-[11px] text-muted">
        <span>Built with React + Vite · Deployed on GitHub Pages</span>
        <span>
          © {new Date().getFullYear()} {person.name}
        </span>
      </div>
    </footer>
  )
}
