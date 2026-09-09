import { lazy, Suspense } from 'react'
import { credentials, heroAlerts, heroIntro, person, portrait } from '../content'

const AuditConsole = lazy(() => import('./AuditConsole'))

export default function Hero() {
  const [first, ...rest] = person.name.split(' ')
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10" />

      <div id="hero-grid" className="mx-auto grid max-w-6xl gap-10 px-5 pt-24 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start lg:gap-x-14 lg:gap-y-5 lg:pt-16">
        {/* text column */}
        <div className="lg:pt-1">
          <p className="animate-fade-up font-mono text-xs text-accent">// data&nbsp;· engineering&nbsp;· ai agents&nbsp;· shipped to production</p>
          <h1 className="animate-fade-up mt-4 text-6xl font-medium leading-[0.92] tracking-[-0.02em] [animation-delay:80ms] sm:text-7xl lg:text-[4rem]">
            {first}
            <br className="lg:hidden" />
            <span className="hidden lg:inline"> </span>
            <span className="text-paper/55">{rest.join(' ')}</span>
          </h1>
          <p className="animate-fade-up mt-5 text-lg text-muted [animation-delay:160ms] [text-wrap:balance] sm:text-xl">
            {person.headline.split(' · ').map((part, i, arr) => (
              <span key={part}>
                <span className="whitespace-nowrap">
                  {part}
                  {i < arr.length - 1 && <span className="text-muted/50"> ·</span>}
                </span>{' '}
              </span>
            ))}
          </p>
          <p className="animate-fade-up mt-4 max-w-[46ch] text-[17px] leading-relaxed text-paper/85 [animation-delay:240ms]">
            {heroIntro}
          </p>
          <div className="print:hidden animate-fade-up mt-6 flex flex-wrap gap-3 [animation-delay:320ms]">
            <a
              href="#experience"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-accent-deep"
            >
              View experience
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-md border border-line px-5 py-2.5 text-sm text-paper transition hover:border-accent hover:text-accent"
            >
              Download CV
            </button>
          </div>
          <div className="animate-fade-up mt-5 flex flex-wrap gap-6 font-mono text-xs text-muted [animation-delay:400ms]">
            {person.links.map(l => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="transition hover:text-accent">
                {l.label} ↗
              </a>
            ))}
            <a href={`mailto:${person.email}`} className="transition hover:text-accent">
              {person.email}
            </a>
          </div>

        </div>

        {/* portrait column */}
        <figure className="animate-fade-up relative mx-auto w-full max-w-[22rem] lg:max-w-none [animation-delay:200ms]">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_50%_at_70%_20%,rgba(96,165,250,0.10),transparent_70%)] blur-2xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-line/80 bg-surface shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/5">
            <img
              src={portrait.src}
              srcSet={`${portrait.src} 900w, ${portrait.src2x} 1400w`}
              sizes="(min-width: 1024px) 17rem, 22rem"
              alt={portrait.alt}
              width={900}
              height={1200}
              className="block h-auto w-full"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-line/60 bg-ink/70 px-4 py-3 font-mono text-[10px] tracking-widest text-muted backdrop-blur-sm">
              <span>{person.name.toUpperCase()}</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                DATA &amp; AI
              </span>
            </figcaption>
          </div>
        </figure>

        <div className="print:hidden animate-fade-up min-h-[10.25rem] lg:col-span-2 lg:min-h-[9.5rem] [animation-delay:520ms]">
          <Suspense fallback={<div aria-hidden className="h-full min-h-[inherit] rounded-xl border border-line bg-surface/60" />}>
            <AuditConsole alerts={heroAlerts} />
          </Suspense>
        </div>
      </div>

      {/* credentials strip */}
      <div className="print:hidden mx-auto mt-12 max-w-6xl px-5 lg:mt-12">
        <ol className="animate-fade-up grid grid-cols-2 divide-y divide-line border-y border-line sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-y-0 [animation-delay:600ms]">
          {credentials.map(c => (
            <li key={c.label} className="flex flex-col gap-1 px-4 py-5 lg:px-6">
              <span className="font-display text-3xl leading-none text-paper">{c.value}</span>
              <span className="text-xs leading-snug text-muted">{c.label}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="print:hidden h-8 lg:h-12" />
    </section>
  )
}
