import { education } from '../content'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education" index="05 education" title="Education">
      <ol className="divide-y divide-line border-y border-line">
        {education.map(d => (
          <li key={d.title} className="grid gap-1 py-5 sm:grid-cols-[6rem_1fr]">
            <p className="font-mono text-sm text-accent">{d.year}</p>
            <div>
              <h3 className="font-medium">{d.title}</h3>
              <p className="text-paper/70">{d.institution}</p>
              {d.note && <p className="mt-1 text-sm text-muted">{d.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
