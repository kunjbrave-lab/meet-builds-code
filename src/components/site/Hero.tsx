import { ArrowDown, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/meet-patel.jpg.asset.json";

const badges = ["Java", "Kotlin", "Android", "MySQL"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-10 sm:pt-40 sm:pb-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-muted-foreground">
            SOFTWARE DEVELOPER • JAVA • KOTLIN • ANDROID
          </p>
          <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
            Building practical software with{" "}
            <span className="text-gradient">clean code &amp; curiosity.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I'm Meet Patel, a Computer Science Engineering graduate focused on Java, Kotlin, Android
            development, backend technologies, and database-driven applications.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              View My Work <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Let's Connect
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-2 animate-ping rounded-full bg-electric opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-electric" />
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Open to Software Development Opportunities
            </span>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-6 rounded-[2.5rem] opacity-40 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_40px_90px_-50px_rgba(15,23,42,0.55)]">
            <img
              src={portrait.url}
              alt="Portrait of Meet Patel, software developer"
              className="aspect-[4/5] w-full object-cover object-top"
              loading="eager"
            />
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2 lg:absolute lg:-right-4 lg:bottom-10 lg:mt-0 lg:max-w-[8rem] lg:justify-end">
            {badges.map((b) => (
              <span
                key={b}
                className="glass rounded-full px-4 py-2 text-xs font-semibold text-foreground shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll to about"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
