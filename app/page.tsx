import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import ResumeDownload from '@/components/ResumeDownload';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <Terminal />
      <Skills />
      <Timeline />
      <Projects />
      <ResumeDownload />
      <Contact />
    </main>
  );
}
