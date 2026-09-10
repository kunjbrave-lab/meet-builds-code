import {
  Braces,
  Code2,
  Database,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Phone,
  Quote,
  Server,
  Smartphone,
  Sparkles,
  Linkedin,
  Globe,
  Boxes,
  Pill,
  ClipboardCheck,
  Glasses,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] font-semibold tracking-[0.28em] text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 leading-relaxed text-muted-foreground">{lead}</p> : null}
    </div>
  );
}

export function About() {
  const snapshot = [
    { label: "Degree", value: "B.E. Computer Science Engineering" },
    { label: "College", value: "Government Engineering College, Patan" },
    { label: "CGPA", value: "7.59" },
    { label: "Graduation", value: "2026" },
    { label: "Location", value: "Mehsana, Gujarat" },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHead eyebrow="ABOUT ME" title="Curious by default, practical by habit." />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I build software that solves everyday problems — inventory tools, attendance systems,
            and Android apps that people can actually use. My work sits where clean Java backends
            meet thoughtful mobile interfaces.
          </p>
          <p>
            Alongside my Computer Science Engineering degree, I've spent my time going deeper into
            Advanced Java, JDBC, Hibernate and Spring, plus Kotlin and Android Studio for native app
            development. I care about readable code, sensible database design, and shipping things
            that hold up.
          </p>
          <p>
            Outside of coursework I learn by building: taking a small idea, mapping the data model,
            and iterating until the flow feels obvious.
          </p>
        </div>

        <div className="glass rounded-3xl p-7">
          <div className="flex items-center gap-2.5">
            <Sparkles className="size-4 text-electric" />
            <h3 className="text-sm font-bold tracking-wide">Developer Snapshot</h3>
          </div>
          <dl className="mt-6 space-y-4">
            {snapshot.map((s) => (
              <div key={s.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <dt className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground">
                  {s.label.toUpperCase()}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

const stacks: { title: string; icon: LucideIcon; items: string[] }[] = [
  { title: "Programming Languages", icon: Code2, items: ["C", "SQL", "Java", "Kotlin"] },
  { title: "Web Technologies", icon: Globe, items: ["HTML", "CSS", "JavaScript"] },
  { title: "Android", icon: Smartphone, items: ["Android Studio", "XML", "UI Views"] },
  { title: "Backend", icon: Server, items: ["Java", "JDBC", "Hibernate", "Spring"] },
  { title: "Database", icon: Database, items: ["MySQL"] },
  {
    title: "Core Concepts",
    icon: Layers,
    items: ["Advanced Java", "CRUD", "MVC", "ORM", "Database Connectivity"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead
          eyebrow="TECH STACK"
          title="Tools I reach for."
          lead="The languages, frameworks and concepts I use day to day."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stacks.map(({ title, icon: Icon, items }) => (
            <div key={title} className="card-hover rounded-3xl border border-border bg-card p-6">
              <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-secondary text-electric">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-base font-bold">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    name: "Pharmacy Management System",
    icon: Pill,
    summary:
      "Desktop-grade pharmacy operations: medicine inventory, billing and stock alerts backed by a relational schema.",
    highlights: [
      "Hibernate ORM mapping for medicines, suppliers and invoices",
      "Spring-managed service layer with transactional billing",
      "Low-stock and expiry tracking queries",
    ],
    tech: ["Java", "JDBC", "MySQL", "Hibernate", "Spring"],
    mock: (
      <div className="space-y-2.5">
        <div className="flex items-center justify-between rounded-xl bg-card px-3 py-2.5 text-[10px] font-semibold">
          <span>Paracetamol 500mg</span>
          <span className="text-electric">120 in stock</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-card px-3 py-2.5 text-[10px] font-semibold">
          <span>Amoxicillin 250mg</span>
          <span className="text-violet">Low · 8</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-card px-3 py-2.5 text-[10px] font-semibold">
          <span>Invoice #2043</span>
          <span className="text-muted-foreground">₹1,240</span>
        </div>
      </div>
    ),
  },
  {
    name: "Attendance Management System",
    icon: ClipboardCheck,
    summary:
      "Servlet-driven web app where faculty mark attendance and students see per-subject percentages.",
    highlights: [
      "Servlet + JDBC MVC flow with session-based roles",
      "Daily and subject-wise attendance reports",
      "Normalised MySQL schema for students, subjects and records",
    ],
    tech: ["Java", "JDBC", "Servlets", "HTML", "CSS", "MySQL"],
    mock: (
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 21 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-md ${
              i % 7 === 5 ? "bg-violet/30" : i % 4 === 0 ? "bg-secondary" : "bg-electric/70"
            }`}
          />
        ))}
      </div>
    ),
  },
  {
    name: "OptiStock — Optical Stock Management App",
    icon: Glasses,
    summary:
      "Native Android app for optical stores to track frames, lenses and sales from a phone.",
    highlights: [
      "Kotlin app built with XML layouts and UI Views",
      "Category-wise frame and lens inventory",
      "Quick add, search and stock adjustment flows",
    ],
    tech: ["Kotlin", "Android Studio", "XML", "UI Views"],
    mock: (
      <div className="mx-auto w-28 rounded-2xl border border-border bg-card p-2">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-border" />
        <div className="space-y-1.5">
          <div className="h-6 rounded-lg bg-electric/70" />
          <div className="h-4 rounded-lg bg-secondary" />
          <div className="h-4 rounded-lg bg-secondary" />
          <div className="h-4 w-2/3 rounded-lg bg-violet/40" />
        </div>
      </div>
    ),
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHead
        eyebrow="SELECTED PROJECTS"
        title="Things I've built end to end."
        lead="From database schema to the screen people actually tap."
      />
      <div className="mt-12 space-y-6">
        {projects.map(({ name, icon: Icon, summary, highlights, tech, mock }) => (
          <article
            key={name}
            className="card-hover grid gap-8 rounded-[2rem] border border-border bg-card p-7 sm:p-9 lg:grid-cols-[1fr_18rem]"
          >
            <div>
              <div className="flex min-w-0 items-center gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-electric">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-xl font-bold sm:text-2xl">{name}</h3>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{summary}</p>
              <ul className="mt-5 space-y-2.5">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-electric" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center rounded-3xl border border-border bg-secondary/70 p-5">
              <div className="w-full">{mock}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const timeline = [
  {
    org: "CreArt Solutions Pvt. Ltd.",
    role: "Web Designing Intern",
    meta: "15 days",
    text: "Worked on responsive web layouts and design handoff, translating static designs into clean HTML and CSS.",
    tech: ["HTML", "CSS", "Responsive Design"],
  },
  {
    org: "Qspiders, Ahmedabad",
    role: "Java Full Stack Intern",
    meta: "Full Stack Training",
    text: "Built full stack modules covering front-end views, Java backend logic, JDBC database access and MVC-structured CRUD operations.",
    tech: ["HTML", "CSS", "JavaScript", "Java", "JDBC", "MySQL", "MVC", "CRUD"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead eyebrow="INTERNSHIP & EXPERIENCE" title="Where I've practised the craft." />
        <div className="mt-12 space-y-10 border-l border-border pl-7 sm:pl-10">
          {timeline.map((t) => (
            <div key={t.org} className="relative">
              <span
                className="absolute -left-[2.16rem] top-1.5 size-3 rounded-full ring-4 ring-card sm:-left-[2.79rem]"
                style={{ background: "var(--gradient-brand)" }}
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-bold">{t.org}</h3>
                <span className="text-xs font-semibold tracking-wide text-muted-foreground">
                  {t.meta}
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-electric">{t.role}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{t.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.tech.map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const education = [
  {
    years: "2022 – 2026",
    title: "B.E. Computer Science Engineering",
    place: "Government Engineering College, Patan",
    score: "CGPA 7.59",
  },
  {
    years: "2021 – 2022",
    title: "H.S.C.",
    place: "Shri J.M. Chaudhary Sarvajanik Vidhyalaya, Mehsana",
    score: "72.76%",
  },
  {
    years: "2019 – 2020",
    title: "S.S.C.",
    place: "Shri J.M. Chaudhary Sarvajanik Vidhyalaya, Mehsana",
    score: "80.16%",
  },
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHead eyebrow="EDUCATION" title="Academic foundation." />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {education.map((e) => (
          <div key={e.title} className="card-hover rounded-3xl border border-border bg-card p-6">
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <GraduationCap className="size-4 shrink-0" />
              <span className="text-xs font-semibold tracking-[0.16em]">{e.years}</span>
            </div>
            <h3 className="mt-4 text-lg font-bold">{e.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.place}</p>
            <p className="mt-4 text-sm font-bold text-gradient">{e.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function LookingFor() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-primary px-7 py-12 text-primary-foreground sm:px-14 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--gradient-brand)" }}
        />
        <div className="relative max-w-3xl">
          <Quote className="size-8 opacity-60" />
          <p className="mt-6 font-display text-2xl leading-snug font-bold sm:text-3xl">
            I'm looking for a software development role where I can contribute to real products —
            writing clean Java or Kotlin, working close to the database, and growing with a team
            that reviews code and cares about quality.
          </p>
          <p className="mt-6 text-sm opacity-70">What I'm looking for · Meet Patel</p>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
          <Boxes className="size-4" /> Languages
        </div>
        {["English", "Gujarati", "Hindi"].map((l) => (
          <span
            key={l}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
          >
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const details = [
    { icon: Mail, label: "patelmeet03092005@gmail.com", href: "mailto:patelmeet03092005@gmail.com" },
    { icon: Phone, label: "+91 9016785700", href: "tel:+919016785700" },
    { icon: MapPin, label: "Mehsana, Gujarat", href: null },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/" },
  ];

  return (
    <section id="contact" className="border-t border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHead
              eyebrow="CONTACT"
              title="Let's build something useful."
              lead="Open to software development roles, internships and collaborations. The fastest way to reach me is email."
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="mailto:patelmeet03092005@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <Mail className="size-4" /> Email Me
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Linkedin className="size-4" /> Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl p-7">
            <div className="flex items-center gap-2.5">
              <Braces className="size-4 text-electric" />
              <h3 className="text-sm font-bold tracking-wide">Details</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {details.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3 border-b border-border pb-4 last:border-0 last:pb-0">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-electric">
                    <Icon className="size-4" />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="min-w-0 truncate text-sm font-medium hover:text-electric"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="min-w-0 truncate text-sm font-medium">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-7 sm:flex-row sm:px-8">
          <span className="font-display text-xs font-extrabold tracking-[0.22em]">MEET PATEL</span>
          <p className="text-xs text-muted-foreground">© 2026 Meet Patel. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}
