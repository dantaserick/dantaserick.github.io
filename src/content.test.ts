import { describe, it, expect } from 'vitest'
import { person, about, heroAlerts, experience, projects, capabilities, education, jsonLd } from './content'

describe('content invariants', () => {
  it('every link is https', () => {
    for (const l of person.links) expect(l.href).toMatch(/^https:\/\//)
    for (const p of projects) if (p.href) expect(p.href).toMatch(/^https:\/\//)
  })

  it('about has 2-4 lines', () => {
    expect(about.length).toBeGreaterThanOrEqual(2)
    expect(about.length).toBeLessThanOrEqual(4)
  })

  it('hero alerts are fictional and generic (no digits, no product names)', () => {
    for (const a of heroAlerts) {
      expect(a.text).not.toMatch(/\d/)
      expect(a.text.toLowerCase()).not.toMatch(/nubank|pix|credit card|lending/)
    }
  })

  it('experience is newest first and dates are YYYY-MM or Present', () => {
    const re = /^\d{4}-\d{2}$/
    for (const e of experience) {
      for (const r of e.roles) {
        expect(r.start).toMatch(re)
        expect(r.end === 'Present' || re.test(r.end)).toBe(true)
      }
    }
    const firstStart = experience[0].roles[0].start
    for (const e of experience) expect(e.roles[0].start <= firstStart).toBe(true)
  })

  it('projects: first is Bridge, under construction, no href', () => {
    expect(projects[0].name).toBe('Bridge')
    expect(projects[0].status).toBe('under-construction')
    expect(projects[0].href).toBeUndefined()
  })

  it('projects never mention excluded topics (Intellio, games, YouTube channels)', () => {
    const blob = projects.map(p => `${p.name} ${p.tagline} ${p.description} ${p.tags.join(' ')}`).join(' ').toLowerCase()
    expect(blob).not.toMatch(/intellio|youtube|phaser|unity|game/)
  })

  it('capabilities have 5 groups with items, AI & Agent Engineering second', () => {
    expect(capabilities).toHaveLength(5)
    expect(capabilities[1].name).toBe('AI & Agent Engineering')
    for (const g of capabilities) expect(g.items.length).toBeGreaterThan(0)
  })

  it('education has 3 degrees, ASU as a note', () => {
    expect(education).toHaveLength(3)
    expect(education.some(d => d.note?.includes('Arizona State University'))).toBe(true)
  })

  it('jsonLd is a schema.org Person with sameAs links', () => {
    const ld = jsonLd()
    expect(ld['@type']).toBe('Person')
    expect(ld['sameAs']).toEqual(person.links.map(l => l.href))
  })
})
