import { useEffect, useState } from 'react'
import type { Alert } from '../content'

const dot: Record<Alert['level'], string> = {
  ok: 'bg-accent shadow-[0_0_10px_rgba(96,165,250,0.7)]',
  warn: 'bg-amber shadow-[0_0_10px_rgba(249,115,22,0.7)]',
  info: 'bg-muted',
}
const tag: Record<Alert['level'], string> = {
  ok: 'text-accent',
  warn: 'text-amber',
  info: 'text-muted',
}
const status: Record<Alert['level'], string> = { ok: 'PASS', warn: 'REVIEW', info: 'NOTE' }

export default function AuditConsole({ alerts }: { alerts: Alert[] }) {
  const [shown, setShown] = useState(1)
  const [clock, setClock] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setShown(s => (s >= alerts.length ? 1 : s + 1)), 2600)
    return () => clearInterval(id)
  }, [alerts.length])

  useEffect(() => {
    const id = setInterval(() => setClock(c => c + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const visible = alerts.slice(Math.max(0, shown - 3), shown)
  const hh = String(Math.floor(clock / 3600) % 24).padStart(2, '0')
  const mm = String(Math.floor(clock / 60) % 60).padStart(2, '0')
  const ss = String(clock % 60).padStart(2, '0')

  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-surface/90 font-mono text-xs shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/5">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2 text-muted">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-2 truncate">agent-runtime — live</span>
        <span className="ml-auto hidden items-center gap-1.5 text-[10px] sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
          uptime {hh}:{mm}:{ss}
        </span>
      </div>

      <ul aria-live="polite" className="min-h-[10.25rem] space-y-3 p-4 lg:grid lg:min-h-0 lg:grid-cols-3 lg:gap-6 lg:space-y-0 lg:px-4 lg:py-3">
        {visible.map((a, i) => {
          const last = i === visible.length - 1
          return (
            <li key={a.label} className="flex gap-3 animate-fade-up">
              <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dot[a.level]} ${last ? 'animate-pulse-dot' : ''}`} />
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[10px] tracking-[0.18em] text-muted">
                  <span>{a.label}</span>
                  <span className={`rounded-sm border border-current/30 px-1 py-px text-[9px] tracking-normal ${tag[a.level]}`}>
                    {status[a.level]}
                  </span>
                </div>
                <div className="mt-0.5 text-paper/90">
                  {a.text}
                  {last && <span className="ml-1 inline-block w-1.5 bg-accent animate-tick" aria-hidden>&nbsp;</span>}
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="flex items-center justify-between border-t border-line px-4 py-1.5 text-[10px] text-muted">
        <span>pipelines: green</span>
        <span>agents: governed</span>
        <span>human-in-the-loop: on</span>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-accent/[0.06] to-transparent animate-scan"
      />
    </div>
  )
}
