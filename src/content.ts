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
  headline: 'Data Audit Specialist · Internal Audit · AI Agents · University Professor',
  location: 'Santos, São Paulo, Brazil',
  email: 'dantaserick@hotmail.com',
  siteUrl: 'https://dantaserick.github.io/',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/erick-dantas-29594362/' },
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
  { value: '10+', label: 'years across engineering, research and audit' },
  { value: '3rd', label: 'line of defense, Internal Audit' },
  { value: '2022', label: 'in Internal Audit data team since' },
  { value: 'MSc', label: 'Universidade Federal de São Paulo' },
  { value: '2019', label: 'University Professor since' },
]

export const heroIntro =
  'I turn audit objectives into analytical tests over large-scale financial data, and build governed AI agents so audits scale without losing rigor.'

export const about: string[] = [
  'Environmental Engineer turned Data Scientist, with 10+ years across environmental sciences, academic research and corporate data auditing.',
  'Today I am a Data Audit Specialist in the third line of defense at a large digital bank: I lead Continuous Auditing over large-scale financial data and build the agents, and the governance around them, that make an AI-first audit practice auditable.',
  'Outside work I build software with AI coding agents: multi-agent pipelines with human approval gates, append-only ledgers for traceability, and test suites in the hundreds. The same discipline I apply to audit evidence, applied to what the agents produce.',
  'In parallel, I teach in distance-learning programs in Environmental Management and Biological Sciences.',
]

/** Fictional, generic alerts for the hero console. No real product, metric or data. */
export const heroAlerts: Alert[] = [
  { level: 'ok', label: 'DATA INTEGRITY', text: 'Coverage, completeness and accuracy tests passed for the monitored domain.' },
  { level: 'warn', label: 'AUTOMATED CONTROL', text: 'Exception pattern detected. Triage opened and routed to the business auditor.' },
  { level: 'info', label: 'AGENTIC AUDIT', text: 'Specialist agent drafted the workpaper. Meta-agent review passed. Awaiting human approval.' },
  { level: 'ok', label: 'CONTINUOUS AUDIT', text: 'Rule set refreshed. Audit universe re-scored. Next cycle scheduled.' },
  { level: 'info', label: 'TEACHING', text: 'New cohort onboarded. Integrated project briefs published.' },
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
          'Third line of defense, in the Internal Audit data team since 2022. Data and AI to assess and strengthen internal controls, risk management and governance across the bank’s products.',
        bullets: [
          'Turn audit objectives into analytical tests over the data lake: data coverage, integrity and accuracy, and the effectiveness of automated controls.',
          'Lead Continuous Auditing: automated-test roadmap, audit universes and rules in SQL, Scala and Python. Rationalized the test portfolio into a curated, high-materiality baseline and authored the multi-year proposal setting its direction: continuous auditing as a service, unified control monitoring, audit-by-design and continuous assurance.',
          'Drive the move from a centralized ETL model to a decentralized, AI-driven monitoring ecosystem, with agent-based review of the tests themselves.',
          'Designed and shipped specialist agents used on real fieldwork under human approval gates: data analysis across business domains, process and control mapping, control-test execution with traceable workpapers and audit reporting.',
          'Built the governance layer on top of them, including a meta-agent that audits AI agents and blocks sub-standard ones from production.',
          'Work cross-functionally with risk, product, engineering, data and compliance; build product inside the audit platform (AI-assisted evidence validation, SLA monitoring) and run the programming enablement program, mentoring teammates.',
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
    name: 'Data & Audit Engineering',
    items: ['SQL', 'Scala', 'Python', 'Databricks', 'Spark', 'Data lake analytics', 'Data quality testing'],
  },
  {
    name: 'Continuous Audit & Controls',
    items: [
      'Continuous auditing as a service',
      'Audit universes',
      'Automated audit tests',
      'Unified control monitoring',
      'Audit-by-design',
      'Continuous assurance',
      'Control effectiveness',
      'Third line of defense',
    ],
  },
  {
    name: 'AI & Agent Engineering',
    items: [
      'Agentic auditing',
      'Specialist audit agents (fieldwork, workpapers, reporting)',
      'Agent governance & meta-audit',
      'Multi-agent orchestration',
      'Human-in-the-loop gates',
      'Claude Code plugins & skills',
      'Browser automation (CDP)',
      'Agent-driven TDD',
      'Responsible AI use',
    ],
  },
  {
    name: 'Teaching & Research',
    items: ['Higher education (distance learning)', 'Environmental sciences', 'Academic research', 'Integrated project supervision', 'Programming enablement & mentoring'],
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
