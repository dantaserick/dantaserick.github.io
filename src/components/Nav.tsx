import { useState } from 'react'
import { person } from '../content'

const items = ['About', 'Experience', 'Projects', 'Capabilities', 'Education', 'Contact']

export default function Nav() {
  const [open, setOpen] = useState(false)
  const handle = person.name.toLowerCase().split(' ').join('.')
  return (
    <header className="print:hidden fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Primary">
        <a href="#top" className="font-mono text-sm text-accent">
          <span className="text-muted">~/</span>{handle}
        </a>
        <button
          type="button"
          className="md:hidden rounded p-1 text-muted hover:text-paper"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 5h14M3 10h14M3 15h14" />}
          </svg>
        </button>
        <ul
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-4 border-b border-line bg-ink px-5 py-5 md:static md:flex md:flex-row md:gap-7 md:border-0 md:bg-transparent md:p-0`}
        >
          {items.map((i, n) => (
            <li key={i}>
              <a
                href={`#${i.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-2 text-sm text-muted transition hover:text-paper"
              >
                <span className="font-mono text-[10px] text-accent/70 group-hover:text-accent">0{n + 1}</span>
                {i}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
