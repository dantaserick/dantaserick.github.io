import { capabilities } from '../content'
import Section from './Section'

export default function Capabilities() {
  return (
    <Section id="capabilities" index="04 capabilities" title="Capabilities">
      <ul className="grid gap-5 sm:grid-cols-2">
        {capabilities.map((g, i) => (
          <li key={g.name} className="rounded-xl border border-line bg-surface/60 p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold tracking-tight">{g.name}</h3>
              <span className="font-mono text-[10px] text-accent/70">0{i + 1}</span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map(it => (
                <li
                  key={it}
                  className="rounded-md border border-line bg-ink/40 px-2.5 py-1 font-mono text-xs text-paper/80 transition hover:border-accent/50 hover:text-accent"
                >
                  {it}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
