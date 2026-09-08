import { experience } from '../content'
import Section from './Section'

const fmt = (ym: string) =>
  ym === 'Present'
    ? 'Present'
    : new Date(`${ym}-01T00:00:00`).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })

export default function Experience() {
  return (
    <Section id="experience" index="02 experience" title="Experience">
      <ol className="space-y-12">
        {experience.map(emp => (
          <li key={emp.name} className="relative border-l border-line pl-7">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(96,165,250,0.6)]" />
            <h3 className="text-lg font-semibold tracking-tight">{emp.name}</h3>
            {emp.location && <p className="font-mono text-xs text-muted">{emp.location}</p>}
            <ol className="mt-5 space-y-7">
              {emp.roles.map(role => (
                <li key={role.title} className="grid gap-2 sm:grid-cols-[9.5rem_1fr]">
                  <p className="font-mono text-xs text-muted sm:pt-1">
                    {fmt(role.start)} — {fmt(role.end)}
                  </p>
                  <div>
                    <h4 className="font-medium text-paper">{role.title}</h4>
                    {role.summary && <p className="mt-1.5 text-paper/75">{role.summary}</p>}
                    {role.bullets && (
                      <ul className="mt-3 space-y-2 text-[15px] text-paper/70">
                        {role.bullets.map(b => (
                          <li key={b} className="flex gap-3">
                            <span className="mt-2 h-px w-3 shrink-0 bg-accent/70" aria-hidden />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </Section>
  )
}
