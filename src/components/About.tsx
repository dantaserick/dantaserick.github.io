import { about } from '../content'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" index="01 about" title="About">
      <div className="max-w-prose space-y-5 text-[17px] leading-relaxed text-paper/85">
        {about.map((p, i) => (
          <p key={i} className={i === 0 ? 'font-display text-2xl leading-snug text-paper' : ''}>
            {p}
          </p>
        ))}
      </div>
    </Section>
  )
}
