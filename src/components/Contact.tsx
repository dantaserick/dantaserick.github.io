import { person } from '../content'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" index="06 contact" title="Contact">
      <p className="max-w-prose font-display text-2xl leading-snug text-paper">
        Open to conversations about continuous audit, data integrity and AI in internal audit.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-sm">
        <a href={`mailto:${person.email}`} className="text-accent underline-offset-4 hover:underline">
          {person.email}
        </a>
        {person.links.map(l => (
          <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-muted transition hover:text-paper">
            {l.label} ↗
          </a>
        ))}
      </div>
    </Section>
  )
}
