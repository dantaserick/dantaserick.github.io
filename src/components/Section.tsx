import type { ReactNode } from 'react'

type Props = { id: string; index: string; title: string; children: ReactNode }

export default function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <div className="grid gap-8 md:grid-cols-[11rem_1fr]">
        <header className="md:sticky md:top-24 md:self-start">
          <p className="font-mono text-xs text-accent">// {index}</p>
          <h2 className="mt-2 text-4xl font-medium tracking-tight">{title}</h2>
        </header>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}
