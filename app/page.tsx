import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import Terminal from "../components/Terminal";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import SkillSnapshot from "../components/SkillSnapshot";
import InfraArchitecture from "../components/InfraArchitecture";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Terminal />

        {/* Quick access — below terminal */}
        <div className="bg-black px-6 py-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <InfraArchitecture />
          <SkillSnapshot />
        </div>

        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <footer className="bg-black border-t border-zinc-900 py-8 px-6 text-center">
        <p className="text-zinc-600 text-sm">
          © 2026 Vikash Jaiswal · Built with Next.js, TypeScript & Tailwind CSS
        </p>
      </footer>
    </>
  );
}
