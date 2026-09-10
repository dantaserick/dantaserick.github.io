/**
 * Single source of content for the whole site.
 * Edit this file to update experience, projects, capabilities, education and links.
 * Components render whatever is here; they carry no business text of their own.
 */

export type Link = { label: string; href: string }
export type Role = {
  title: string
  start: string // YYYY-MM
  end: string | 'Present' // YYYY-MM or 'Present'
  summary?: string
  bullets?: string[]
}
export type Employer = { name: string; location?: string; roles: Role[] }
export type Project = {
  name: string
  tagline: string
  description: string
  status: 'under-construction' | 'live' | 'private' | 'placeholder'
  href?: string
  tags: string[]
}
export type CapabilityGroup = { name: string; items: string[] }
export type Degree = { title: string; institution: string; year: number; note?: string }
export type Alert = { level: 'ok' | 'info' | 'warn'; label: string; text: string }

export const person = {
  name: 'Erick Dantas',
  headline: 'Data & AI Engineering · Analytics · Agentic Systems · Software',
  location: 'Santos, São Paulo, Brazil',
  email: 'dantaserick@hotmail.com',
  siteUrl: 'https://dantaserick.github.io/',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dantaserick/' },
    { label: 'GitHub', href: 'https://github.com/dantaserick' },
  ] as Link[],
}

export const portrait = {
  src: '/portrait.webp',
  src2x: '/portrait@2x.webp',
  alt: 'Portrait of Erick Dantas in a dark suit and blue tie',
}

/** Credentials strip under the hero. */
export const credentials: { value: string; label: string }[] = [
  { value: '10+', label: 'years across engineering, research and data' },
  { value: '4+', label: 'AI agents on real fieldwork, human-gated' },
  { value: '3', label: 'languages in production: SQL, Scala, Python' },
  { value: 'MSc', label: 'Universidade Federal de São Paulo' },
  { value: '2019', label: 'University Professor since' },
]

export const heroIntro =
  'I build data pipelines, analytical tests and governed AI agents that run on real financial data at scale. Today I do that inside a bank\'s Internal Audit; before that, environmental engineering and research.'

export const about: string[] = [
  'Engineer and data scientist who builds systems: pipelines over a data lake, analytical tests in SQL, Scala and Python, and AI agents that do real work under human approval.',
  'Today that happens inside the Internal Audit of a large digital bank, where I lead the continuous-monitoring platform and shipped the specialist agents, plus the governance layer that audits the agents themselves.',
  'Outside work I build software with AI coding agents: multi-agent pipelines with human approval gates, append-only ledgers for traceability, and test suites in the hundreds. Desktop apps, CLIs, Android, web.',
  'In parallel, I teach in distance-learning programs in Environmental Management and Biological Sciences.',
]

/** Fictional, generic alerts for the hero console. No real product, metric or data. */
export const heroAlerts: Alert[] = [
  { level: 'ok', label: 'PIPELINE', text: 'Incremental load finished. Schema and row counts reconciled against the source.' },
  { level: 'ok', label: 'ANALYTICAL TEST', text: 'Coverage, completeness and accuracy checks passed for the monitored domain.' },
  { level: 'warn', label: 'AGENT', text: 'Exception pattern found. Draft analysis and evidence bundle prepared for review.' },
  { level: 'info', label: 'META-REVIEW', text: 'Agent output audited by the meta-agent. Traceability and quality gates passed.' },
  { level: 'ok', label: 'HUMAN GATE', text: 'Reviewer approved. Deliverable published. Next cycle scheduled.' },
]

export const experience: Employer[] = [
  {
    name: 'Nubank',
    roles: [
      {
        title: 'Data Audit Specialist — Internal Audit',
        start: '2026-09',
        end: 'Present',
        summary:
          'Data and AI engineering inside Internal Audit, in the data team since 2022. Large-scale datasets in the data lake, analytical tests over the bank’s products, and AI agents that do real fieldwork under human approval.',
        bullets: [
          'Build analytical tests in SQL, Scala and Python over the data lake: data coverage, integrity and accuracy, and the effectiveness of automated controls.',
          'Lead the continuous-monitoring platform: automated-test roadmap, test universes and rules. Rationalized the portfolio into a curated, high-materiality baseline and authored the multi-year proposal setting its direction.',
          'Drive the migration from a centralized ETL model to a decentralized, AI-driven monitoring ecosystem, with agent-based review of the tests themselves.',
          'Designed and shipped specialist agents used on real fieldwork under human approval gates: data analysis across business domains, process and control mapping, test execution with traceable workpapers and reporting.',
          'Built the governance layer on top of them, including a meta-agent that audits AI agents and blocks sub-standard ones from production.',
          'Build product inside the audit platform (AI-assisted evidence validation, SLA monitoring), work cross-functionally with risk, product, engineering, data and compliance, and run the programming enablement program, mentoring teammates.',
        ],
      },
      { title: 'Data Audit Analyst', start: '2024-09', end: '2026-09' },
      { title: 'Data Audit Junior Analyst', start: '2022-02', end: '2024-09' },
      { title: 'Customer Experience Analyst II', start: '2021-09', end: '2022-02' },
      { title: 'Customer Experience Analyst I', start: '2020-12', end: '2021-09' },
    ],
  },
  {
    name: 'Universidade Metropolitana de Santos (UNIMES)',
    location: 'Santos, Brazil',
    roles: [
      {
        title: 'University Professor',
        start: '2019-03',
        end: 'Present',
        summary: 'Distance-learning programs in Environmental Management and Biological Sciences.',
        bullets: [
          'Courses: Introduction to Biological Sciences, Environmental Education, Hydrology Monitoring and Control, Environmental Licensing, Natural Resources Management, Integrated Projects I–III.',
        ],
      },
    ],
  },
  {
    name: 'Univesp',
    roles: [
      {
        title: 'On-site Mediating Professor',
        start: '2020-03',
        end: '2022-03',
        summary:
          'Integrated projects across Engineering, Teaching degrees, Pedagogy, Mathematics, Computer Engineering and Production Engineering.',
      },
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Bridge',
    tagline: 'Run several coding agents side by side on Windows.',
    description:
      'A desktop app where each AI coding session lives in its own terminal pane. Bridge reads the session hooks and shows, in a sidebar, what every agent is doing right now, and fires a native notification when one needs you.',
    status: 'under-construction',
    tags: ['Electron', 'Node.js', 'TypeScript', 'React'],
  },
  {
    name: 'Firma',
    tagline: 'A local office of live coding agents, run by a chief.',
    description:
      'Several Claude Code sessions alive on one machine, each in its own terminal with its own folder, memory and mailbox. A chief agent breaks work down and routes requests through a file-based message bus; a 2D office view shows who is thinking, working, waiting or stuck. Loopback only, 147 tests.',
    status: 'private',
    tags: ['TypeScript', 'Node.js', 'node-pty', 'WebSocket', 'Multi-agent'],
  },
  {
    name: 'Knowledge Base',
    tagline: 'A personal concept vault built to be read by agents.',
    description:
      'Concepts, sources and relations stored as JSON with a SQLite index and a navigable graph. A CLI adds, links and searches; agents recall similar past cases before starting a task. 478 tests, 10 architecture decision records.',
    status: 'private',
    tags: ['TypeScript', 'SQLite', 'CLI', 'Graph'],
  },
  {
    name: 'EcoSort AI',
    tagline: 'Waste classification from a photo, fully on-device.',
    description:
      'Android app that identifies the recycling category of an item using a MobileNetV3 model running locally, with no image leaving the phone. Kotlin and Jetpack Compose, LiteRT inference, 42 tests, signed release build.',
    status: 'private',
    tags: ['Kotlin', 'Compose', 'LiteRT', 'On-device ML'],
  },
  {
    name: 'Control Room',
    tagline: 'Batch human review for AI-generated assets.',
    description:
      'A web console to approve, reject or regenerate images, videos and audio produced by generation pipelines, with live updates and a job queue. The review step that keeps a human accountable for what ships.',
    status: 'private',
    tags: ['TypeScript', 'React', 'Hono', 'SSE'],
  },
]

export const capabilities: CapabilityGroup[] = [
  {
    name: 'Data Engineering & Analytics',
    items: ['SQL', 'Scala', 'Python', 'Spark', 'Databricks', 'Data lake pipelines', 'Analytical tests', 'Data quality & reconciliation'],
  },
  {
    name: 'AI & Agent Engineering',
    items: [
      'Specialist agents in production',
      'Agent governance & meta-review',
      'Multi-agent orchestration',
      'Human-in-the-loop gates',
      'Claude Code plugins & skills',
      'Browser automation (CDP)',
      'Agent-driven TDD',
    ],
  },
  {
    name: 'Software Engineering',
    items: ['TypeScript', 'React', 'Node.js', 'Kotlin & Compose', 'Electron', 'CLIs', 'SQLite', 'Vitest / test suites in the hundreds'],
  },
  {
    name: 'Domain: Audit & Controls',
    items: ['Continuous monitoring as a service', 'Control effectiveness', 'Audit-by-design', 'Continuous assurance', 'Third line of defense'],
  },
  {
    name: 'Teaching & Research',
    items: ['Higher education (distance learning)', 'Environmental sciences', 'Academic research', 'Programming enablement & mentoring'],
  },
]

export const education: Degree[] = [
  { title: 'BSc in Data Science', institution: 'Brazil', year: 2026 },
  { title: 'MSc in Sciences', institution: 'Universidade Federal de São Paulo (UNIFESP)', year: 2018 },
  {
    title: 'BSc in Environmental Engineering',
    institution: 'Brazil',
    year: 2015,
    note: 'Exchange period (sandwich program) at Arizona State University, USA.',
  },
]

export function jsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: 'Data Audit Specialist',
    url: person.siteUrl,
    email: `mailto:${person.email}`,
    worksFor: { '@type': 'Organization', name: experience[0].name },
    alumniOf: education.map(d => ({ '@type': 'CollegeOrUniversity', name: d.institution })),
    sameAs: person.links.map(l => l.href),
  }
}
