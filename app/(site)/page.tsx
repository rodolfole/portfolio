import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Works from "@/components/sections/Works";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white dark:bg-slate-900">
      <Hero />
      <Works />
      <Skills />
      <Contact />
    </main>
  );
}
