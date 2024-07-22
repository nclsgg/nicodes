import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Separator from "@/components/Separator";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 md:gap-14">
      <Resume />
      <Separator name="Projetos" />
      <Projects />
      <Separator name="Sobre mim"/>
      <AboutMe />
    </main>
  );
}
