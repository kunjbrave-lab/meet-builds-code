import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  About,
  Contact,
  Education,
  Experience,
  LookingFor,
  Projects,
  Skills,
} from "@/components/site/Sections";

const title = "Meet Patel — Java, Kotlin & Android Developer";
const description =
  "Portfolio of Meet Patel, a Computer Science Engineering graduate building Java, Kotlin, Android and backend applications in Mehsana, Gujarat.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <LookingFor />
        <Contact />
      </main>
    </div>
  );
}
