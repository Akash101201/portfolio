import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { profile, skillGroups } from "@/data/resume";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "Zebra Technologies" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "PES University" },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: skillGroups.flatMap((g) => g.skills).slice(0, 30),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
