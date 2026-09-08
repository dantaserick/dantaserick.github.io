import { projects, type Project } from '../content'
import Section from './Section'

function Badge({ status }: { status: Project['status'] }) {
  if (status === 'under-construction')
    return (
      <span className="inline-flex items-center gap-1.5 rounded-sm border border-amber/40 px-2 py-0.5 font-mono text-[10px] tracking-wider text-amber">
        <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse-dot" />
        UNDER CONSTRUCTION
      </span>
    )
  if (status === 'private')
    return (
      <span className="rounded-sm border border-line px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted">
        PRIVATE
      </span>
    )
  if (status === 'placeholder')
    return (
      <span className="rounded-sm border border-line px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted">
        COMING SOON
      </span>
    )
  return (
    <span className="rounded-sm border border-accent/40 px-2 py-0.5 font-mono text-[10px] tracking-wider text-accent">
      LIVE
    </span>
  )
}

function Card({ p }: { p: Project }) {
  const placeholder = p.status === 'placeholder'
  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
        <Badge status={p.status} />
      </div>
      <p className="mt-2 font-display text-lg text-paper/80">{p.tagline}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-paper/65">{p.description}</p>
      {p.tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tags.map(t => (
            <li key={t} className="rounded-sm border border-line bg-ink/40 px-2 py-0.5 font-mono text-[11px] text-muted">
              {t}
            </li>
          ))}
        </ul>
      )}
      {p.href && (
        <p className="mt-5 font-mono text-xs text-accent">
          open repository ↗
        </p>
      )}
    </>
  )
  const cls = `group relative flex h-full flex-col rounded-xl border p-6 transition ${
    placeholder
      ? 'border-dashed border-line/80 bg-transparent opacity-70'
      : 'border-line bg-surface/80 hover:-translate-y-0.5 hover:border-accent/50'
  }`
  return p.href ? (
    <a href={p.href} target="_blank" rel="noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" index="03 projects" title="Projects">
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map(p => (
          <li key={p.name} className={p.status === 'placeholder' ? 'print:hidden' : undefined}>
            <Card p={p} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
